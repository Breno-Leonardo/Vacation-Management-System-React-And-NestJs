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
@Controller('team')
export class TeamController {
  constructor(private readonly teamService: TeamService) {}

  @Get()
  async getAllTeams() {
    return this.teamService.getAllTeams();
  }
  @UsePipes(ValidationPipe)
  @Post()
  async createTeam(@Body() createTeam: CreateTeamDto) {
    return this.teamService.createTeam(createTeam);
  }
}
