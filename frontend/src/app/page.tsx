'use client'
import { useState, createContext } from 'react'
import SideBar from '@/components/SideBar'
import styles from './@css/style.module.scss'
import { IconButton, Button } from '@mui/material'
import Reaction from './@components/Reaction'
import Stress from './@components/Stress'


// export const phaseContext = createContext({phase: 0, setPhase: () => (0)});
export default function Home() {
  const [phase, setPhase] = useState<number>(0)

  const handlePhaseChange = (num: number) => {
    setPhase(num);
  }

  return (
    <main>
      <SideBar />

      {phase == 0 && <Reaction phase={phase} onPhaseChange={handlePhaseChange} />}
      {phase == 1 && <Stress phase={phase} onPhaseChange={handlePhaseChange} />}

    </main>
  )
}
