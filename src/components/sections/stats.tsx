"use client";
import { Trophy, ShieldCheck, Scale, Award, Gavel } from "lucide-react";
import { Reveal } from "@/components/interactive/InteractionLayer";
import { motion } from "framer-motion";
const stats = [
  { value: "5,600+", label: "Solved Cases", icon: ShieldCheck },
  { value: "4,000+", label: "Cases Won", icon: Gavel },
  { value: "10+", label: "Awards Won", icon: Trophy },
  { value: "Top 10", label: "Law Firm Ranking", icon: Scale },
  { value: "25+", label: "Years in Practice", icon: Award },
];
export default function Stats() {
  return <section id="stats" className="relative overflow-hidden bg-primary py-20 text-primary-foreground sm:py-24"><div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(214,173,84,.14),transparent_35%)]" /><div className="container relative mx-auto px-5 sm:px-8 lg:px-10"><div className="grid grid-cols-2 gap-y-12 sm:grid-cols-3 lg:grid-cols-5">{stats.map((stat,i)=><Reveal key={stat.label} delay={i*.05}><motion.div whileHover={{ y: -5 }} className="group flex flex-col items-center text-center"><stat.icon className="mb-4 h-7 w-7 text-accent transition-transform duration-500 group-hover:scale-110" strokeWidth={1.5}/><p className="font-headline text-4xl font-bold tracking-tight sm:text-5xl">{stat.value}</p><p className="mt-2 text-[10px] uppercase tracking-[.22em] text-primary-foreground/55">{stat.label}</p></motion.div></Reveal>)}</div></div></section>;
}
