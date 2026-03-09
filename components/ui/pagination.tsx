"use client";

import React, { useMemo, useState } from "react";

export type PaginationProps = {
  totalPages?: number;
  visibleCount?: number; // maximum number of numeric buttons to show
  initialPage?: number;
  onChange?: (page: number) => void;
  className?: string;
};

export default function Pagination({
  totalPages = 10,
  visibleCount = 6,
  initialPage = 1,
  onChange,
  className = "",
}: PaginationProps) {
  const [currentPage, setCurrentPage] = useState<number>(initialPage);

  // Ensure page number stays within valid range
  const clampPageNumber = (pageNumber: number) => {
    return Math.min(Math.max(1, pageNumber), totalPages);
  };

  // Check if we can show all pages without ellipsis
  const canShowAllPages = useMemo(() => {
    return totalPages <= visibleCount;
  }, [totalPages, visibleCount]);

  // Calculate which middle pages to show and if we need ellipsis
  const middlePageRange = useMemo(() => {
    if (canShowAllPages) {
      return {
        startPage: 1,
        endPage: totalPages,
        hasLeftGap: false,
        hasRightGap: false,
      };
    }

    // Reserve space for first and last page buttons
    const availableMiddleSlots = Math.max(0, visibleCount - 2);

    const calculatePageWindow = (middleSlotCount: number) => {
      const actualMiddleCount = Math.min(
        middleSlotCount,
        Math.max(0, totalPages - 2)
      );

      // Calculate starting page for middle range
      let startPage = currentPage - Math.floor(actualMiddleCount / 2);
      startPage = Math.max(2, startPage);
      startPage = Math.min(
        startPage,
        Math.max(2, totalPages - actualMiddleCount)
      );

      const endPage = startPage + actualMiddleCount - 1;
      const hasLeftGap = startPage > 2;
      const hasRightGap = endPage < totalPages - 1;

      return {
        startPage,
        endPage,
        hasLeftGap,
        hasRightGap,
        middleCount: actualMiddleCount,
      };
    };

    // First calculate with general available window
    let pageWindow = calculatePageWindow(availableMiddleSlots);

    // If both gaps are present, force exactly 5 numeric buttons total (1 + 3 middle + last)
    if (
      pageWindow.hasLeftGap &&
      pageWindow.hasRightGap &&
      pageWindow.middleCount !== 3
    ) {
      pageWindow = calculatePageWindow(3);
    }

    return {
      startPage: pageWindow.startPage,
      endPage: pageWindow.endPage,
      hasLeftGap: pageWindow.hasLeftGap,
      hasRightGap: pageWindow.hasRightGap,
    };
  }, [currentPage, totalPages, visibleCount, canShowAllPages]);

  // Navigate to a specific page
  const navigateToPage = (targetPage: number) => {
    const validPage = clampPageNumber(targetPage);
    setCurrentPage(validPage);
    onChange?.(validPage);
  };

  // Navigate to previous page
  const navigateToPreviousPage = () => {
    navigateToPage(currentPage - 1);
  };

  // Navigate to next page
  const navigateToNextPage = () => {
    navigateToPage(currentPage + 1);
  };

  // Calculate how many pages to jump when using ellipsis
  const jumpDistance = useMemo(() => {
    return Math.max(1, visibleCount - 2);
  }, [visibleCount]);

  // Jump to the left when clicking left ellipsis
  const jumpToLeft = () => {
    navigateToPage(currentPage - jumpDistance);
  };

  // Jump to the right when clicking right ellipsis
  const jumpToRight = () => {
    navigateToPage(currentPage + jumpDistance);
  };

  // Build array of page numbers to display
  const pageNumbersToShow: number[] = [];

  if (canShowAllPages) {
    // Show all pages when we have enough space
    for (let pageNumber = 1; pageNumber <= totalPages; pageNumber++) {
      pageNumbersToShow.push(pageNumber);
    }
  } else {
    // Show first page
    pageNumbersToShow.push(1);

    // Show middle pages
    for (
      let pageNumber = middlePageRange.startPage;
      pageNumber <= middlePageRange.endPage;
      pageNumber++
    ) {
      if (pageNumber >= 2 && pageNumber <= totalPages - 1) {
        pageNumbersToShow.push(pageNumber);
      }
    }

    // Show last page if there is more than one page
    if (totalPages > 1) {
      pageNumbersToShow.push(totalPages);
    }
  }

  // Base button styles for all pagination buttons
  const baseButtonStyles =
    "h-8 min-w-8 px-2 rounded-md text-xs transition-all duration-3000 ease-out";

  // Styles for active page button
  const activePageStyles =
    "bg-zinc-800 text-white border border-transparent transform scale-105 shadow-md";

  // Styles for inactive page button
  const inactivePageStyles =
    "border border-border-primary text-text-primary hover:bg-border-primary/20";

  // Styles for navigation buttons (prev/next)
  const navigationButtonStyles =
    "border border-border-primary text-text-primary disabled:opacity-50 disabled:cursor-not-allowed hover:bg-border-primary/20";

  // Styles for ellipsis buttons
  const ellipsisButtonStyles =
    "border border-border-primary text-text-primary hover:bg-border-primary/20";

  return (
    <nav
      className={`inline-flex items-center gap-1 ${className}`}
      aria-label="Pagination"
    >
      {/* Previous page button */}
      <button
        type="button"
        onClick={navigateToPreviousPage}
        disabled={currentPage === 1}
        className={`${baseButtonStyles} ${navigationButtonStyles}`}
        aria-label="Previous page"
      >
        &lt;
      </button>

      {/* First page and left ellipsis (only when not showing all pages) */}
      {!canShowAllPages && (
        <>
          {/* First page button */}
          <button
            type="button"
            onClick={() => navigateToPage(1)}
            aria-current={currentPage === 1 ? "page" : undefined}
            className={`${baseButtonStyles} ${
              currentPage === 1 ? activePageStyles : inactivePageStyles
            }`}
          >
            1
          </button>

          {/* Left ellipsis button */}
          {middlePageRange.hasLeftGap && (
            <button
              type="button"
              onClick={jumpToLeft}
              className={`group ${baseButtonStyles} ${ellipsisButtonStyles}`}
              aria-label="Jump left"
              title="Jump left"
            >
              <span className="block group-hover:hidden transition-opacity duration-3000">
                …
              </span>
              <span className="hidden group-hover:block transition-opacity duration-3000">
                ««
              </span>
            </button>
          )}
        </>
      )}

      {/* Middle page numbers or all pages when showing simple range */}
      {pageNumbersToShow
        .filter(
          (pageNumber) =>
            canShowAllPages || (pageNumber !== 1 && pageNumber !== totalPages)
        )
        .map((pageNumber) => (
          <button
            key={pageNumber}
            type="button"
            onClick={() => navigateToPage(pageNumber)}
            aria-current={pageNumber === currentPage ? "page" : undefined}
            className={`${baseButtonStyles} ${
              pageNumber === currentPage ? activePageStyles : inactivePageStyles
            }`}
          >
            {pageNumber}
          </button>
        ))}

      {/* Right ellipsis (only when not showing all pages) */}
      {!canShowAllPages && middlePageRange.hasRightGap && (
        <button
          type="button"
          onClick={jumpToRight}
          className={`group ${baseButtonStyles} ${ellipsisButtonStyles}`}
          aria-label="Jump right"
          title="Jump right"
        >
          <span className="block group-hover:hidden transition-opacity duration-3000">
            …
          </span>
          <span className="hidden group-hover:block transition-opacity duration-3000">
            »»
          </span>
        </button>
      )}

      {/* Last page (only when not showing all pages and there is more than one page) */}
      {!canShowAllPages && totalPages > 1 && (
        <button
          type="button"
          onClick={() => navigateToPage(totalPages)}
          aria-current={currentPage === totalPages ? "page" : undefined}
          className={`${baseButtonStyles} ${
            currentPage === totalPages ? activePageStyles : inactivePageStyles
          }`}
        >
          {totalPages}
        </button>
      )}

      {/* Next page button */}
      <button
        type="button"
        onClick={navigateToNextPage}
        disabled={currentPage === totalPages}
        className={`${baseButtonStyles} ${navigationButtonStyles}`}
        aria-label="Next page"
      >
        &gt;
      </button>
    </nav>
  );
}
