import React from 'react'
import styles from '../@css/style.module.scss'
import { Button } from '@mui/material'

type Props = {
  phase: number,
  onPhaseChange: (num: number) => void
}
const Stress = (props: Props) => {
  const {phase, onPhaseChange} = props;

  return (
    <div className={styles.stressWrapper}>
      <div className={styles.stressButton}>
        <p>連打しろ！！！</p>
        <Button>😤</Button>
      </div>
    </div>
  )
}

export default Stress
