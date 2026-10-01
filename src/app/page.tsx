'use client';

import dynamic from 'next/dynamic';
import { Skeleton } from '@/components/ui/skeleton';
import AnimatedSection from '@/components/layout/animated-section';
import LenisProvider from '@/components/interactive/LenisProvider';
import CursorSystem from '@/components/interactive/CursorSystem';
import DepthBackground from '@/components/interactive/DepthBackground';

const Hero = dynamic(() => import('@/components/sections/hero'), { loading: () => <Skeleton className="h-[90vh] w-full" /> });
const FirmHistory = dynamic(() => import('@/components/sections/firm-history'), { loading: () => <Skeleton className="h-96 w-full" /> });
const PracticeAreas = dynamic(() => import('@/components/sections/practice-areas'), { loading: () => <Skeleton className="h-96 w-full" /> });
const Stats = dynamic(() => import('@/components/sections/stats'), { loading: () => <Skeleton className="h-48 w-full" /> });
const AttorneyProfiles = dynamic(() => import('@/components/sections/attorney-profiles'), { loading: () => <Skeleton className="h-96 w-full" /> });
const Partners = dynamic(() => import('@/components/sections/partners'), { loading: () => <Skeleton className="h-48 w-full" /> });
const Contact = dynamic(() => import('@/components/sections/contact'), { loading: () => <Skeleton className="h-96 w-full" /> });

import Footer from '@/components/layout/footer';
import Header from '@/components/layout/header';
import BackToTopButton from '@/components/layout/back-to-top-button';

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col bg-background">
      <LenisProvider />
      <CursorSystem />
      <DepthBackground />
      <Header />
      <main className="flex-1">
        <Hero />
        <div className="space-y-16 sm:space-y-24">
          <AnimatedSection><FirmHistory /></AnimatedSection>
          <AnimatedSection><PracticeAreas /></AnimatedSection>
          <AnimatedSection><Stats /></AnimatedSection>
          <AnimatedSection><AttorneyProfiles /></AnimatedSection>
          <AnimatedSection><Partners /></AnimatedSection>
          <AnimatedSection><Contact /></AnimatedSection>
        </div>
      </main>
      <Footer />
      <BackToTopButton />
    </div>
  );
}
