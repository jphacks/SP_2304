import { Button } from "@mui/material";
import { FC } from "react";

import styles from "../_css/FaceButton.module.scss";

type FaceButtonProps = {
  emoji: string;
  mode: string;
  onPhaseChange: (phase: number) => void;
  setMode: (mode: string) => void
};

const FaceButton: FC<FaceButtonProps> = ({ emoji, mode, onPhaseChange, setMode }) => {
  const facePressed = (mode_: string) => {
    onPhaseChange(1);
    setMode(mode);
  };

  return (
    <div className={styles.faceButton}>
      <div>
        {/* <p>{title}</p> */}
        <Button onClick={() => facePressed(mode)}>{emoji}</Button>
      </div>
    </div>
  );
};

export default FaceButton;
