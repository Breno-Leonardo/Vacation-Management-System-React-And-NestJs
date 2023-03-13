import { ReturnCollaboratorDto } from 'src/collaborator/dto/returnCollaborator.dto';
import { ThirteenthRequestEntity } from '../entities/thirteenth_request.entity';

export class ReturnThirteenthRequestDto {
  id: number;
  dataSolicitacao: Date;
  colaborador: ReturnCollaboratorDto;

  constructor(thirteenthRequestEntity: ThirteenthRequestEntity) {
    this.id = thirteenthRequestEntity.id;
    this.dataSolicitacao = thirteenthRequestEntity.dataSolicitacao;
    this.colaborador = new ReturnCollaboratorDto(
      thirteenthRequestEntity.colaborador,
    );
  }
}
