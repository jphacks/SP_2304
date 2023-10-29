import React from "react";

import FaceButton from "../_components/FaceButton";
import styles from "../_css/Reaction.module.scss";
// import styles from '../_css/style.module.scss'
// import { phaseContext } from '../page'

type Props = {
  onPhaseChange: (phase: number, mode: string, count: number, content: string) => void;
};

const Reaction = (props: Props) => {
  // const {phase, setPhase} = useContext(phaseContext)
  const { onPhaseChange } = props;

  return (
    <div>
      <h1 className={styles.appTitle}>タイトル</h1>
      <div className={styles.faceButtonWrapper}>
        <FaceButton emoji="😤" mode="stress" onPhaseChange={onPhaseChange} title="ストレス" />
        <FaceButton emoji="🥰" mode="benefaction" onPhaseChange={onPhaseChange} title="善行" />
      </div>
      <p className={styles.context}>タップして記録開始</p>
    </div>
  );
};

export default Reaction;
