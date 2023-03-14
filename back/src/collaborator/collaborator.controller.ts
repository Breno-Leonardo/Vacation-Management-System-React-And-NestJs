import {
  Controller,
  Get,
  Body,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateCollaboratorDto } from './dto/createCollaborator.dto';
import { CollaboratorService } from './collaborator.service';
@Controller('colaborador')
export class CollaboratorController {
  constructor(private readonly collaboratorService: CollaboratorService) {}

  @Get('lista-colaboradores')
  async getAllCollaborators() {
    return this.collaboratorService.getAllCollaborators();
  }

  @UsePipes(ValidationPipe)
  @Post('cadastro')
  async createCollaborator(
    @Body() createCollaboratorDto: CreateCollaboratorDto,
  ) {
    return this.collaboratorService.createCollaborator(createCollaboratorDto);
  }
}
