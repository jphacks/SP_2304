"use client";
import { useState } from "react";

import SideBar from "@/components/SideBar";

import Content from "./_components/Content";
import Indulgence from "./_components/Indulgence";
import Push from "./_components/Push";
import Reaction from "./_components/Reaction";
import styles from "./_css/utils.module.scss";

export default function Home() {
  const [phase, setPhase] = useState<number>(0);
  const [mode, setMode] = useState("None");
  const [count, setCount] = useState(0);
  const [tags, setTags] = useState<string[]>([]);
  const [content, setContent] = useState("");

  const handlePhaseChange = (phase_: number) => {
    setPhase(phase_);
    if(phase_ === 0){
      setMode("None");
      setCount(0);
      setTags([]);
    } else if(phase_ === 3){
      Push(count, content, tags);
      setPhase(0);
    }
  }

  return (
    <main className={styles.sideBySide}>
      {phase == 0 && <SideBar sideBarId={0} />}
      {phase == 0 &&
        <div className={`${styles.putCenter} ${styles.sideBarComp}`}>
          <Reaction onPhaseChange={handlePhaseChange} setMode={setMode} />
        </div>
      }
      {phase == 1 &&
        <div className={styles.putCenter}>
          <Indulgence mode={mode} onPhaseChange={handlePhaseChange} setRootCount={setCount} />
        </div>
      }
      {phase == 2 &&
        <div className={styles.putCenter}>
          <Content count={count} mode={mode} onPhaseChange={handlePhaseChange} setRootContent={setContent} setRootTags={setTags} />
        </div>
      }
    </main>
  );
}
