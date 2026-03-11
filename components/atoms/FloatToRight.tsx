"use client";
import { ReactNode, useEffect, useRef, useState } from "react";
import { useScrollTo } from "@/hook/useScrollTo";

export default function FloatToRight({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
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
      element?.classList.add("animate-float-in-right");
    },
  });

  return (
    <div ref={ref} className={`${className} invisible h-fit w-fit`}>
      {children}
    </div>
  );
}
