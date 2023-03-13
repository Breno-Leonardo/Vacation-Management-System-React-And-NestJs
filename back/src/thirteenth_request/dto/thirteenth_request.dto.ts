import { IsDateString } from 'class-validator';

export class CreateThirteenthRequestDto {
  @IsDateString()
  dataSolicitacao: Date;
}
