"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { Badge } from "../ui/badge";
import LegalObject from "@/components/interactive/LegalObject";
import { Magnetic } from "@/components/interactive/InteractionLayer";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "16%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const objectY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.78], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative isolate min-h-[calc(100svh-80px)] overflow-hidden bg-[#101411] text-white"
    >
      <motion.div style={{ y: imageY }} className="absolute -inset-[9%]">
        <Image
          src="/images/team/team.jpg"
          alt="Team of Kanyi J. & Company Advocates"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
      </motion.div>
      <div className="absolute inset-0 bg-[#07100b]/60" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,10,7,.96)_0%,rgba(5,10,7,.76)_42%,rgba(5,10,7,.20)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_40%,rgba(210,169,82,.22),transparent_28%),radial-gradient(circle_at_20%_20%,rgba(255,255,255,.06),transparent_24%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#101411]/80 via-[#101411]/30 to-transparent" />

      <motion.div
        style={{ opacity }}
        className="relative z-10 mx-auto grid min-h-[calc(100svh-80px)] max-w-7xl items-center px-5 py-16 sm:px-8 lg:grid-cols-[1.08fr_.92fr] lg:px-10"
      >
        <motion.div style={{ y: contentY }} className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="mb-7 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[.38em] text-white/60">
              <span className="h-px w-10 bg-accent" /> Established 1985 ·
              Mombasa, Kenya
            </div>
            <h1 className="max-w-5xl font-headline text-[clamp(3.2rem,8vw,7.6rem)] font-bold leading-[.88] tracking-[-.055em]">
              Kanyi J. &amp;
              <br />
              <span className="text-accent">Company Advocates.</span>
            </h1>
            <p className="mt-8 max-w-2xl text-base leading-7 text-white/70 sm:text-xl sm:leading-8">
              A Top-Tier Law Firm in Mombasa, Kenya. Advocates, Commissioners
              For Oaths &amp; Notaries Public.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Magnetic>
                <Link
                  href="#contact"
                  className="group inline-flex items-center gap-3 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-accent-foreground shadow-[0_18px_50px_rgba(0,0,0,.25)] transition-transform hover:scale-[1.02]"
                >
                  Book Consultation{" "}
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Link>
              </Magnetic>
              <Magnetic>
                <Link
                  href="#practice-areas"
                  className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/[0.06] px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition-colors hover:bg-white/10"
                >
                  Explore Services
                </Link>
              </Magnetic>
            </div>
            <Badge
              variant="secondary"
              className="mt-7 border-white/10 bg-white/[0.06] text-white/70 backdrop-blur-md"
            >
              Serving clients since 1985
            </Badge>
          </motion.div>
        </motion.div>

        <motion.div style={{ y: objectY }} className="relative hidden lg:block">
          <LegalObject />
        </motion.div>
      </motion.div>

      <motion.a
        href="#history"
        style={{ opacity }}
        className="absolute bottom-8 left-1/2 z-20 hidden -translate-x-1/2 items-center gap-3 text-[10px] font-semibold uppercase tracking-[.35em] text-white/45 transition-colors hover:text-white md:flex"
      >
        Scroll to explore <ArrowDownRight className="h-4 w-4" />
      </motion.a>
    </section>
  );
}
