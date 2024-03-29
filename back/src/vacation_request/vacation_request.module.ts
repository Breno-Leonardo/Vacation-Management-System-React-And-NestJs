import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VacationRequestEntity } from './entities/vacation_request.entity';
import { VacationRequestController } from './vacation_request.controller';
import { VacationRequestService } from './vacation_request.service';
import { CollaboratorService } from 'src/collaborator/collaborator.service';
import { CollaboratorModule } from 'src/collaborator/collaborator.module';

@Module({
  imports: [
    CollaboratorModule,
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
