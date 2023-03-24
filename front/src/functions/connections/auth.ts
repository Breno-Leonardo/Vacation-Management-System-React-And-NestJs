import { AUTHORIZATION_KEY } from "../../constants/constants"
import {getItemStorage, removeItemStorage, setItemStorage} from "./storageProxy"


export const  unsetAuthorization =()=> removeItemStorage(AUTHORIZATION_KEY)

export const setAuthorization =(token:string)=> {
    if(token!=""){
        setItemStorage(AUTHORIZATION_KEY, token)
    }
}

export const getAuthorization = () => getItemStorage(AUTHORIZATION_KEY)