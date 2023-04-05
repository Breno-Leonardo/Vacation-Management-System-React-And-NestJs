import { ReturnCollaboratorDto } from 'src/collaborator/dto/returnCollaborator.dto';
import { TeamEntity } from '../entities/team.entity';

export class ReturnTeamDto {
  id: number;
  nome: string;
  gestor: ReturnCollaboratorDto;

  constructor(teamEntity: TeamEntity) {
    this.id = teamEntity.id;
    this.nome = teamEntity.nome;
    this.gestor = {
      matricula: teamEntity.gestor.matricula,
      nome: teamEntity.gestor.nome,
      saldoDiasFerias: teamEntity.gestor.saldoDiasFerias,
      fimAquisitivo: teamEntity.gestor.fimAquisitivo,
      cargo: teamEntity.gestor.cargo,
      time: teamEntity.gestor.time,
      email: teamEntity.gestor.email,
      gmail: teamEntity.gestor.gmail,
    };
  }
}
