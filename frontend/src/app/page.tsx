'use client'
import { useState, useEffect, createContext } from 'react'
import SideBar from '@/components/SideBar'
import styles from './@css/style.module.scss'
import { IconButton, Button } from '@mui/material'
import Reaction from './@components/Reaction'
import Indulgence from './@components/Indulgence'
import Content from './@components/Content'
import Push from './@components/Push'

export default function Home() {
  const [phase, setPhase] = useState<number>(0);
  const [mode, setMode] = useState('None');
  const [count, setCount] = useState(0);

  const handlePhaseChange = (phase_: number, mode_: string, count_: number, indulgenceContent: string) => {
    setPhase(phase_);
    setMode(mode_);
    if(phase_ == 3) setCount(count_);
    else setCount(0);

    if(phase_ == 4){
      const data = {

      }
      Push(count_, indulgenceContent);

      setPhase(0);
    }


  };


  return (
    <main>
      {phase == 0 && <SideBar />}
      {phase == 0 && <Reaction onPhaseChange={handlePhaseChange} />}
      {(phase == 1 || phase == 2) && <Indulgence mode={mode} onPhaseChange={handlePhaseChange} />}
      {phase == 3 && <Content mode={mode} count={count} onPhaseChange={handlePhaseChange} />}

    </main>
  )
}
