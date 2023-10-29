
import { TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'

const Excuse = () => {
  const [gptExcuse, setGPTExcuse] = useState('');
  useEffect(() => {
    const fetchExcuse = async () => {
      const data = fetch('http://localhost:8000/api/openai/excuse', {})
    }
  }, [])



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
