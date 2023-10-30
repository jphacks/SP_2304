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

  const url = 'http://localhost:8000/api/openai/excuse'

  console.log(data);

  const [gptExcuse, setGPTExcuse] = useState("");
  useEffect(() => {
    const fetchExcuse = async () => {
      // await fetch(url).then((res) => {
      //   const {status, ok} = res;
      //   return res.json().then((d) => {
      //     if(ok){
      //       // const
      //     }
      //   })
      // });

      const res = await fetch("http://127.0.0.1:8000/api/openai/excuse", {
        body: JSON.stringify(data),
        cache: "no-store",
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });

      const data_ = await res.json();
      const excuse_ = data_.content;
      setGPTExcuse(excuse_);
      setExcuse(excuse_);
    };

    fetchExcuse();
    setExcuse('テスト');
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
