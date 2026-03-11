/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef } from "react";

type UseScrollToProps = {
  element: HTMLElement | null;
  callback: () => void;
};

export function useScrollTo({ element, callback }: UseScrollToProps) {
  const wasVisible = useRef(false);

  useEffect(() => {
    if (!element) return;
    const handleScroll = () => {
      const rect = element!.getBoundingClientRect();

      const windowHeight =
        window.innerHeight || document.documentElement.clientHeight;
      const windowWidth =
        window.innerWidth || document.documentElement.clientWidth;

      // Check if element is visible in viewport
      const isVisible =
        rect.top + 200 < windowHeight &&
        rect.bottom > 0 &&
        rect.left < windowWidth &&
        rect.right > 0;

      // Only call callback when scrolling in (transition from not visible to visible)
      if (isVisible && !wasVisible.current) {
        wasVisible.current = true;
        callback();
      } else if (!isVisible && wasVisible.current) {
        wasVisible.current = false;
      }
    };

    // Initial check in case already visible
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [element, callback]);
}
