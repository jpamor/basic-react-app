import axios from "axios";
import useSWR from "swr";

const fetcher = (url, method, body) => {
  const baseURL = "https://reqres.in/api";
  const fullURL = `${baseURL}${url}`;

  return axios({ method, url: fullURL, data: body }).then((response) => response.data);
};

export const useAPI = (url, method, body) => {
  const { data, error, isValidating: isLoading } = useSWR([url, method, body], () => fetcher(url, method, body));

  return {
    res: data,
    loading: isLoading,
    error
  };
};
