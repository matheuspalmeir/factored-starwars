import { useState, useMemo, useEffect } from "react";

interface UsePaginationProps<T> {
  data?: T[];
  itemsPerPage: number;
  initialPage?: number;
  isDynamic?: boolean;
  records?: number;
}

export function usePagination<T>({
  data = [],
  itemsPerPage,
  initialPage = 1,
  isDynamic = false,
  records = 0,
}: UsePaginationProps<T>) {
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [totalRecords, setTotalRecords] = useState(records);
  const [pageData, setPageData] = useState<T[]>(data);
  const [totalPages, setTotalPages] = useState(0);

  const countTotalPages = () => {
    const staticTotalPages = Math.ceil(pageData.length / itemsPerPage);
    const dynamicTotalPages = Math.ceil(totalRecords / itemsPerPage);
    return isDynamic ? dynamicTotalPages : staticTotalPages;
  };

  const paginateData = (page: number, data?: T[]) => {
    if (isDynamic) return [];

    const finalData = data || pageData;
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return finalData.slice(startIndex, endIndex);
  };

  useEffect(() => {
    setTotalPages(countTotalPages());
  }, [pageData, totalRecords, itemsPerPage, isDynamic]);

  return {
    currentPage,
    setCurrentPage,
    setPageData,
    totalPages,
    countTotalPages,
    paginateData,
    setTotalPages,
    setTotalRecords,
  };
}
