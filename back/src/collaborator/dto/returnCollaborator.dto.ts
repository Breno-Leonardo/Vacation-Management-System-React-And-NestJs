import { IsString } from 'class-validator';
import { TeamEntity } from 'src/team/entities/team.entity';
import { CollaboratorEntity } from '../entities/collaborator.entity';
import { ReturnTeamDto } from 'src/team/dto/returnTeam.dto';

export class ReturnCollaboratorDto {
  @IsString()
  matricula: string;

  @IsString()
  nome: string;

  fimAquisitivo: Date;

  saldoDiasFerias: number;
  cargo: string;
  time: ReturnTeamDto;
  email: string;
  gmail: string;
  constructor(collaboratorEntity: CollaboratorEntity) {
    this.matricula = collaboratorEntity.matricula;
    this.nome = collaboratorEntity.nome;
    this.time = new ReturnTeamDto(collaboratorEntity.time);
    this.fimAquisitivo = collaboratorEntity.fimAquisitivo;
    this.saldoDiasFerias = collaboratorEntity.saldoDiasFerias;
    this.cargo = collaboratorEntity.cargo;
    this.email = collaboratorEntity.email;
    this.gmail = collaboratorEntity.gmail;
  }
}
