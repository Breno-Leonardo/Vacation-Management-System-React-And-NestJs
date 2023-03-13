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
@Controller('vacation-request')
export class VacationRequestController {
  constructor(
    private readonly thirteenthRequestService: VacationRequestService,
  ) {}

  @Get()
  async getAllTeams() {
    return this.thirteenthRequestService.getAllRequests();
  }
  @UsePipes(ValidationPipe)
  @Post()
  async createTeam(@Body() createVacationRequest: CreateVacationRequestDto) {
    return this.thirteenthRequestService.createVacationRequest(
      createVacationRequest,
    );
  }
}
