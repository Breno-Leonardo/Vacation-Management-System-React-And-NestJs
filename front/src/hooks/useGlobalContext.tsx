import { createContext, useContext, useEffect, useState } from "react";
import { CollaboratorTokenType } from "../types/CollaboratorTokenType";

interface GlobalData {
  collaborator?: CollaboratorTokenType;
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

  const setCollaboratorStorageContext = (
    collaborator: CollaboratorTokenType | undefined
  ) => {
    if (collaborator != undefined) {
      setGlobalData({
        ...globalData,
        collaborator: collaborator,
      });
    }
    else{
      setGlobalData({
        ...globalData,
        collaborator: undefined,
      });
    }
  };
  return {
    globalData,
    collaborator: globalData?.collaborator,
    setCollaboratorStorageContext,
  };
};
