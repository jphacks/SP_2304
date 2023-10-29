import Image from "next/legacy/image";
import React from "react";

import title from "@/app/image/ラー麺免罪符.png";

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
      <figure className>
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
        <FaceButton emoji="😤" mode="stress" onPhaseChange={onPhaseChange} title="" />
        <FaceButton emoji="🥰" mode="benefaction" onPhaseChange={onPhaseChange} title="" />
      </div>
      <h2 className={styles.context}>タップして記録開始!</h2>
    </div>
  );
};

export default Reaction;
