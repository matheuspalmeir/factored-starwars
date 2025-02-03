import { useState, useMemo, useEffect } from "react";

interface UsePaginationProps<T> {
  data?: T[];
  itemsPerPage: number;
  initialPage?: number;
  isDynamic?: boolean;
  totalRecords?: number;
}

export function usePagination<T>({
  data = [],
  itemsPerPage,
  initialPage = 1,
  isDynamic = false,
  totalRecords = 0,
}: UsePaginationProps<T>) {
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [pageData, setPageData] = useState<T[]>(data);
  const [totalPages, setTotalPages] = useState(0);

  const countTotalPages = (pageData: T[]) => {
    const staticTotalPages = Math.ceil(pageData.length / itemsPerPage);
    const dynamicTotalPages = Math.ceil(totalRecords / itemsPerPage);
    return isDynamic
      ? dynamicTotalPages
      : staticTotalPages === 0
      ? 1
      : staticTotalPages;
  };

  const paginateData = (page: number) => {
    if (isDynamic) return [];

    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return data.slice(startIndex, endIndex);
  };

  useMemo(() => {
    setTotalPages(countTotalPages(pageData));
  }, [pageData]);

  return {
    currentPage,
    setCurrentPage,
    setPageData,
    totalPages,
    countTotalPages,
    paginateData,
  };
}
