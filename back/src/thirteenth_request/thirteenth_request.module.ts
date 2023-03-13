import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ThirteenthRequestEntity } from './entities/thirteenth_request.entity';
import { ThirteenthRequestController } from './thirteenth_request.controller';
import { ThirteenthRequestService } from './thirteenth_request.service';

@Module({
  imports: [TypeOrmModule.forFeature([ThirteenthRequestEntity])],
  controllers: [ThirteenthRequestController],
  providers: [ThirteenthRequestService],
})
export class ThirteenthRequestModule {}
