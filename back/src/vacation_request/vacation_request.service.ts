import { Injectable, NotFoundException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateVacationRequestDto } from './dto/vacation_request.dto';
import { VacationRequestEntity } from './entities/vacation_request.entity';
import { CollaboratorService } from 'src/collaborator/collaborator.service';
import { ReturnVacationRequestDto } from './dto/returnVacation.dto';

@Injectable()
export class VacationRequestService {
  constructor(
    @InjectRepository(VacationRequestEntity)
    private readonly vacationRepository: Repository<VacationRequestEntity>,
    private jwtService: JwtService,
    private readonly collacolaboratorService: CollaboratorService,
  ) {}

  async createVacationRequest(
    createVacationRequestDto: CreateVacationRequestDto,
    token: string,
    matriculaBody: string,
  ): Promise<VacationRequestEntity> {
    //testing if registration in token is equals registration in body request
    const matriculaToken = Object.values(this.jwtService.decode(token))[0];
    if (matriculaToken == matriculaBody) {
      return this.vacationRepository.save({
        ...createVacationRequestDto,
      });
    } else throw new Error(`Incorrect Token`);
    return;
  }

  async getAllRequests(): Promise<ReturnVacationRequestDto[]> {
    let requests = await this.vacationRepository.find({
      relations: ['colaborador', 'colaborador.time', 'colaborador.time.gestor'],
    });

    requests = requests.filter((t) => this.checkStatusRequest(t));
    return requests.map((t) => new ReturnVacationRequestDto(t));
  }

  async getAllRequestsByTeam(teamId): Promise<ReturnVacationRequestDto[]> {
    let requests = await this.vacationRepository.find({
      relations: ['colaborador', 'colaborador.time', 'colaborador.time.gestor'],
    });

    requests = requests.filter((t) => t.colaborador.time.id == teamId);

    requests = requests.filter((t) => this.checkStatusRequest(t));
    return requests.map((t) => new ReturnVacationRequestDto(t));
  }

  async getRequestByID(id): Promise<any> {
    let request = await this.vacationRepository.findOne({
      relations: ['colaborador', 'colaborador.time', 'colaborador.time.gestor'],
      where: { id },
    });
    request = await this.checkStatusRequest(request);

    return new ReturnVacationRequestDto(request);
  }

  async getAllRequestsByRegistration(
    matricula: string,
  ): Promise<ReturnVacationRequestDto[]> {
    let requests = await this.vacationRepository.find({
      relations: ['colaborador', 'colaborador.time', 'colaborador.time.gestor'],
    });

    requests = requests.filter((t) => t.colaborador.matricula == matricula);
    requests = requests.filter((t) => this.checkStatusRequest(t));
    return requests.map((t) => new ReturnVacationRequestDto(t));
  }

  async findRequestById(id: number): Promise<VacationRequestEntity> {
    const request = await this.vacationRepository.findOne({
      where: {
        id: id,
      },
      relations: ['colaborador', 'colaborador.time', 'colaborador.time.gestor'],
    });

    if (!request) {
      throw new NotFoundException(`Request ${id} not found`);
    }

    return request;
  }

  async checkStatusRequest(
    vacationRequestEntity: VacationRequestEntity,
  ): Promise<VacationRequestEntity> {
    if (vacationRequestEntity != undefined) {
      const status = vacationRequestEntity.statusSolicitacao;
      if (
        status.toLowerCase() == 'Em Férias'.toLocaleLowerCase() ||
        status.toLowerCase() == 'Agendada'.toLocaleLowerCase()
      ) {
        const dateStart = new Date(vacationRequestEntity.dataInicio);
        const dateEnd = new Date(vacationRequestEntity.dataTermino);
        const dateNow = new Date(Date.now());

        if (dateNow >= dateStart && dateNow <= dateEnd) {
          if (status.toLowerCase() == 'Agendada'.toLocaleLowerCase()) {
            vacationRequestEntity.statusSolicitacao = 'Em Férias';
            this.vacationRepository
              .save({
                ...vacationRequestEntity,
                statusSolicitacao: 'Em Férias',
              })
              .then()
              .catch((err) => {
                err;
              });
            return vacationRequestEntity;
          }
        } else if (dateNow > dateEnd) {
          if (status.toLowerCase() == 'Em Férias'.toLocaleLowerCase()) {
            // console.log('finalizando');
            vacationRequestEntity.statusSolicitacao = 'Finalizada';
            this.vacationRepository
              .save({
                ...vacationRequestEntity,
                statusSolicitacao: 'Finalizada',
              })
              .then()
              .catch((err) => {
                err;
              });
            return vacationRequestEntity;
          }
        }
      }
    }

    return vacationRequestEntity;
  }

  async updateRequestByRegistration(id: number, update): Promise<any> {
    const request = await this.findRequestById(id);
    this.vacationRepository
      .save({
        ...request,
        ...update,
      })
      .then()
      .catch((err) => {
        err;
      });
    return;
  }

  async acceptRequestByRegistration(id: number, update, debit): Promise<any> {
    const request = await this.findRequestById(id);
    this.collacolaboratorService.debitDaysVacation(
      request.colaborador.matricula,
      debit,
    );

    this.vacationRepository
      .save({
        ...request,
        ...update,
      })
      .then()
      .catch((err) => {
        err;
      });
    return;
  }
}
