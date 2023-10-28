import { Button } from "@mui/material";
import { FC } from "react";

import styles from "../_css/FaceButton.module.scss";

type FaceButtonProps = {
  emoji: string;
  mode: string;
  onPhaseChange: (phase: number, mode: string, count: number, content: string) => void;
  title: string;
};

const FaceButton: FC<FaceButtonProps> = ({ title, emoji, mode, onPhaseChange }) => {
  const facePressed = (mode_: string, count_: number) => {
    onPhaseChange(1, mode_, count_, "");
  };

  return (
    <div className={styles.faceButton}>
      <div>
        <p>{title}</p>
        <Button onClick={() => facePressed(mode, 0)}>{emoji}</Button>
      </div>
    </div>
  );
};

export default FaceButton;
