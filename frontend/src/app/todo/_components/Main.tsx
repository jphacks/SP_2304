"use client";
import { Button } from "@mui/material";
import { useState, createContext } from "react";

import styles from "@/app/_css/utils.module.scss";
import styles2 from "@/app/todo/_css/style.module.scss";
import SideBar from "@/components/SideBar";

import Excuse from "./Excuse";
import IndulgenceList from "./IndulgenceList";
import Push from "./Push";
import TodoForm from "./TodoForm";


type ContextType = {
  phase: number;
  setPhase: (value: number) => void;
};

type excuseContextType = {
  excuse: string;
  setExcuse: (str: string) => void;
};

export const PhaseContext = createContext<ContextType>({} as ContextType);
export const ExcuseContext = createContext<excuseContextType>({} as excuseContextType);

export default function Main() {
  const [content, setContent] = useState("");
  const [phase, setPhase] = useState(0);
  const [excuse, setExcuse] = useState("");

  // console.log(content);

  return (
    <PhaseContext.Provider value={{ phase, setPhase }}>
      <TodoForm setContent={setContent} />
      {phase != 0 && (
        <ExcuseContext.Provider value={{ excuse, setExcuse }}>
          <Excuse content={content} />
        </ExcuseContext.Provider>
      )}
      {phase != 0 && content != "" && (
        <>
          <Button
            className={styles.button}
            onClick={() => {
              setPhase(0);
              setContent("");
              if (excuse !== "") Push(content, excuse);
            }}
            variant="contained"
          >
            納得した！
          </Button>
          <IndulgenceList />
        </>
      )}
    </PhaseContext.Provider>
  );
}
