import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTeamDto } from './dto/createTeam.dto';
import { ReturnTeamDto } from './dto/returnTeam.dto';
import { TeamEntity } from './entities/team.entity';

@Injectable()
export class TeamService {
  constructor(
    @InjectRepository(TeamEntity)
    private readonly teamRepository: Repository<TeamEntity>,
  ) {}

  async createTeam(createTeamDto: CreateTeamDto): Promise<TeamEntity> {
    return this.teamRepository.save({
      ...createTeamDto,
    });
  }

  //primeiro tem que criar o gestor que não tem gestor e não é participante de nenhum time, somente lider
  async getAllTeams(): Promise<ReturnTeamDto[]> {
    return (await this.teamRepository.find({ relations: ['gestor'] })).map(
      (t) => new ReturnTeamDto(t),
    );
  }

  async getTeamsByMatriculaManager(
    matricula: string,
  ): Promise<ReturnTeamDto[]> {
    return (
      (
        await this.teamRepository.find({
          //get with the included manager
          relations: ['gestor'],
        })
      )
        //filtering the teams that have the manager with the same registration
        .filter((t) => t.gestor.matricula == matricula)
        .map((t) => new ReturnTeamDto(t))
    );
  }

  async getTeamsByID(id: number): Promise<ReturnTeamDto> {
    const t = await this.teamRepository.findOne({
      where: { id },
      relations: ['gestor'],
    });
    if (!t) {
      throw new NotFoundException(`Team: ${id} not found`);
    }
    return new ReturnTeamDto(t);
  }
}
