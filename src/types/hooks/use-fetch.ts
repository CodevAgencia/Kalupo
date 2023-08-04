export type useFetchResponse<T> = [T | null, boolean, string | null];

export type FetchOptions = {
  method?: string;
  headers?: { [key: string]: string };
  body?: BodyInit;
};
