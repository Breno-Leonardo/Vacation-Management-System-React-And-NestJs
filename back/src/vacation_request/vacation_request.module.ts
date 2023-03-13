import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VacationRequestEntity } from './entities/vacation_request.entity';
import { VacationRequestController } from './vacation_request.controller';
import { VacationRequestService } from './vacation_request.service';

@Module({
  imports: [TypeOrmModule.forFeature([VacationRequestEntity])],
  controllers: [VacationRequestController],
  providers: [VacationRequestService],
})
export class VacationRequestModule {}
