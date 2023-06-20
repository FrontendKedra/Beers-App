import { IndexSingature } from "../../interfaces/generalInterfaces";

export const getBeersFromApi = async <ApiType>(
  url: string,
  params: IndexSingature
): Promise<ApiType> => {
  const { id, ...otherParams } = params;

  const apiUrl = id
    ? `${url}/${id}`
    : `${url}?${new URLSearchParams(otherParams)}`;
  
  const response = await fetch(apiUrl);

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return await response.json();
};
