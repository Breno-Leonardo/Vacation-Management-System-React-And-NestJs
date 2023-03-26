import { createContext, useContext, useEffect, useState } from "react";
import { CollaboratorTokenType } from "../types/CollaboratorTokenType";
import { CollaboratorType } from "../types/CollaboratorTypes";

interface GlobalData {
  collaborator?: CollaboratorType;
}
interface GlobalContextProps {
  globalData: GlobalData;
  setGlobalData: (globalData: GlobalData) => void;
}

interface GlobalProviderProps {
  children: React.ReactNode;
}
const GlobalContext = createContext<GlobalContextProps>(
  {} as GlobalContextProps
);

export const GlobalProvider = ({ children }: GlobalProviderProps) => {
  const [globalData, setGlobalData] = useState<GlobalData>({});

  return (
    <GlobalContext.Provider value={{ globalData, setGlobalData }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  const { globalData, setGlobalData } = useContext(GlobalContext);

  const setCollaboratorStorageContext = (collaborator: CollaboratorTokenType) => {
    setGlobalData({
      ...globalData,
      collaborator: {
        matricula: collaborator.matricula,
        nome: collaborator.nome,
        typeCollaborator:collaborator.typeCollaborator
      },
      
    });
  };
  return {
    
    globalData,
    collaborator: globalData?.collaborator,
    setCollaboratorStorageContext,
  };
};
