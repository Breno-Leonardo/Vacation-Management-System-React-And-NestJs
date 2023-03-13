import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ReturnVacationRequestDto } from './dto/returnVacationRequest.dto';
import { CreateVacationRequestDto } from './dto/vacation_request.dto';
import { VacationRequestEntity } from './entities/vacation_request.entity';

@Injectable()
export class VacationRequestService {
  constructor(
    @InjectRepository(VacationRequestEntity)
    private readonly teamRepository: Repository<VacationRequestEntity>,
  ) {}

  async createVacationRequest(
    createThirteenthRequestDto: CreateVacationRequestDto,
  ): Promise<VacationRequestEntity> {
    return this.teamRepository.save({
      ...createThirteenthRequestDto,
    });
  }

  async getAllRequests(): Promise<ReturnVacationRequestDto[]> {
    return (await this.teamRepository.find({ relations: ['colaborador'] })).map(
      (t) => new ReturnVacationRequestDto(t),
    );
  }
}
