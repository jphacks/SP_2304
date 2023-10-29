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
  const facePressed = (mode_: string) => {
    onPhaseChange(1, mode_, 0, "");
  };

  return (
    <div className={styles.faceButton}>
      <div>
        <p>{title}</p>
        <Button onClick={() => facePressed(mode)}>{emoji}</Button>
      </div>
    </div>
  );
};

export default FaceButton;
