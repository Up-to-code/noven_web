'use client'

import { useState } from 'react'
import type { NexfiyApp } from '@/lib/apps-data.tsx'
import { Hero } from '@/components/landing/hero'
import { Intro } from '@/components/landing/intro'
import { AppsShowcase } from '@/components/landing/apps-showcase'
import { AppModal } from '@/components/landing/app-modal'
import { Features } from '@/components/landing/features'
import { About } from '@/components/landing/about'
import { Trust } from '@/components/landing/trust'
import { Footer } from '@/components/landing/footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <Intro />
      <AppsShowcase onAppClick={() => {}} />
      <Features />
      <div id="about">
        <About />
      </div>
      <Trust />
      <Footer />
    </main>
  )
}
