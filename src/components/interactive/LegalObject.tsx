
"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { Scale } from "lucide-react";
import { useEffect, useState } from "react";

export default function LegalObject() {
  const px = useMotionValue(0);
  const py = useMotionValue(0);

  const x = useSpring(px, {
    stiffness: 90,
    damping: 20,
  });

  const y = useSpring(py, {
    stiffness: 90,
    damping: 20,
  });

  const rotateY = useTransform(x, [-1, 1], [-13, 13]);
  const rotateX = useTransform(y, [-1, 1], [10, -10]);

  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    const update = () => setReduced(media.matches);

    update();
    media.addEventListener("change", update);

    return () => media.removeEventListener("change", update);
  }, []);

  return (
    <div
      className="relative mx-auto aspect-square w-full max-w-[520px] [perspective:1100px]"
      onPointerMove={(e) => {
        if (reduced) return;

        const r = e.currentTarget.getBoundingClientRect();

        px.set((e.clientX - r.left) / r.width * 2 - 1);
        py.set((e.clientY - r.top) / r.height * 2 - 1);
      }}
      onPointerLeave={() => {
        px.set(0);
        py.set(0);
      }}
    >
      {/* Main glass object */}
      <motion.div
        style={{
          rotateX,
          rotateY,
        }}
        animate={
          reduced
            ? undefined
            : {
                y: [0, -12, 0],
                rotateZ: [0, 1.5, 0],
              }
        }
        transition={
          reduced
            ? undefined
            : {
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }
        }
        className="
          absolute inset-[13%]
          rounded-[38%]
          border border-white/[0.14]
          bg-white/[0.025]
          shadow-[0_30px_80px_rgba(0,0,0,0.16)]
          backdrop-blur-[3px]
          [transform-style:preserve-3d]
        "
      >
        {/* Very subtle inner glass layer */}
        <div
          className="
            absolute inset-5
            rounded-[34%]
            border border-accent/20
            bg-gradient-to-br
            from-white/[0.055]
            via-accent/[0.025]
            to-transparent
          "
        />

        {/* Inner ring */}
        <div
          className="
            absolute inset-[18%]
            rounded-full
            border border-white/[0.10]
            bg-black/[0.025]
          "
        />

        {/* Central scale */}
        <div
          className="
            absolute inset-0
            grid place-items-center
            [transform:translateZ(55px)]
          "
        >
          <div
            className="
              grid h-28 w-28 place-items-center
              rounded-full
              border border-accent/35
              bg-black/[0.06]
              shadow-[0_20px_50px_rgba(0,0,0,0.14)]
              backdrop-blur-[2px]
              sm:h-36 sm:w-36
            "
          >
            <Scale
              className="h-14 w-14 text-accent/90 sm:h-16 sm:w-16"
              strokeWidth={1.1}
            />
          </div>
        </div>

        {/* Floating accent particles */}
        <span
          className="
            absolute left-[15%] top-[14%]
            h-2 w-2 rounded-full
            bg-accent/80
            shadow-[0_0_20px_rgba(214,173,84,0.65)]
          "
        />

        <span
          className="
            absolute bottom-[19%] right-[16%]
            h-1.5 w-1.5 rounded-full
            bg-white/60
          "
        />
      </motion.div>

      {/* Decorative rings */}
      <div
        className="
          absolute inset-[3%]
          rounded-full
          border border-white/[0.08]
        "
      />

      <div
        className="
          absolute inset-[7%]
          rounded-full
          border border-accent/[0.12]
          [transform:rotateX(68deg)]
        "
      />

      {/* Soft atmospheric glow — much lighter */}
      <div
        className="
          absolute left-1/2 top-1/2
          h-[72%] w-[72%]
          -translate-x-1/2 -translate-y-1/2
          rounded-full
          bg-accent/[0.035]
          blur-[55px]
        "
      />
    </div>
  );
}
