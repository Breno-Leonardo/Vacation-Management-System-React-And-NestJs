import { Injectable, NotFoundException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compare } from 'bcrypt';
import { CollaboratorService } from 'src/collaborator/collaborator.service';
import { ReturnCollaboratorDto } from 'src/collaborator/dto/returnCollaborator.dto';
import { CollaboratorEntity } from 'src/collaborator/entities/collaborator.entity';
import { LoginDto } from './dto/login.dto';
import { ReturnLoginDto } from './dto/returnLogin.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly collaboratorService: CollaboratorService,
    private jwtService: JwtService,
  ) {}
  async login(loginDto: LoginDto): Promise<ReturnLoginDto> {
    if (loginDto.matricula == process.env.ADMIN_LOGIN) {
      const isMatch = await compare(loginDto.senha, process.env.ADMIN_PASSWORD);
      if (!isMatch) {
        throw new NotFoundException(`Matricula ou senha invalida`);
      }
      return {
        collaborator: {
          matricula: process.env.ADMIN_LOGIN,
          nome: process.env.ADMIN_LOGIN,
        },
        acessToken: this.jwtService.sign({
          ...{
            matricula: process.env.ADMIN_LOGIN,
            nome: process.env.ADMIN_LOGIN,
          },
        }),
      };
    }

    const collaborator: CollaboratorEntity | undefined =
      await this.collaboratorService
        .findCollaboratorByMatricula(loginDto.matricula)
        .catch(() => undefined);

    const isMatch = await compare(loginDto.senha, collaborator?.senha || '');

    if (!collaborator || !isMatch) {
      throw new NotFoundException(`Matricula ou senha invalida`);
    }
    return {
      collaborator: new ReturnCollaboratorDto(collaborator),
      acessToken: this.jwtService.sign({
        ...new ReturnCollaboratorDto(collaborator),
      }),
    };
  }
}
