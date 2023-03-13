import { IsDateString, IsString } from 'class-validator';

export class CreateVacationRequestDto {
  @IsDateString()
  dataSolicitacao: Date;

  @IsDateString()
  dataInicio: Date;

  @IsDateString()
  dataTermino: Date;

  @IsString()
  mensagemColaborador: string;

  @IsString()
  mensagemGestor: string;

  @IsString()
  statusSolicitacao: string;
}
