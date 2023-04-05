import {
  Controller,
  Get,
  Body,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { Param } from '@nestjs/common/decorators';
import { CollaboratorType } from 'src/collaborator/enum/collaborator-type';
import { Roles } from 'src/decorators/roles.decorator';
import { CreateTeamDto } from './dto/createTeam.dto';
import { TeamService } from './team.service';
@Controller('times')
export class TeamController {
  constructor(private readonly teamService: TeamService) {}

  @Roles([
    CollaboratorType.CollaboratorManager,
    CollaboratorType.Rh,
    CollaboratorType.Manager,
    CollaboratorType.Collaborator,
  ])
  @Get('lista-times')
  async getAllTeams() {
    return this.teamService.getAllTeams();
  }

  @Roles([
    CollaboratorType.CollaboratorManager,
    CollaboratorType.Rh,
    CollaboratorType.Manager,
    CollaboratorType.Collaborator,
  ])
  @Get('lista-times/id/:id')
  async getTeamsByID(@Param('id') id) {
    return this.teamService.getTeamsByID(id);
  }

  @Roles([
    CollaboratorType.CollaboratorManager,
    CollaboratorType.Rh,
    CollaboratorType.Manager,
    CollaboratorType.Collaborator,
  ])
  @Get('lista-times/:matricula')
  async getTeamsByManagerRegistration(@Param('matricula') matricula) {
    return this.teamService.getTeamsByMatriculaManager(matricula);
  }

  @Roles([CollaboratorType.Rh])
  @UsePipes(ValidationPipe)
  @Post('cadastro')
  async createTeam(@Body() createTeam: CreateTeamDto) {
    return this.teamService.createTeam(createTeam);
  }
}
