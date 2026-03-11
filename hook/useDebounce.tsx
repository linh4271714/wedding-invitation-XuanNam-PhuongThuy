import { useEffect, useRef } from "react";

/**
 * useDebounce hook with callback.
 * 
 * @param value - The value to debounce.
 * @param delay - The debounce delay in milliseconds.
 * @param callback - The function to call with the debounced value.
 */
export default function useDebounce<T>(
  value: T,
  delay: number,
  callback: (debouncedValue: T) => void
) {
  const handler = useRef<ReturnType<typeof setTimeout>>(null);

  useEffect(() => {
    if (handler.current) {
      clearTimeout(handler.current);
    }
    handler.current = setTimeout(() => {
      callback(value);
    }, delay);

    return () => {
      if (handler.current) {
        clearTimeout(handler.current);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, delay]);
}
