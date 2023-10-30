import { TextField, CircularProgress } from "@mui/material";
import React, { useEffect, useState, useContext } from "react";

import styles from '../_css/Excuse.module.scss'

import { ExcuseContext } from "./Main";

type Props = {
  content: string;
};

const Excuse = (props: Props) => {
  const { content } = props;
  const { excuse, setExcuse } = useContext(ExcuseContext);
  const data = {
    sentence: content,
  };

  const url = 'https://ramenzaifu.fly.dev/api/openai/excuse'

  console.log(data);

  const [gptExcuse, setGPTExcuse] = useState("");
  useEffect(() => {
    const fetchExcuse = async () => {
      const excuse_ = await fetch(url, {
        body: JSON.stringify(data),
        cache: "no-store",
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      })
        .then(async (res) => {
          const data_ = await res.json();
          return  data_.content;
        })
        .catch(async (res) => {
          console.log(`Excuse generation failed due to the following error(s): ${res.error}`)
          return '良い言い訳が思いつかなかったようです...'
        })

      setGPTExcuse(excuse_);
      setExcuse(excuse_);
    };

    // fetchExcuse();
    setGPTExcuse('テスト')
    setExcuse('テスト')
  }, []);

  return (
    <div className={styles.excuseField}>
      <TextField
        InputProps={{
          readOnly: true,
        }}
        defaultValue={gptExcuse}
        multiline
        rows={4}
      />
      {excuse === "" &&
        <div className={styles.progressModal}>
          <CircularProgress
            className={styles.progress}
            color="inherit"
          />
        </div>
      }
    </div>
  );
};

export default Excuse;
