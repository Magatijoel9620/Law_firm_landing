"use client";
import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Magnetic } from "@/components/interactive/InteractionLayer";
export default function BackToTopButton() {
 const [visible,setVisible]=useState(false);
 useEffect(()=>{const onScroll=()=>setVisible(window.scrollY>500); onScroll(); window.addEventListener("scroll",onScroll,{passive:true}); return()=>window.removeEventListener("scroll",onScroll)},[]);
 return <Magnetic className="fixed bottom-24 right-6 z-50"><motion.div initial={false} animate={{opacity:visible?1:0,scale:visible?1:.85}} className={cn(!visible&&"pointer-events-none")}><Button size="icon" className="rounded-full bg-accent text-accent-foreground shadow-xl hover:bg-accent/90" onClick={()=>window.scrollTo({top:0,behavior:"smooth"})} aria-label="Scroll to top"><ArrowUp className="h-5 w-5"/></Button></motion.div></Magnetic>;
}
