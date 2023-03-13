import { IsString } from 'class-validator';
import { CollaboratorEntity } from '../entities/collaborator.entity';

export class ReturnCollaboratorDto {
  @IsString()
  matricula: string;

  @IsString()
  nome: string;

  constructor(collaboratorEntity: CollaboratorEntity) {
    this.matricula = collaboratorEntity.matricula;
    this.nome = collaboratorEntity.nome;
  }
}
