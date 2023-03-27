import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
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
    private jwtService: JwtService,
  ) {}

  async createThirteenthRequest(
    createThirteenthRequestDto: CreateThirteenthRequestDto,
    token: string,
    matriculaBody: string,
  ): Promise<ThirteenthRequestEntity> {
    //testing if registration in token is equals registration in body request
    const matriculaToken = Object.values(this.jwtService.decode(token))[0];

    if (matriculaToken == matriculaBody) {
      return this.thirteenthRequestRepository.save({
        ...createThirteenthRequestDto,
      });
    } else throw new Error(`Incorrect Token`);
    return;
  }

  async getAllRequests(): Promise<ReturnThirteenthRequestDto[]> {
    return (
      await this.thirteenthRequestRepository.find({
        relations: ['colaborador'],
      })
    ).map((t) => new ReturnThirteenthRequestDto(t));
  }

  async getAllRequestsByRegistration(
    matricula: string,
  ): Promise<ReturnThirteenthRequestDto[]> {
    return (
      (
        await this.thirteenthRequestRepository.find({
          relations: ['colaborador'],
        })
      )
        //filtering the teams that have the manager with the same registration
        .filter((t) => t.colaborador.matricula == matricula)
        .map((t) => new ReturnThirteenthRequestDto(t))
    );
  }
}
