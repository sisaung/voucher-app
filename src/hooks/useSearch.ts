import { debounce } from "lodash";
import { ChangeEvent, useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";

const useSearch = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchInputRef = useRef<HTMLInputElement | null>(null);

  const querySearch = searchParams.get("q");

  const handleSearchInput = debounce((e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value) {
      setSearchParams({ q: e.target.value });
    } else {
      setSearchParams({});
    }
  }, 500);

  useEffect(() => {
    if (querySearch && searchInputRef.current) {
      searchInputRef.current.value = querySearch ?? "";
    }
  }, [searchParams]);

  const handleClearSearch = () => {
    if (searchInputRef.current) {
      searchInputRef.current.value = "";
      setSearchParams({});
    }
  };

  return { searchInputRef, querySearch, handleSearchInput, handleClearSearch };
};

export default useSearch;
