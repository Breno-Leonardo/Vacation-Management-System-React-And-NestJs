import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CollaboratorModule } from './collaborator/collaborator.module';
import { CollaboratorEntity } from './collaborator/entities/collaborator.entity';
import { createTables1678662502071 } from './migration/1678662502071-createTables';
import { initialData1678664119697 } from './migration/1678664119697-initial_data';
import { TeamEntity } from './team/entities/team.entity';
import { TeamModule } from './team/team.module';
import { ThirteenthRequestEntity } from './thirteenth_request/entities/thirteenth_request.entity';
import { ThirteenthRequestModule } from './thirteenth_request/thirteenth_request.module';
import { VacationRequestEntity } from './vacation_request/entities/vacation_request.entity';
import { VacationRequestModule } from './vacation_request/vacation_request.module';
import { AuthModule } from './auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
import { RolesGuard } from './collaborator/guards/roles.guards';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('DB_HOST', 'localhost'),
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_DATABASE'),
        schema: configService.get('DB_SCHEMA', 'projetoqq'),
        entities: [
          TeamEntity,
          CollaboratorEntity,
          ThirteenthRequestEntity,
          VacationRequestEntity,
        ],
        migrations: [createTables1678662502071, initialData1678664119697],
        migrationsRun: true,
        // synchronize: true,
      }),
    }),
    TeamModule,
    CollaboratorModule,
    ThirteenthRequestModule,
    VacationRequestModule,
    AuthModule,
    JwtModule,
  ],
  controllers: [AppController],
  providers: [AppService, { provide: APP_GUARD, useClass: RolesGuard }],
})
export class AppModule {}
