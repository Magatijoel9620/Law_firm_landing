import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Badge } from '../ui/badge';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative h-[60vh] sm:h-[70vh] md:h-[90vh] flex items-center justify-center text-center overflow-hidden">
      <motion.div initial={{ scale: 1.1 }} animate={{ scale: 1 }} transition={{ duration: 10, ease: "linear", repeat: Infinity, repeatType: "mirror" }} className="absolute inset-0">
        <Image
            src="/images/team/team.jpg"
            alt="Team of Kanyi J. & Company Advocates"
            fill
            className="object-cover"
            priority
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30"></div>
      <motion.div 
        className="relative z-10 px-4 text-white max-w-4xl mx-auto"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              staggerChildren: 0.2,
            }
          }
        }}
      >
        <motion.h1 
          className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-headline font-bold tracking-tight mb-4 drop-shadow-lg"
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 }}}}
        >
          Kanyi J. & Company Advocates
        </motion.h1>
        <motion.p 
          className="text-lg md:text-2xl mb-8 font-light drop-shadow-md text-slate-200"
           variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 }}}}
        >
          A Top-Tier Law Firm in Mombasa, Kenya. Advocates, Commissioners For Oaths & Notaries Public.
        </motion.p>
        <motion.div
           variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.4 }}}}
        >
         <Button
  size="lg"
  className="
    backdrop-blur-xl 
    bg-white/15 
    text-white 
    border border-white/20 
    shadow-[0_8px_24px_rgba(255,255,255,0.15)]
    hover:bg-white/25 
    hover:border-white/30
    transition-all 
    duration-300
    hover:scale-105
    rounded-xl
  "
  asChild
>
  <Link href="#contact">Book Consultation</Link>
</Button>

        </motion.div>
         <motion.div
           variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.6 }}}}
           className="mt-6"
        >
          <Badge variant="secondary" className="bg-white/20 text-white backdrop-blur-sm border-0">
            Serving clients since 1985
          </Badge>
        </motion.div>
      </motion.div>
    </section>
  );
}
