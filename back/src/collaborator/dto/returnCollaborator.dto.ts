import { IsString } from 'class-validator';
import { TeamEntity } from 'src/team/entities/team.entity';
import { CollaboratorEntity } from '../entities/collaborator.entity';

export class ReturnCollaboratorDto {
  @IsString()
  matricula: string;

  @IsString()
  nome: string;

  fimAquisitivo: Date;

  saldoDiasFerias: number;
  cargo: string;
  time: TeamEntity;
  constructor(collaboratorEntity: CollaboratorEntity) {
    this.matricula = collaboratorEntity.matricula;
    this.nome = collaboratorEntity.nome;
    this.time = collaboratorEntity.time;
    this.fimAquisitivo = collaboratorEntity.fimAquisitivo;
    this.saldoDiasFerias = collaboratorEntity.saldoDiasFerias;
    this.cargo = collaboratorEntity.cargo;
  }
}
