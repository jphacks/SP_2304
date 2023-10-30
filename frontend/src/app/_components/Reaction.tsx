import Image from "next/legacy/image";
import React from "react";

import title from "@/app/image/ラー麺罪符.png";

import FaceButton from "../_components/FaceButton";
import styles from "../_css/Reaction.module.scss";

// import styles from '../_css/style.module.scss'
// import { phaseContext } from '../page'

type Props = {
  onPhaseChange: (phase: number) => void;
  setMode: (mode: string) => void;
};

const Reaction = (props: Props) => {
  // const {phase, setPhase} = useContext(phaseContext)
  const { onPhaseChange, setMode } = props;

  return (
    <div>
      <figure className={styles.logo}>
        <Image
          alt="title"
          layout="responsive"
          placeholder="blur"
          priority
          sizes={"100vw"}
          src={title}
        />
      </figure>

      <div className={styles.faceButtonWrapper}>
        <FaceButton emoji="😤" mode="stress" onPhaseChange={onPhaseChange} setMode={setMode} />
        <FaceButton emoji="🥰" mode="benefaction" onPhaseChange={onPhaseChange} setMode={setMode} />
      </div>
      <h2 className={styles.context}>タップして記録開始!</h2>
    </div>
  );
};

export default Reaction;
