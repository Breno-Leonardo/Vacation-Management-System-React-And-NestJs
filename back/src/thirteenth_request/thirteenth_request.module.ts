import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ThirteenthRequestEntity } from './entities/thirteenth_request.entity';
import { ThirteenthRequestController } from './thirteenth_request.controller';
import { ThirteenthRequestService } from './thirteenth_request.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([ThirteenthRequestEntity]),
    JwtModule.registerAsync({
      useFactory: () => ({
        secret: process.env.JWT_SECRET,
        signOptions: { expiresIn: process.env.JWT_TIME_EXPIRES },
      }),
    }),
  ],
  controllers: [ThirteenthRequestController],
  providers: [ThirteenthRequestService],
})
export class ThirteenthRequestModule {}
