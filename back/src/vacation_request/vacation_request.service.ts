import { Injectable, NotFoundException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ReturnVacationRequestDto } from './dto/returnVacationRequest.dto';
import { UpdateVacationRequestDto } from './dto/vacationUpdate.dto';
import { CreateVacationRequestDto } from './dto/vacation_request.dto';
import { VacationRequestEntity } from './entities/vacation_request.entity';

@Injectable()
export class VacationRequestService {
  constructor(
    @InjectRepository(VacationRequestEntity)
    private readonly vacationRepository: Repository<VacationRequestEntity>,
    private jwtService: JwtService,
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
    return (
      await this.vacationRepository.find({
        relations: ['colaborador', 'colaborador.time'],
      })
    ).map((t) => new ReturnVacationRequestDto(t));
  }

  async getRequestByID(id): Promise<ReturnVacationRequestDto[]> {
    return (
      await this.vacationRepository.find({
        relations: ['colaborador', 'colaborador.time'],
        where: { id },
      })
    ).map((t) => new ReturnVacationRequestDto(t));
  }

  async getAllRequestsByTeam(teamId): Promise<ReturnVacationRequestDto[]> {
    return (
      await this.vacationRepository.find({
        relations: ['colaborador', 'colaborador.time'],
      })
    )
      .filter((t) => t.colaborador.time.id == teamId)
      .map((t) => new ReturnVacationRequestDto(t));
  }
  async getAllRequestsByRegistration(
    matricula: string,
  ): Promise<ReturnVacationRequestDto[]> {
    return (
      (
        await this.vacationRepository.find({
          relations: ['colaborador'],
        })
      )
        //filtering the teams that have the manager with the same registration
        .filter((t) => t.colaborador.matricula == matricula)
        .map((t) => new ReturnVacationRequestDto(t))
    );
  }

  async findRequestById(id: number): Promise<VacationRequestEntity> {
    const request = await this.vacationRepository.findOne({
      where: {
        id: id,
      },
      relations: ['colaborador', 'colaborador.time'],
    });

    if (!request) {
      throw new NotFoundException(`Request ${id} not found`);
    }

    return request;
  }

  async updateRequestByRegistration(
    id: number,
    update,
  ): Promise<UpdateVacationRequestDto> {
    return this.vacationRepository.save({
      ...update,
    });
  }
}
