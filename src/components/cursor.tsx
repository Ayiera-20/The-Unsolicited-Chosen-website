// components/CustomCursor.tsx
import { useEffect, useRef } from "react";

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const cursor = cursorRef.current;

      if (cursor) {
        cursor.style.left = `${clientX}px`;
        cursor.style.top = `${clientY}px`;
      }
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <div
      ref={cursorRef}
      className=" fixed top-0 left-0 w-10 h-10 border border-[#818F39] rounded-full z-[9999] transform -translate-x-1/2 -translate-y-1/2 transition-all duration-150 ease-in-out"
    />
  );
};

export default CustomCursor;
