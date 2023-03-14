import { ReturnCollaboratorDto } from 'src/collaborator/dto/returnCollaborator.dto';

export class ReturnLoginDto {
  collaborator: ReturnCollaboratorDto;
  acessToken: string;
}
