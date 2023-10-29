
import { TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'

const Excuse = () => {
  const [gptExcuse, setGPTExcuse] = useState('');
  useEffect(
    () => {
    setGPTExcuse(fetch('', ))

    return () => {
      second
    }
  }, [third])


  return (
    <div>
      <TextField
        multiline
        disabled
        label='言い訳'
        rows={4}
      />
    </div>
  )
}

export default Excuse
