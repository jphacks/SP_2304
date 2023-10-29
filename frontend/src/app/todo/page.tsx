"use client";
import { useState, createContext } from "react";

import styles from "@/app/_css/utils.module.scss";
import styles2 from "@/app/todo/_css/style.module.scss";
import SideBar from "@/components/SideBar";

import TodoForm from "./_components/TodoForm";
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
    <div className={styles.sideBySide}>
      <SideBar />

      <div className={styles2.todoFormWrapper}>
        <PhaseContext.Provider value={{ phase, setPhase }}>
          <TodoForm setContent={setContent} />
          {phase != 0 && <Excuse content={content} />}
        </PhaseContext.Provider>
      </div>
    </div>
  );
}
