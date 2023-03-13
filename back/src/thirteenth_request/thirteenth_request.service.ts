import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ReturnThirteenthRequestDto } from './dto/returnThirteenthRequest.dto';
import { CreateThirteenthRequestDto } from './dto/thirteenth_request.dto';
import { ThirteenthRequestEntity } from './entities/thirteenth_request.entity';

@Injectable()
export class ThirteenthRequestService {
  constructor(
    @InjectRepository(ThirteenthRequestEntity)
    private readonly thirteenthRequestRepository: Repository<ThirteenthRequestEntity>,
  ) {}

  async createThirteenthRequest(
    createThirteenthRequestDto: CreateThirteenthRequestDto,
  ): Promise<ThirteenthRequestEntity> {
    return this.thirteenthRequestRepository.save({
      ...createThirteenthRequestDto,
    });
  }

  async getAllRequests(): Promise<ReturnThirteenthRequestDto[]> {
    return (
      await this.thirteenthRequestRepository.find({
        relations: ['colaborador'],
      })
    ).map((t) => new ReturnThirteenthRequestDto(t));
  }
}
