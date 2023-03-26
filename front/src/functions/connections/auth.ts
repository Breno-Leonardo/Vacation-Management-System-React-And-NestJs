import { AUTHORIZATION_KEY, COLLABORATOR_KEY } from "../../constants/constants";
import { CollaboratorType } from "../../types/CollaboratorTypes";
import {
  getItemStorage,
  removeItemStorage,
  setItemStorage,
} from "./storageProxy";

export const unsetAuthorization = () => removeItemStorage(AUTHORIZATION_KEY);

export const setAuthorization = (token: string) => {
  if (token != "") {
    setItemStorage(AUTHORIZATION_KEY, token);
  }
};

export const getAuthorization = () => getItemStorage(AUTHORIZATION_KEY);

// export const getCollaboratorStorage = (): CollaboratorType | null => {
//   const collaboratorString = getItemStorage(COLLABORATOR_KEY);
//   if (collaboratorString) return JSON.parse(collaboratorString);
//   return null;
// };
// export const setCollaboratorStorage = (collaborator: CollaboratorType) => {
//   if (collaborator) {
//     setItemStorage(COLLABORATOR_KEY, JSON.stringify(collaborator));
//   }
// };

