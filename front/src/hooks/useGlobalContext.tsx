import { createContext, useContext, useEffect, useState } from "react";
import { getAuthorization, setAuthorization } from "../functions/connections/auth";

interface GlobalData {
  acessToken?: string;
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
  useEffect(()=>{
    const token= getAuthorization()
    if(token){
      setAcessToken(token)
    }
  }, [])
  const setAcessToken= (acessToken: string) =>{
    setAuthorization(acessToken);
    setGlobalData({
        ...globalData,
        acessToken,
    })
  }
  return{
    acessToken: globalData?.acessToken,
    setAcessToken,
  };
};
