import React from 'react'
import { useState } from 'react'
import styles from '../@css/style.module.scss'
import { Button, IconButton } from '@mui/material'
import { Close } from '@mui/icons-material'

type Props = {
  mode: string
  onPhaseChange: (phase: number, mode: string, count: number, content: string) => void
}
const Indulgence = (props: Props) => {
  const {mode, onPhaseChange} = props;
  const [count, setCount] = useState(0);

  const face: {[key: string]: string;} = {
    'stress': '😤',
    'benefaction': '🥰'
  }

  const phaseChange = (phase: number, mode: string, count: number) => {
    onPhaseChange(phase, mode, count, '');
  }

  return (
    <div className={styles.main}>
      <IconButton
        className={styles.closeButton}
        onClick={() => {phaseChange(0, 'None', 0)}}
      >
        <Close />
      </IconButton>
      <div className={styles.stressWrapper}>
        <div className={styles.stressButton}>
          <p>連打しろ！！！</p>
          <Button
            className={styles.iconButton}
            onClick={() => {setCount(count+1)}}
          >
            {face[mode]}
          </Button>
          <Button
            className={styles.text}
            variant='contained'
            onClick={() => {phaseChange(3, mode, count)}}
          >次へ</Button>
        </div>
      </div>
    </div>
  )
}

export default Indulgence
