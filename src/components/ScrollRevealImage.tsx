import { useRef } from "react";
import { motion, useInView } from "framer-motion";

type ScrollImageRevealProps = {
  children: React.ReactNode;
  bgColor?: string;
};

const ScrollImageReveal = ({ children, bgColor = "#184E35" }: ScrollImageRevealProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {once: true,  margin: "-100px" });

  return (
    <div ref={ref} className="relative overflow-hidden origin-bottom w-fit h-fit">
      {isInView && (
        <motion.div
        className="absolute inset-0 z-10 origin-bottom"
        style={{ backgroundColor: bgColor }}
        initial={{ scaleY: 1 }}
        animate={isInView ? { scaleY: 0 } : { scaleY: 1 }}
        transition={{ duration: 2.5, delay:0.6, ease: [0.22, 1, 0.36, 1] }} 
      />
      )}
      <div className="relative z-0">{children}</div>
    </div>
  );
};

export default ScrollImageReveal;
