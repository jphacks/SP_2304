import { Close } from "@mui/icons-material";
import { Button, IconButton } from "@mui/material";
import React, { useState } from "react";

import styles from "../_css/Indulgence.module.scss";

type Props = {
  mode: string;
  onPhaseChange: (phase: number, mode: string, count: number, content: string) => void;
};
const Indulgence = (props: Props) => {
  const { mode, onPhaseChange } = props;
  const [count, setCount] = useState(0);

  const face: { [key: string]: string } = {
    benefaction: "🥰",
    stress: "😤",
  };

  const phaseChange = (phase: number, mode: string, count: number) => {
    onPhaseChange(phase, mode, count, "");
  };

  return (
    <div>
      <IconButton
        className={styles.closeButton}
        onClick={() => {
          phaseChange(0, "None", 0);
        }}
      >
        <Close />
      </IconButton>
      <div className={styles.reactionWrapper}>
        <div className={styles.reactionButton}>
          <p>連打しろ！！！</p>
          <Button
            className={styles.iconButton}
            onClick={() => {
              setCount(count + 1);
            }}
          >
            {face[mode]}
          </Button>
          <Button
            className={styles.text}
            onClick={() => {
              phaseChange(2, mode, count);
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

export default Indulgence;
