const urlToParamObj = (url: string) => {
  const currentUrl = new URL(url);
  const currentSearchParams = new URLSearchParams(currentUrl.search);
  const paramObj = Object.fromEntries(currentSearchParams.entries());
  return paramObj;
};
export default urlToParamObj;
