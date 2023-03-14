import {
  Controller,
  Get,
  Body,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateTeamDto } from './dto/createTeam.dto';
import { TeamService } from './team.service';
@Controller('times')
export class TeamController {
  constructor(private readonly teamService: TeamService) {}

  @Get('lista-times')
  async getAllTeams() {
    return this.teamService.getAllTeams();
  }
  @UsePipes(ValidationPipe)
  @Post('cadastro')
  async createTeam(@Body() createTeam: CreateTeamDto) {
    return this.teamService.createTeam(createTeam);
  }
}
