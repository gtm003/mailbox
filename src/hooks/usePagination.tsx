import { useState } from 'react';

interface UsePaginationReturn {
  page: number;
  totalPages: number;
  nextPage: () => void;
  prevPage: () => void;
  setPage: (page: number) => void;
}
type UsePagination = (
  contentPerPage: number,
  count: number
) => UsePaginationReturn;

const usePagination: UsePagination = (contentPerPage, count) => {
  const [page, setPage] = useState(1);
  const pageCount = Math.ceil(count / contentPerPage);
  const changePage = (direction: boolean) => {
    setPage((state) => {
      if (direction) {
        if (state === pageCount) {
          return state;
        }

        return state + 1;
      } else {
        if (state === 1) {
          return state;
        }

        return state - 1;
      }
    });
  };

  const setPageSAFE = (num: number) => {
    if (num > pageCount) {
      setPage(pageCount);
    } else if (num < 1) {
      setPage(1);
    } else {
      setPage(num);
    }
  };

  return {
    totalPages: pageCount,
    nextPage: () => changePage(true),
    prevPage: () => changePage(false),
    setPage: setPageSAFE,
    page,
  };
};

export default usePagination;
