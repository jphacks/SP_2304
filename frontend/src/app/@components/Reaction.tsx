import React from 'react'
import { useState, useContext } from 'react'
import SideBar from '@/components/SideBar'
import styles from '../@css/style.module.scss'
import { IconButton, Button } from '@mui/material'
// import { phaseContext } from '../page'

type Props = {
  phase: number;
  onPhaseChange: (num: number) => void
}

const Reaction = (props: Props) => {
  // const {phase, setPhase} = useContext(phaseContext)
  const {phase, onPhaseChange} = props;

  const facePressed = (phase_: number) => {
    onPhaseChange(phase_);
  }

  return (
    <div className={styles.indulgenceWrapper}>
      <h1 className={styles.appTitle}>タイトル</h1>

      <div className={styles.faceButtonWrapper}>
        <div className={styles.faceButton}>
          <p>ストレス</p>
          <Button
            onClick={() => facePressed(1)}
          >
            😤
          </Button>
        </div>
        <div className={styles.faceButton}>
          <p>善行</p>
          <Button
            onClick={() => facePressed(2)}
          >🥰</Button>
        </div>
      </div>

      <p>タップして記録開始</p>
    </div>
  )
}

export default Reaction
