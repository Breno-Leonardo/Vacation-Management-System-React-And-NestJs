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
@Controller('decimo-terceiro')
export class ThirteenthRequestController {
  constructor(
    private readonly thirteenthRequestService: ThirteenthRequestService,
  ) {}

  @Get('lista-solicitacoes')
  async getAllRequest() {
    return this.thirteenthRequestService.getAllRequests();
  }
  @UsePipes(ValidationPipe)
  @Post('nova-solicitacao')
  async createRequest(
    @Body() createThirteenthRequest: CreateThirteenthRequestDto,
  ) {
    return this.thirteenthRequestService.createThirteenthRequest(
      createThirteenthRequest,
    );
  }
}
