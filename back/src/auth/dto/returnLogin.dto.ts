import { ReturnCollaboratorDto } from 'src/collaborator/dto/returnCollaborator.dto';

export class ReturnLoginDto {
  collaborator: ReturnCollaboratorDto;
  typeCollaborator: string;
  acessToken: string;
}
