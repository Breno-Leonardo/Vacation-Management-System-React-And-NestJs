# Python 

Responsável pelos serviços de envio de e-mail, mensagem no workplace e geração de relatório xlsx.

É necessario um arquivo .env com as seguintes informações:

```
TOKEN= token para o workplace

KEY_EMAIL= chave de acesso de aplicativos para o e-mail, utilizei gmail

KEY_JWT= A mesma do back end
```

## Rotas:

```
Enviar notificação por e-mail para o gestor: URL_BASE_PYTHON/enviar-email
Body:
{
	"gestor":"Nome Gestor",
	"colaborador": "Nome Colaborador",
	"colaboradorMatricula":"",
	"inicio":"07/01/2023",
	"fim":"17/01/2023",
	"email":"email do gestor",
	"gmail":"gmail do gestor"

}

Enviar e-mail resposta para o colaborador: URL_BASE_PYTHON/enviar-email-resposta
Body:
{
  "gestor":"Nome Gestor",
  "colaborador": "Nome Colaborador",
  "colaboradorMatricula":"",
  "inicio":"07/01/2023",
  "fim":"17/01/2023",
  "email":"email do colaborador",
  "gmail":"gmail do colaborador"
  "mensagem": "mensagem de resposta do gestor",
  "aprovou": true,
}

Enviar notificação por mensagem no workplace: URL_BASE_PYTHON/enviar-mensagem-workplace
Body:
{
	"gestor":"Nome Gestor",
	"colaborador": "Nome Colaborador",
	"colaboradorMatricula":"",
	"inicio":"07/01/2023",
	"fim":"17/01/2023"
}

Baixar relatório xlsx: URL_BASE_PYTHON/baixar-xlsx
Body: os dados do relatório
```

