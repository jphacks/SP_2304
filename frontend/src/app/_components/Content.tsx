import { Close } from "@mui/icons-material";
import { IconButton, Button, TextField } from "@mui/material";
import React, { useState } from "react";

import styles from "../_css/style.module.scss";

type Props = {
  count: number;
  mode: string;
  onPhaseChange: (phase: number, mode: string, count: number, content: string) => void;
};

const Content = (props: Props) => {
  const { mode, count, onPhaseChange } = props;
  const [dbIndulgenceContent, setDBIndulgenceContent] = useState("");
  const phaseChange = (phase: number, mode: string, count: number) => {
    onPhaseChange(phase, mode, count, dbIndulgenceContent);
  };

  const face: { [key: string]: string } = {
    benefaction: "🥰",
    stress: "😤",
  };

  return (
    <div className={styles.main}>
      <IconButton
        className={styles.closeButton}
        onClick={() => {
          phaseChange(0, "None", 0);
        }}
      >
        <Close />
      </IconButton>
      <div className={styles.contentWrapper}>
        <div className={styles.contentForm}>
          <div>
            <p>
              {count}
              {face[mode]}
            </p>
            <TextField
              id="indulgenceContent"
              label="概要"
              multiline
              onChange={(e) => {
                setDBIndulgenceContent(e.target.value);
              }}
            />
          </div>
          <Button
            className={styles.text}
            onClick={() => {
              phaseChange(3, mode, count);
            }}
            variant="contained"
          >
            次へ
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Content;
