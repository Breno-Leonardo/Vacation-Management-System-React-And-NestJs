import { ReturnCollaboratorDto } from 'src/collaborator/dto/returnCollaborator.dto';
import { TeamEntity } from '../entities/team.entity';

export class ReturnTeamDto {
  id: number;
  nome: string;
  gestor: ReturnCollaboratorDto;

  constructor(teamEntity: TeamEntity) {
    this.id = teamEntity.id;
    this.nome = teamEntity.nome;
    this.gestor = new ReturnCollaboratorDto(teamEntity.gestor);
  }
}
