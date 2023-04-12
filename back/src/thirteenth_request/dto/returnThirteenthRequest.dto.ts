import { ThirteenthRequestEntity } from '../entities/thirteenth_request.entity';
import { ReturnCollaboratorDtoWithoutKey } from 'src/collaborator/dto/returnCollaboratorWidthouKey.dto';

export class ReturnThirteenthRequestDto {
  id: number;
  dataSolicitacao: Date;
  colaborador: ReturnCollaboratorDtoWithoutKey;

  constructor(thirteenthRequestEntity: ThirteenthRequestEntity) {
    this.id = thirteenthRequestEntity.id;
    this.dataSolicitacao = thirteenthRequestEntity.dataSolicitacao;
    this.colaborador = new ReturnCollaboratorDtoWithoutKey(
      thirteenthRequestEntity.colaborador,
    );
  }
}
