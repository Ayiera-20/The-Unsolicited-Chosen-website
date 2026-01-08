import { motion } from "framer-motion";
import type { ReactNode } from "react";

type SectionTransitionProps = {
  children: ReactNode;
  bgColor?: string;
};

const SectionTransition = ({ children, bgColor = "#184E35" }: SectionTransitionProps) => {
  return (
     <div className="relative overflow-hidden">
      <motion.div
        className="absolute top-0 left-0 w-full h-full z-50 origin-bottom pointer-events-none"
        style={{ backgroundColor: bgColor }}
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default SectionTransition;
