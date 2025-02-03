"use client";

import { useEffect } from "react";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  isDynamic?: boolean;
  onPageChange: (page: number) => void;
};

export default function Pagination({
  currentPage,
  totalPages,
  isDynamic = false,
  onPageChange,
}: PaginationProps) {
  return (
    <div className="flex items-center justify-center gap-2 mt-8">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-4 py-2 border text-white rounded-md disabled:opacity-50"
      >
        Previous
      </button>

      {[...Array(totalPages)].map((_, index) => (
        <button
          key={index}
          onClick={() => onPageChange(index + 1)}
          className={`px-4 py-2 border rounded-md text-white ${
            currentPage === index + 1 ? "bg-yellow-300" : ""
          }`}
        >
          {index + 1}
        </button>
      ))}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages || totalPages === 0}
        className="px-4 py-2 border text-white rounded-md disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
}
