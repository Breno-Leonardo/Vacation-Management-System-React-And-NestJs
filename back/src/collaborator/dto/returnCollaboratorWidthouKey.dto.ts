import { CreateTeamDto } from 'src/team/dto/createTeam.dto';
import { CollaboratorEntity } from '../entities/collaborator.entity';

export class ReturnCollaboratorDtoWithoutKey {
  matricula: string;
  nome: string;
  cpf: string;
  cargo: string;
  email: string;
  gmail: string;
  dataAdmissao: Date;
  saldoDiasFerias: number;
  modeloContratacao: string;
  fimAquisitivo: Date;
  time: CreateTeamDto;

  constructor(collaboratorEntity: CollaboratorEntity) {
    this.matricula = collaboratorEntity.matricula;
    this.nome = collaboratorEntity.nome;
    this.cpf = collaboratorEntity.cpf;
    this.cargo = collaboratorEntity.cargo;
    this.email = collaboratorEntity.email;
    this.gmail = collaboratorEntity.gmail;
    this.dataAdmissao = collaboratorEntity.dataAdmissao;
    this.saldoDiasFerias = collaboratorEntity.saldoDiasFerias;
    this.modeloContratacao = collaboratorEntity.modeloContratacao;
    this.fimAquisitivo = collaboratorEntity.fimAquisitivo;
    this.time = collaboratorEntity.time;
  }
}
