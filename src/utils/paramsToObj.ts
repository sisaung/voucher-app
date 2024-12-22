import { Params } from "../types/product";

const paramsToObj = (params: Params | string) => {
  const currentSearchParams = new URLSearchParams(params);
  const currentParamsObj = Object.fromEntries(currentSearchParams.entries());
  return currentParamsObj;
};

export default paramsToObj;
