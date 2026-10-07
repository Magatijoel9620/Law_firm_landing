"use client";
import { Users, Building2, BriefcaseBusiness, Scale, Clock3 } from "lucide-react";
import { Reveal } from "@/components/interactive/InteractionLayer";
import { motion } from "framer-motion";

// Firm Profile 2026 — source of truth for the current firm-level figures.
const stats = [
  { value: "40+", label: "Years Serving Clients", icon: Clock3 },
  { value: "3", label: "Offices Across the Coast", icon: Building2 },
  { value: "5", label: "Advocates & Lawyers", icon: Scale },
  { value: "20", label: "Professional Support Staff", icon: Users },
  { value: "11+", label: "Practice Areas", icon: BriefcaseBusiness },
];

export default function Stats() {
  return <section id="stats" className="relative overflow-hidden bg-primary py-20 text-primary-foreground sm:py-24"><div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(214,173,84,.14),transparent_35%)]" /><div className="container relative mx-auto px-5 sm:px-8 lg:px-10"><div className="grid grid-cols-2 gap-y-12 sm:grid-cols-3 lg:grid-cols-5">{stats.map((stat,i)=><Reveal key={stat.label} delay={i*.05}><motion.div whileHover={{ y: -5 }} className="group flex flex-col items-center text-center"><stat.icon className="mb-4 h-7 w-7 text-accent transition-transform duration-500 group-hover:scale-110" strokeWidth={1.5}/><p className="font-headline text-4xl font-bold tracking-tight sm:text-5xl">{stat.value}</p><p className="mt-2 max-w-[11rem] text-[10px] uppercase tracking-[.18em] text-primary-foreground/55">{stat.label}</p></motion.div></Reveal>)}</div></div></section>;
}
