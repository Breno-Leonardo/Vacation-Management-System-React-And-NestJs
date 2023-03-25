import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VacationRequestEntity } from './entities/vacation_request.entity';
import { VacationRequestController } from './vacation_request.controller';
import { VacationRequestService } from './vacation_request.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([VacationRequestEntity]),
    JwtModule.registerAsync({
      useFactory: () => ({
        secret: process.env.JWT_SECRET,
        signOptions: { expiresIn: process.env.JWT_TIME_EXPIRES },
      }),
    }),
  ],
  controllers: [VacationRequestController],
  providers: [VacationRequestService],
})
export class VacationRequestModule {}
