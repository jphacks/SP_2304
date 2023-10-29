"use client";
import { useState, createContext } from "react";

import SideBar from "@/components/SideBar";

import TodoForm from "./_components/TodoForm";
import styles from "./_css/style.module.scss";
import Excuse from "./_components/Excuse";

type ContextType = {
  phase: number;
  setPhase: (value: number) => void;
};

export const PhaseContext = createContext<ContextType>({} as ContextType);

export default function Home() {
  const [content, setContent] = useState("");
  const [phase, setPhase] = useState(0);

  // console.log(content);

  return (
    <main>
      <SideBar />

      <PhaseContext.Provider value={{ phase, setPhase }}>
        <div className={styles.main}>
          <TodoForm setContent={setContent} />
          {phase != 0 && <Excuse content={content} />}
        </div>
      </PhaseContext.Provider>
    </main>
  );
}
