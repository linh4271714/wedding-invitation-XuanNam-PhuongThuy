/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef } from "react";

type UseScrollOutProps = {
  element: HTMLElement | null;
  callback: () => void;
};

export function useScrollOut({ element, callback }: UseScrollOutProps) {
  const wasVisible = useRef(true);

  useEffect(() => {
    if (!element) return;

    const handleScroll = () => {
      const rect = element!.getBoundingClientRect();

      const windowHeight =
        window.innerHeight || document.documentElement.clientHeight;
      const windowWidth =
        window.innerWidth || document.documentElement.clientWidth;

      // Check if element is completely out of viewport (scroll out)
      const isInvisible =
        rect.bottom < 0 || // scrolled above viewport
        rect.top > windowHeight - 200 || // scrolled below viewport
        rect.right < 0 || // scrolled left out of viewport
        rect.left > windowWidth; // scrolled right out of viewport

      // Only call callback when transitioning from visible to invisible
      if (isInvisible && wasVisible.current) {
        wasVisible.current = false;
        callback();
      } else if (!isInvisible && !wasVisible.current) {
        wasVisible.current = true;
      }
    };

    // Initial check in case already invisible
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [element, callback]);
}
