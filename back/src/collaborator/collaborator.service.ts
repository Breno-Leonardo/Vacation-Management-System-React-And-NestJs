import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCollaboratorDto } from './dto/createCollaborator.dto';
import { CollaboratorEntity } from './entities/collaborator.entity';
import * as bcrypt from 'bcrypt';
import { ReturnCollaboratorDtoWithoutKey } from './dto/returnCollaboratorWidthouKey.dto';

const saltOrRounds = 10;

@Injectable()
export class CollaboratorService {
  constructor(
    @InjectRepository(CollaboratorEntity)
    private readonly collaboratorRepository: Repository<CollaboratorEntity>,
  ) {}

  async createCollaborator(
    createCollaboratorDto: CreateCollaboratorDto,
  ): Promise<CollaboratorEntity> {
    const hash = await bcrypt.hash(createCollaboratorDto.senha, saltOrRounds);
    return this.collaboratorRepository.save({
      ...createCollaboratorDto,
      senha: hash,
    });
  }

  async getAllCollaborators(): Promise<ReturnCollaboratorDtoWithoutKey[]> {
    return (
      await this.collaboratorRepository.find({ relations: ['time'] })
    ).map((collaborator) => new ReturnCollaboratorDtoWithoutKey(collaborator));
  }

  async getAllTeamCollaborators(
    idTime: number,
  ): Promise<ReturnCollaboratorDtoWithoutKey[]> {
    return (
      (await this.collaboratorRepository.find({ relations: ['time'] }))
        //filtering collaborators that have the same team
        .filter((c) => {
          if (c.time != null) return c.time.id == idTime;
        })
        .map(
          (collaborator) => new ReturnCollaboratorDtoWithoutKey(collaborator),
        )
    );
  }

  async findCollaboratorByMatricula(
    matricula: string,
  ): Promise<CollaboratorEntity> {
    const collaborator = await this.collaboratorRepository.findOne({
      relations: ['time'],
      where: { matricula },
    });
    if (!collaborator) {
      throw new NotFoundException(`Collaborator: ${matricula} not found`);
    }
    return collaborator;
  }

  async getCollaboratorByMatricula(
    matricula: string,
  ): Promise<ReturnCollaboratorDtoWithoutKey[]> {
    const collaborator = (
      await this.collaboratorRepository.find({
        relations: ['time'],
        where: { matricula: matricula },
      })
    ).map((t) => new ReturnCollaboratorDtoWithoutKey(t));

    if (!collaborator) {
      throw new NotFoundException(`Collaborator: ${matricula} not found`);
    }
    return collaborator;
  }
}
