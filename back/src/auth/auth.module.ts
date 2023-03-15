import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { CollaboratorModule } from 'src/collaborator/collaborator.module';
import { JwtModule } from '@nestjs/jwt/dist';
import { TeamModule } from 'src/team/team.module';

@Module({
  imports: [
    CollaboratorModule,
    TeamModule,
    JwtModule.registerAsync({
      useFactory: () => ({
        secret: process.env.JWT_SECRET,
        signOptions: { expiresIn: process.env.JWT_TIME_EXPIRES },
      }),
    }),
  ],
  providers: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
