import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeleteResult } from 'typeorm';
import { CreateCollaboratorDto } from './dto/createCollaborator.dto';
import { CollaboratorEntity } from './entities/collaborator.entity';
import * as bcrypt from 'bcrypt';
import { ReturnCollaboratorDtoWithoutKey } from './dto/returnCollaboratorWidthouKey.dto';
import { UpdateCollaboratorDto } from './dto/updateCollaborator.dto';

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

  async checkEndAquisitive(
    collaboratorEntity: CollaboratorEntity,
  ): Promise<CollaboratorEntity> {
    if (collaboratorEntity != undefined) {
      const dateNow = new Date(Date.now());
      const endAquisitive = new Date(collaboratorEntity.fimAquisitivo);
      if (dateNow >= endAquisitive) {
        // console.log('atualizando');
        endAquisitive.setUTCFullYear(dateNow.getFullYear() + 1);
        collaboratorEntity.saldoDiasFerias =
          collaboratorEntity.saldoDiasFerias + 30;
        collaboratorEntity.fimAquisitivo = endAquisitive;
        return this.collaboratorRepository.save({
          ...collaboratorEntity,
          fimAquisitivo: endAquisitive.toUTCString(),
        });
      }
    }
    return collaboratorEntity;
  }

  async getAllCollaborators(): Promise<ReturnCollaboratorDtoWithoutKey[]> {
    return (await this.collaboratorRepository.find({ relations: ['time'] }))
      .filter((collaborator) => this.checkEndAquisitive(collaborator))
      .map((collaborator) => new ReturnCollaboratorDtoWithoutKey(collaborator));
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
        .filter((collaborator) => this.checkEndAquisitive(collaborator))
        .map(
          (collaborator) => new ReturnCollaboratorDtoWithoutKey(collaborator),
        )
    );
  }

  async findCollaboratorByRegistration(
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

  async getCollaboratorByRegistration(
    matricula: string,
  ): Promise<ReturnCollaboratorDtoWithoutKey[]> {
    const collaborator = await this.collaboratorRepository.find({
      relations: ['time'],
      where: { matricula: matricula },
    });
    if (!collaborator) {
      throw new NotFoundException(`Collaborator: ${matricula} not found`);
    }

    return collaborator
      .filter((collaborator) => this.checkEndAquisitive(collaborator))
      .map((collaborator) => new ReturnCollaboratorDtoWithoutKey(collaborator));
  }

  async findCollaboratorById(matricula: string): Promise<CollaboratorEntity> {
    const collaborator = await this.collaboratorRepository.findOne({
      where: {
        matricula: matricula,
      },
      relations: ['time'],
    });

    if (!collaborator) {
      throw new NotFoundException(`colaborador ${matricula} not found`);
    }

    return collaborator;
  }

  async debitDaysVacation(
    matricula: string,
    debit: number,
  ): Promise<UpdateCollaboratorDto> {
    const collaborator = await this.findCollaboratorById(matricula);

    if (!collaborator) {
      throw new NotFoundException(`colaborador ${matricula} not found`);
    }
    if (collaborator.saldoDiasFerias >= debit)
      return this.collaboratorRepository.save({
        ...collaborator,
        saldoDiasFerias: collaborator.saldoDiasFerias - debit,
      });
  }

  async deleteCollaboratorByRegistration(
    matricula: string,
  ): Promise<DeleteResult> {
    await this.findCollaboratorById(matricula);

    return this.collaboratorRepository.delete({ matricula: matricula });
  }

  async updateCollaboratorByRegistration(
    matricula: string,
    update,
  ): Promise<UpdateCollaboratorDto> {
    const collaborator = await this.findCollaboratorById(matricula);

    if (!collaborator) {
      throw new NotFoundException(`colaborador ${matricula} not found`);
    }
    return this.collaboratorRepository.save({
      ...update,
    });
  }
}
