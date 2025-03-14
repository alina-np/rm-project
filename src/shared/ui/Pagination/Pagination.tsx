import { useMemo } from "react";
import { Icon, IconType } from "../Icon/Icon";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  visiblePage: number;
  onPageChange: (page: number) => void;
}

export function Pagination({
  currentPage,
  totalPages,
  visiblePage,
  onPageChange,
}: PaginationProps) {
  const paginationButtons = useMemo(() => {
    const buttons = [];
    const halfVisible = Math.floor(visiblePage / 2);
    const firstPage = Math.max(1, currentPage - halfVisible);
    const lastPage = Math.min(totalPages, firstPage + visiblePage - 1);

    if (firstPage > 1) {
      buttons.push(
        <button
          key={1}
          onClick={() => onPageChange(1)}
          className="w-5 h-5 border-solid border-lime-50 transition-colors cursor-pointer hover:text-lime-300"
        >
          1
        </button>
      );
      if (firstPage > 2) buttons.push(<span key="dot-start">...</span>);
    }

    // Page numbers
    for (let i = firstPage; i <= lastPage; i++) {
      buttons.push(
        <button
          key={i}
          onClick={() => onPageChange(i)}
          className={`w-5 h-5 border-solid border-lime-50 transition-colors cursor-pointer hover:text-lime-300 ${
            currentPage === i &&
            "text-lime-300 cursor-default hover:cursor-default"
          }`}
        >
          {i}
        </button>
      );
    }

    // Last page and ellipsis
    if (lastPage < totalPages) {
      if (lastPage < totalPages - 1)
        buttons.push(<span key="dot-end">...</span>);
      buttons.push(
        <button
          key={totalPages}
          onClick={() => onPageChange(totalPages)}
          className="w-5 h-5 border-solid border-lime-50 transition-colors cursor-pointer hover:text-lime-300"
        >
          {totalPages}
        </button>
      );
    }

    return buttons;
  }, [currentPage, totalPages, visiblePage, onPageChange]);

  return (
    <div className="flex gap-2.5 justify-center items-center absolute bottom-10">
      {currentPage !== 1 && (
        <button
          onClick={() => onPageChange(currentPage - 1)}
          className="transition-colors cursor-pointer"
        >
          <Icon type={IconType.ARROWLEFT} />
        </button>
      )}
      {paginationButtons}
      {currentPage !== totalPages && (
        <button
          onClick={() => onPageChange(currentPage + 1)}
          className="transition-colors cursor-pointer"
        >
          <Icon type={IconType.ARROWRIGHT} />
        </button>
      )}
    </div>
  );
}
