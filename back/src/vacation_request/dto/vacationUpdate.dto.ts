import { IsDateString, IsString } from 'class-validator';

export class UpdateVacationRequestDto {
  @IsString()
  mensagemGestor: string;

  @IsString()
  statusSolicitacao: string;
}
