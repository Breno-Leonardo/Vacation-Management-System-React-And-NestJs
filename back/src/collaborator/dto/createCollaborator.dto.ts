import { IsDateString, IsInt, IsString } from 'class-validator';
import { CreateTeamDto } from 'src/team/dto/createTeam.dto';

export class CreateCollaboratorDto {
  @IsString()
  matricula: string;

  @IsString()
  nome: string;

  @IsString()
  cpf: string;

  @IsString()
  senha: string;

  @IsString()
  cargo: string;

  @IsString()
  email: string;

  @IsString()
  gmail: string;

  @IsDateString()
  dataAdmissao: Date;

  @IsInt()
  saldoDiasFerias: number;

  @IsString()
  modeloContratacao: string;

  @IsDateString()
  fimAquisitivo: Date;

  time: CreateTeamDto;
}
