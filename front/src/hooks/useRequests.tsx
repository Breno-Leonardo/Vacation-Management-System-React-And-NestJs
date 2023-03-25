import { useState } from "react";
import { connectionAPIPost , connectionAPIGet} from "../functions/connections/connectionAPI";

export function useRequests() {
  const [loadingPost, setLoadingPost] = useState(false);
  const [loadingGet, setLoadingGet] = useState(false);
  const getRequest = async <T,>(url: string): Promise<T | any | undefined> => {
    setLoadingGet(true);
    const returnData = await connectionAPIGet(url)
      .then((result) => {
        console.log(result);
        return result;
      })
      .catch((error) => {
        console.log(error);
      });
    setLoadingGet(false);
    return returnData;
  };
  const postRequest = async <T,>(
    url: string,
    body: any
  ): Promise<T | any | undefined> => {
    setLoadingPost(true);
    const returnData = await connectionAPIPost(url, body)
      .then((result) => {
        return result;
      })
      .catch((error) => {
        return undefined;
      });
    setLoadingPost(false);
    return returnData;
  };

  return {
    loadingPost,
    loadingGet,
    getRequest,
    postRequest,
  };
}
