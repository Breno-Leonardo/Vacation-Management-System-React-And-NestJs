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
import { Roles } from 'src/decorators/roles.decorator';
import { CollaboratorType } from './enum/collaborator-type';

@Controller('colaborador')
export class CollaboratorController {
  constructor(private readonly collaboratorService: CollaboratorService) {}

  @Roles([
    CollaboratorType.CollaboratorManager,
    CollaboratorType.Rh,
    CollaboratorType.Manager,
    CollaboratorType.Collaborator,
  ])
  @Get('lista-colaboradores')
  async getAllCollaborators() {
    return this.collaboratorService.getAllCollaborators();
  }

  @Roles([CollaboratorType.Rh])
  @UsePipes(ValidationPipe)
  @Post('cadastro')
  async createCollaborator(
    @Body() createCollaboratorDto: CreateCollaboratorDto,
  ) {
    return this.collaboratorService.createCollaborator(createCollaboratorDto);
  }
}
