import {
  Controller,
  Get,
  Body,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateThirteenthRequestDto } from './dto/thirteenth_request.dto';
import { ThirteenthRequestService } from './thirteenth_request.service';
@Controller('thirteenth-request')
export class ThirteenthRequestController {
  constructor(
    private readonly thirteenthRequestService: ThirteenthRequestService,
  ) {}

  @Get()
  async getAllTeams() {
    return this.thirteenthRequestService.getAllRequests();
  }
  @UsePipes(ValidationPipe)
  @Post()
  async createTeam(
    @Body() createThirteenthRequest: CreateThirteenthRequestDto,
  ) {
    return this.thirteenthRequestService.createThirteenthRequest(
      createThirteenthRequest,
    );
  }
}
