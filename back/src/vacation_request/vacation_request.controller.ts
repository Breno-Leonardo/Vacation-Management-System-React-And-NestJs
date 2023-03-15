import {
  Controller,
  Get,
  Body,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CollaboratorType } from 'src/collaborator/enum/collaborator-type';
import { Roles } from 'src/decorators/roles.decorator';
import { CreateVacationRequestDto } from './dto/vacation_request.dto';
import { VacationRequestService } from './vacation_request.service';
@Controller('solicitacao-ferias')
export class VacationRequestController {
  constructor(
    private readonly thirteenthRequestService: VacationRequestService,
  ) {}

  @Roles([
    CollaboratorType.CollaboratorManager,
    CollaboratorType.Rh,
    CollaboratorType.Manager,
    CollaboratorType.Collaborator,
  ])
  @Get('lista-solicitacoes')
  async getAllRequests() {
    return this.thirteenthRequestService.getAllRequests();
  }

  @Roles([
    CollaboratorType.CollaboratorManager,
    CollaboratorType.Manager,
    CollaboratorType.Collaborator,
  ])
  @UsePipes(ValidationPipe)
  @Post('nova-solicitacao')
  async createRequest(@Body() createVacationRequest: CreateVacationRequestDto) {
    return this.thirteenthRequestService.createVacationRequest(
      createVacationRequest,
    );
  }
}
