import {
  Controller,
  Get,
  Body,
  Post,
  UsePipes,
  ValidationPipe,
  Headers,
} from '@nestjs/common';
import { Param, Put } from '@nestjs/common/decorators';

import { CollaboratorType } from 'src/collaborator/enum/collaborator-type';
import { Roles } from 'src/decorators/roles.decorator';
import { UpdateVacationRequestDto } from './dto/vacationUpdate.dto';

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
  @Get('lista-solicitacoes/time/:teamId')
  async getAllRequestsByTeam(@Param('teamId') teamId) {
    return this.vacationRequestService.getAllRequestsByTeam(teamId);
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
    CollaboratorType.Rh,
    CollaboratorType.Manager,
  ])
  @Get('lista-solicitacoes/id/:id')
  async getAllRequestsByID(@Param('id') id) {
    return this.vacationRequestService.getRequestByID(id);
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

  @Roles([
    CollaboratorType.CollaboratorManager,
    CollaboratorType.Rh,
    CollaboratorType.Manager,
  ])
  @UsePipes(ValidationPipe)
  @Put('update/:id')
  async updateRequest(
    @Param('id') id,
    @Body() update: UpdateVacationRequestDto,
  ) {
    return this.vacationRequestService.updateRequestByRegistration(id, update);
  }

  @Roles([CollaboratorType.CollaboratorManager, CollaboratorType.Manager])
  @UsePipes(ValidationPipe)
  @Put('aprovar/:id/:debit')
  async acceptRequest(
    @Param('id') id,
    @Param('debit') debit,
    @Body() update: UpdateVacationRequestDto,
  ) {
    return this.vacationRequestService.acceptRequestByRegistration(
      id,
      update,
      debit,
    );
  }
}
