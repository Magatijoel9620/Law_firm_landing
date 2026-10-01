"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function DepthBackground() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, 260]);

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <motion.div style={{ y }} className="absolute -left-32 top-[12vh] h-96 w-96 rounded-full bg-accent/8 blur-3xl" />
      <motion.div style={{ y: useTransform(scrollYProgress, [0, 1], [0, -180]) }} className="absolute -right-40 top-[48vh] h-[34rem] w-[34rem] rounded-full bg-primary/8 blur-3xl" />
      <div className="absolute inset-0 opacity-[0.035] [background-image:linear-gradient(hsl(var(--foreground))_1px,transparent_1px),linear-gradient(90deg,hsl(var(--foreground))_1px,transparent_1px)] [background-size:64px_64px]" />
    </div>
  );
}
