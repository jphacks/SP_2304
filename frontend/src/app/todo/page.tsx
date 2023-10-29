'use client'
import { useState, createContext } from "react"
import SideBar from "@/components/SideBar"
import styles from './_css/style.module.scss'
import TodoForm from "./_components/TodoForm"

type ContextType = {
  phase: number;
  setPhase: (value: number) => void;
}

export const PhaseContext = createContext<ContextType>({} as ContextType);

export default function Home() {
  const [content, setContent] = useState('');
  const [phase, setPhase] = useState(0);

  // console.log(content);

  return (
    <main>
      <SideBar />

      <PhaseContext.Provider value={{phase, setPhase}}>
        <div className={styles.main}>
          <TodoForm setContent={setContent} />
        </div>
      </PhaseContext.Provider>
    </main>
  );
}
