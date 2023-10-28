import React from 'react'
import { useState, useContext } from 'react'
import SideBar from '@/components/SideBar'
import styles from '../_css/style.module.scss'
import { IconButton, Button } from '@mui/material'
// import { phaseContext } from '../page'

type Props = {
  onPhaseChange: (phase: number, mode: string, count: number, content: string) => void
}

const Reaction = (props: Props) => {
  // const {phase, setPhase} = useContext(phaseContext)
  const {onPhaseChange} = props;

  const facePressed = (phase: number, mode: string, count: number) => {
    onPhaseChange(phase, mode, count, '');
  }

  return (
    <div className={styles.indulgenceWrapper}>
      <h1 className={styles.appTitle}>タイトル</h1>

      <div className={styles.faceButtonWrapper}>
        <div className={styles.faceButton}>
          <p>ストレス</p>
          <Button
            onClick={() => facePressed(1, 'stress', 0)}
          >
            😤
          </Button>
        </div>
        <div className={styles.faceButton}>
          <p>善行</p>
          <Button
            onClick={() => facePressed(2, 'benefaction', 0)}
          >🥰</Button>
        </div>
      </div>

      <p>タップして記録開始</p>
    </div>
  )
}

export default Reaction
