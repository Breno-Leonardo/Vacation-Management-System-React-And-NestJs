import { createContext, useContext, useEffect, useState } from "react";
import {  setCollaboratorStorage } from "../functions/connections/auth";
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
  
  
  const setCollaboratorStorageContext= (collaborator: CollaboratorType) =>{
    setCollaboratorStorage(collaborator);
    setGlobalData({
        ...globalData,
        collaborator,
    })
  }
  return{
    collaborator: globalData?.collaborator,
    setCollaboratorStorageContext,
  };
};
