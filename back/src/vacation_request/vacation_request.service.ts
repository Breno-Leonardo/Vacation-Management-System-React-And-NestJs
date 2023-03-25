import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ReturnVacationRequestDto } from './dto/returnVacationRequest.dto';
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
    }
    return;
  }

  async getAllRequests(): Promise<ReturnVacationRequestDto[]> {
    return (
      await this.vacationRepository.find({ relations: ['colaborador'] })
    ).map((t) => new ReturnVacationRequestDto(t));
  }
}
