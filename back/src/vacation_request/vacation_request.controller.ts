import {
  Controller,
  Get,
  Body,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateVacationRequestDto } from './dto/vacation_request.dto';
import { VacationRequestService } from './vacation_request.service';
@Controller('solicitacao-ferias')
export class VacationRequestController {
  constructor(
    private readonly thirteenthRequestService: VacationRequestService,
  ) {}

  @Get('lista-solicitacoes')
  async getAllRequests() {
    return this.thirteenthRequestService.getAllRequests();
  }
  @UsePipes(ValidationPipe)
  @Post('nova-solicitacao')
  async createRequest(@Body() createVacationRequest: CreateVacationRequestDto) {
    return this.thirteenthRequestService.createVacationRequest(
      createVacationRequest,
    );
  }
}
