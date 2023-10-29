
import { TextField } from '@mui/material'
import React, { useEffect, useState, useContext } from 'react'
import { ExcuseContext } from '../page'

type Props = {
  content: string
}

const Excuse = (props: Props) => {
  const {content} = props;
  const {excuse, setExcuse} = useContext(ExcuseContext);
  const data = {
    sentence: content
  }

  console.log(data);

  const [gptExcuse, setGPTExcuse] = useState('');
  useEffect(() => {
    const fetchExcuse = async () => {
      const res = await fetch('http://127.0.0.1:8000/api/openai/excuse', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
        cache: 'no-store',
      })

      const data_ = await res.json();
      const excuse_ = data_.content;
      setGPTExcuse(excuse_);
      setExcuse(excuse_);
    }

    fetchExcuse();

  }, [])

  return (
    <div>
      <TextField
        multiline
        defaultValue={gptExcuse}
        rows={4}
        InputProps={{
          readOnly: true,
        }}
      />
    </div>
  )
}

export default Excuse
