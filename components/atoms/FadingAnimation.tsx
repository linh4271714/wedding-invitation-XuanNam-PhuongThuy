"use client";
import { ReactNode, useEffect, useRef, useState } from "react";
import { useScrollTo } from "@/hook/useScrollTo";
import { useScrollOut } from "@/hook/useScrollOut";

export default function FadingAnimation({
  children,
  className = "",
  noFadeOut = true,
}: {
  children: ReactNode;
  className?: string;
  noFadeOut?: boolean;
}) {
  const [element, setElement] = useState<HTMLElement | null>(null);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (ref.current) {
      setElement(ref.current);
    }
  }, []);

  useScrollTo({
    element,
    callback: () => {
      element?.classList.remove("invisible");
      element?.classList.remove("animate-fade-out");
      element?.classList.add("animate-fade-in");
    },
  });

  useScrollOut({
    element,
    callback: () => {
      if (noFadeOut) return;
      element?.classList.remove("animate-fade-in");
      element?.classList.add("animate-fade-out");
      const timer = setTimeout(() => {
        element?.classList.add("invisible");
        clearTimeout(timer);
      }, 500);
    },
  });

  return (
    <div ref={ref} className={`${className} invisible h-fit w-fit`}>
      {children}
    </div>
  );
}
