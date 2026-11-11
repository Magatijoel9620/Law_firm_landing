"use client";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";
export default function AnimatedSection({ children, className }: { children: React.ReactNode; className?: string }) {
 return <motion.div className={`scroll-reveal ${className ?? ""}`} onViewportEnter={(entry) => { if (entry) entry.target.setAttribute("data-scroll-revealed", "true"); }} variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once:true, amount:.16 }} transition={{ duration:.7, ease:[.22,1,.36,1] }} >{children}</motion.div>;
}
