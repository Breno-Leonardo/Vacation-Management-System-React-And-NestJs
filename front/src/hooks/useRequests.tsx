import axios from "axios";
import { useState } from "react";
import { connectionAPIPost } from "../functions/connections/connectionAPI";

export function useRequests() {
  const [loading, setLoading] = useState(false);

  const getRequest = async <T,>(url: string): Promise<T | any | undefined> => {
    setLoading(true);
    return await axios({
      method: "get",
      url: url,
    })
      .then((result) => {
        return result.data;
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const postRequest = async <T,>(
    url: string,
    body: any
  ): Promise<T | any | undefined> => {
    setLoading(true);
    const returnData = await connectionAPIPost(url, body)
      .then((result) => {
        console.log("body",body)
        console.log("rwesult",result)
        return result;
      })
      .catch((error) => {
        return undefined;
      });
    setLoading(false);
    return returnData;
  };
  return {
    loading,
    getRequest,
    postRequest,
  };
}
