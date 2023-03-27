import {
  Controller,
  Get,
  Body,
  Post,
  UsePipes,
  ValidationPipe,
  Headers,
} from '@nestjs/common';
import { Param } from '@nestjs/common/decorators';

import { CollaboratorType } from 'src/collaborator/enum/collaborator-type';
import { Roles } from 'src/decorators/roles.decorator';

import { CreateVacationRequestDto } from './dto/vacation_request.dto';
import { VacationRequestService } from './vacation_request.service';
@Controller('solicitacao-ferias')
export class VacationRequestController {
  constructor(
    private readonly vacationRequestService: VacationRequestService,
  ) {}

  @Roles([
    CollaboratorType.CollaboratorManager,
    CollaboratorType.Rh,
    CollaboratorType.Manager,
    CollaboratorType.Collaborator,
  ])
  @Get('lista-solicitacoes')
  async getAllRequests() {
    return this.vacationRequestService.getAllRequests();
  }

  @Roles([
    CollaboratorType.CollaboratorManager,
    CollaboratorType.Rh,
    CollaboratorType.Manager,
    CollaboratorType.Collaborator,
  ])
  @Get('lista-solicitacoes/:matricula')
  async getAllRequestsByRegistration(@Param('matricula') matricula) {
    return this.vacationRequestService.getAllRequestsByRegistration(matricula);
  }

  @Roles([
    CollaboratorType.CollaboratorManager,
    CollaboratorType.Manager,
    CollaboratorType.Collaborator,
  ])
  @UsePipes(ValidationPipe)
  @Post('nova-solicitacao')
  async createRequest(
    @Body() createVacationRequest: CreateVacationRequestDto,
    @Headers() headers,
  ) {
    //values to check if registration  in the token is the same as in the body of the request
    const bodyValues = new Map(Object.entries(createVacationRequest));
    return this.vacationRequestService.createVacationRequest(
      createVacationRequest,
      headers.authorization,
      bodyValues.get('colaborador'),
    );
  }
}
