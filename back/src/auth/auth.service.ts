import { Injectable, NotFoundException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compare } from 'bcrypt';
import { CollaboratorService } from 'src/collaborator/collaborator.service';
import { CollaboratorEntity } from 'src/collaborator/entities/collaborator.entity';
import { CollaboratorType } from 'src/collaborator/enum/collaborator-type';
import { TeamService } from 'src/team/team.service';
import { LoginDto } from './dto/login.dto';
import { ReturnLoginDto } from './dto/returnLogin.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly collaboratorService: CollaboratorService,
    private readonly teamService: TeamService,
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
          typeCollaborator: CollaboratorType.Rh,
        },
        acessToken: this.jwtService.sign({
          ...{
            matricula: process.env.ADMIN_LOGIN,
            nome: process.env.ADMIN_LOGIN,
            typeCollaborator: CollaboratorType.Rh,
          },
        }),
      };
    }

    const collaborator: CollaboratorEntity | undefined =
      await this.collaboratorService
        .findCollaboratorByRegistration(loginDto.matricula)
        .catch(() => undefined);

    const isMatch = await compare(loginDto.senha, collaborator?.senha || '');

    if (!collaborator || !isMatch) {
      throw new NotFoundException(`Matricula ou senha invalida`);
    }

    // defining user type

    // looking if any team has the past enrollment as manager
    let isCollaborator = false;
    if (collaborator.time != null) {
      isCollaborator = true;
    }
    //checking if participate in any team
    let isManager = false;
    const teams = await this.teamService.getTeamsByMatriculaManager(
      collaborator.matricula,
    );
    // if the enrollment is leader of any team
    if (teams.length > 0) {
      isManager = true;
    }

    let typeCollaborator = 0;

    if (isCollaborator && isManager) {
      typeCollaborator = CollaboratorType.CollaboratorManager;
    } else if (isCollaborator) {
      typeCollaborator = CollaboratorType.Collaborator;
    } else if (isManager) {
      typeCollaborator = CollaboratorType.Manager;
    }

    return {
      collaborator: {
        matricula: collaborator.matricula,
        nome: collaborator.nome,
        typeCollaborator: typeCollaborator,
      },
      acessToken: this.jwtService.sign({
        ...{
          matricula: collaborator.matricula,
          nome: collaborator.nome,
          typeCollaborator: typeCollaborator,
        },
      }),
    };
  }

  async checkToken(token: string): Promise<any> {
    const decode: any = this.jwtService.decode(token);
    if (decode.matricula != process.env.ADMIN_LOGIN) {
      let collaboratorReturn = await this.collaboratorService
        .findCollaboratorByRegistration(decode.matricula)
        .catch(() => undefined);
      collaboratorReturn = {
        matricula: collaboratorReturn.matricula,
        nome: collaboratorReturn.nome,
        dataAdmissao: collaboratorReturn.dataAdmissao,
        saldoDiasFerias: collaboratorReturn.saldoDiasFerias,
        modeloContratacao: collaboratorReturn.modeloContratacao,
        fimAquisitivo: collaboratorReturn.fimAquisitivo,
        time: collaboratorReturn.time,
        typeCollaborator: decode.typeCollaborator,
      };
      return collaboratorReturn;
    }
    return decode;
  }
}
