import os
import smtplib
import json
from email.message import EmailMessage
from flask import Flask, request, Response
import requests
from bs4 import BeautifulSoup
import jwt
from dotenv import load_dotenv
import os
from flask_cors import CORS
import csv
import io
import xlsxwriter
import pandas as pd


app = Flask(__name__)
CORS(app)
load_dotenv()

jwt_key = os.getenv('KEY_JWT')
token = os.getenv('TOKEN')
key_email = os.getenv('KEY_EMAIL')


def jwt_required(f):
    def wrapper(*args, **kwargs):
        token = None

        if 'Authorization' in request.headers:
            token = request.headers['Authorization']

        if not token:
            return {'error': 'Token de autenticação ausente'}, 401

        try:
            payload = jwt.decode(token, jwt_key, algorithms=["HS256"])
        except jwt.InvalidTokenError:
            return {'error': 'Token de autenticação inválido'}, 401

        return f(*args, **kwargs)

    wrapper.__name__ = f.__name__
    return wrapper

# email para o gestor
@app.route('/enviar-email', methods=['POST'])
@jwt_required
def send_email():
    data = request.json
    email = "queroqueroferias@gmail.com"
    gestor = data['gestor']
    colaborador = data['colaborador']
    colaboradorMatricula = data['colaboradorMatricula']
    recipientEmail = data['email']
    recipientGmail = data['gmail']
    inicio = data['inicio']
    fim = data['fim']

    msg = EmailMessage()
    msg['Subject'] = 'Agendamento De Férias'
    msg['From'] = email
    msg['To'] = f'{recipientEmail},{recipientGmail}'

    msg.set_content(
        f'Olá {gestor}, o colaborador {colaborador} de matricula {colaboradorMatricula}, está requisitando férias de {inicio} até {fim}.')

    with smtplib.SMTP_SSL('smtp.gmail.com', 465) as smtp:
        smtp.login(email, key_email)
        smtp.send_message(msg)

    json_string = '{"Envio": "Enviado com sucesso"}'

    json_response = json.loads(json_string)

    return json_response

# email de resposta para o colaborador
@app.route('/enviar-email-resposta', methods=['POST'])
@jwt_required
def send_email_response():
    data = request.json
    email = "queroqueroferias@gmail.com"
    colaborador = data['colaborador']
    colaboradorMatricula = data['colaboradorMatricula']
    recipientEmail = data['email']
    recipientGmail = data['gmail']
    inicio = data['inicio']
    fim = data['fim']
    mensagem = data['mensagem']
    aprovou = data['aprovou']

    msg = EmailMessage()
    msg['Subject'] = 'Agendamento De Férias'
    msg['From'] = email
    msg['To'] = f'{recipientEmail},{recipientGmail}'

    aux=inicio.split('/')
    dataInicio=aux[2]+aux[1]+aux[0]
    linkInicio= f"https://calendar.google.com/calendar/render?action=TEMPLATE&dates={dataInicio}%2F{dataInicio}&details=Início%20das%20férias%20de%20{inicio}%20até%20{fim}&text=Início%20férias%20de%20{inicio}%20até%20{fim}"

    aux=fim.split('/')
    dataFim=aux[2]+aux[1]+aux[0]
    linkFim= f"https://calendar.google.com/calendar/render?action=TEMPLATE&dates={dataFim}%2F{dataFim}&details=Término%20das%20férias%20de%20{inicio}%20até%20{fim}&text=Término%20férias%20de%20{inicio}%20até%20{fim}"

    
    if aprovou:
        if mensagem != "":
            msg.set_content(
            f'Olá colaborador {colaborador} de matrícula {colaboradorMatricula}, o gestor aprovou as férias de {inicio} até {fim}. Mensagem do gestor: {mensagem} \n \n Link para marcar lembrete do início no Google Agenda \n {linkInicio} \n \n Link para marcar lembrete do término no Google Agenda: \n {linkFim}')
        else:
            msg.set_content(
            f'Olá colaborador {colaborador} de matrícula {colaboradorMatricula}, o gestor aprovou as férias de {inicio} até {fim}. \n \n Link para marcar lembrete do início no Google Agenda \n {linkInicio} \n \n Link para marcar lembrete do término no Google Agenda: \n {linkFim}')

    elif aprovou == False:
            if mensagem != "":
                msg.set_content(
                f'Olá colaborador {colaborador} de matrícula {colaboradorMatricula}, o gestor reprovou as férias de {inicio} até {fim}. Mensagem do gestor: {mensagem}')
            else:
                msg.set_content(
                f'Olá colaborador {colaborador} de matrícula {colaboradorMatricula}, o gestor reprovou as férias de {inicio} até {fim}.')


    with smtplib.SMTP_SSL('smtp.gmail.com', 465) as smtp:
        smtp.login(email, key_email)
        smtp.send_message(msg)

    json_string = '{"Envio": "Enviado com sucesso"}'

    json_response = json.loads(json_string)

    return json_response


@app.route('/enviar-mensagem-workplace', methods=['POST'])
@jwt_required
def send_message_workplace():
    url = "https://graph.facebook.com/v4.0/me/messages"

    dataBody = request.json

    gestor = dataBody['gestor']
    colaborador = dataBody['colaborador']
    colaboradorMatricula = dataBody['colaboradorMatricula']
    inicio = dataBody['inicio']
    fim = dataBody['fim']

    msg = f'Olá {gestor}, o colaborador {colaborador} de matrícula {colaboradorMatricula}, está requisitando férias de {inicio} até {fim}.'

    headers = {
        "Authorization": f'Bearer {token}',
        'Content-Type': 'application/json'
    }
    data = {
        "messaging_type": "UPDATE",
        "recipient": {
            "id": 100089459611052,
        },
        "message": {
            "text": msg
        }
    }
    response = requests.post(url, headers=headers, json=data)
    json_string = '{"Envio": "Enviado com sucesso"}'

    json_response = json.loads(json_string)

    return json_response


@app.route('/baixar-csv', methods=['POST'])
@jwt_required
def baixar_csv():
    df = pd.DataFrame(request.json)
    output = io.StringIO()
    writer = csv.writer(output, delimiter=';')
    writer.writerow(df.columns)
    for linha in df.values:
        writer.writerow(linha)

    resposta = Response(output.getvalue())
    resposta.headers['Content-Disposition'] = 'attachment; filename=dados.csv'
    resposta.headers['Content-Type'] = 'text/csv'
    return resposta


@app.route('/baixar-xlsx', methods=['POST'])
@jwt_required
def baixar_xlsx():
    df = pd.DataFrame(request.json)
    output = io.BytesIO()
    writer = pd.ExcelWriter(output, engine='xlsxwriter')

    grupos = df.groupby('Time')

    for nome_planilha, grupo in grupos:
        grupo.to_excel(writer, sheet_name=nome_planilha, index=False)

    writer.save()
    output.seek(0)

    resposta = Response(output.getvalue())
    resposta.headers['Content-Disposition'] = 'attachment; filename=dados.xlsx'
    resposta.headers['Content-Type'] = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
    return resposta


if __name__ == '__main__':
    app.run()
