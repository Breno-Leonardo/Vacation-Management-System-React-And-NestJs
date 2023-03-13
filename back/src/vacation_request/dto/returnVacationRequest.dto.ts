import { ReturnCollaboratorDto } from 'src/collaborator/dto/returnCollaborator.dto';
import { VacationRequestEntity } from '../entities/vacation_request.entity';

export class ReturnVacationRequestDto {
  id: number;
  dataSolicitacao: Date;
  dataInicio: Date;
  dataTermino: Date;
  mensagemColaborador: string;
  mensagemGestor: string;
  statusSolicitacao: string;
  colaborador: ReturnCollaboratorDto;

  constructor(vacationRequestEntity: VacationRequestEntity) {
    this.id = vacationRequestEntity.id;
    this.dataInicio = vacationRequestEntity.dataInicio;
    this.dataTermino = vacationRequestEntity.dataTermino;
    this.dataSolicitacao = vacationRequestEntity.dataSolicitacao;
    this.mensagemColaborador = vacationRequestEntity.mensagemColaborador;
    this.mensagemGestor = vacationRequestEntity.mensagemGestor;
    this.statusSolicitacao = vacationRequestEntity.statusSolicitacao;
    this.colaborador = new ReturnCollaboratorDto(
      vacationRequestEntity.colaborador,
    );
  }
}
