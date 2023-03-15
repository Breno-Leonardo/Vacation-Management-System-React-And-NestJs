import { SetMetadata } from '@nestjs/common';
import { CollaboratorType } from 'src/collaborator/enum/collaborator-type';

export const ROLES_KEY = 'roles';
export const Roles = (roles: CollaboratorType[]) =>
  SetMetadata(ROLES_KEY, roles);
