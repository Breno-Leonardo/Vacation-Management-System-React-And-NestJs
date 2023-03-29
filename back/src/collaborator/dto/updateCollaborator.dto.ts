import { IsDateString, IsInt, IsString } from 'class-validator';
import { CreateTeamDto } from 'src/team/dto/createTeam.dto';

export class UpdateCollaboratorDto {
  @IsString()
  matricula: string;

  @IsString()
  nome: string;

  @IsString()
  cpf: string;

  @IsString()
  cargo: string;

  @IsString()
  email: string;

  @IsString()
  gmail: string;

  @IsInt()
  saldoDiasFerias: number;

  @IsString()
  modeloContratacao: string;

  time: CreateTeamDto;
}
