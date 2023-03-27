import { IsString } from 'class-validator';

export class CreateTeamDto {
  id: number;
  @IsString()
  nome: string;
}
