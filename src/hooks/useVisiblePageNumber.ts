import { useMemo } from "react";

const useVisiblePageNumbers = (current_page: number, last_page: number) => {
  return useMemo(() => {
    const maxVisiblePages = 4;
    const halfVisible = Math.floor(maxVisiblePages / 2);

    if (maxVisiblePages >= last_page) {
      return Array.from({ length: last_page }, (_, i) => i + 1);
    }

    const start = Math.max(2, current_page - halfVisible);
    const end = Math.min(last_page - 1, current_page + halfVisible);

    return [
      1,
      ...(current_page > halfVisible + 2 ? ["..."] : []),
      ...Array.from({ length: end - start + 1 }, (_, i) => start + i),
      ...(current_page < last_page - halfVisible - 1 ? ["..."] : []),
      last_page,
    ];
  }, [current_page, last_page]);
};

export default useVisiblePageNumbers;
