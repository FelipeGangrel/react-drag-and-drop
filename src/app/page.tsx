'use client'

import { TooltipProvider } from '@radix-ui/react-tooltip'
import { Compositor } from '@/components/Compositor'
import { Toolbar } from '@/components/Toolbar'

export default function Home() {
  return (
    <TooltipProvider>
      <main className="relative flex h-screen flex-col bg-slate-300">
        <div className="flex h-full flex-row bg-red-500">
          <Compositor />
        </div>
        <Toolbar />
      </main>
    </TooltipProvider>
  )
}
