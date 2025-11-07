"use client";

import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";

type AnimatedSectionProps = {
  children: React.ReactNode;
  className?: string;
};

export default function AnimatedSection({ children, className }: AnimatedSectionProps) {
  return (
    <motion.div
      variants={fadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
