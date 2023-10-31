"use client";
import { Button, Collapse } from "@mui/material";
import { useState, createContext } from "react";
import { TransitionGroup } from "react-transition-group";

import main from "../_css/Main.module.scss"

import Excuse from "./Excuse";
import IndulgenceList from "./IndulgenceList";
import Push from "./Push";
import TodoForm from "./TodoForm";


type ContextType = {
  phase: boolean;
  setPhase: (value: boolean) => void;
};

type excuseContextType = {
  excuse: string;
  setExcuse: (str: string) => void;
};

export const PhaseContext = createContext<ContextType>({} as ContextType);
export const ExcuseContext = createContext<excuseContextType>({} as excuseContextType);

export default function Main() {
  const [content, setContent] = useState("");
  const [phase, setPhase] = useState(false);
  const [excuse, setExcuse] = useState("");

  // console.log(content);

  return (
    <PhaseContext.Provider value={{ phase, setPhase }}>
      <TransitionGroup>
        <TodoForm setContent={setContent} />

        <Collapse in={phase}>
          <ExcuseContext.Provider value={{ excuse, setExcuse }}>
            <Excuse content={content} />
          </ExcuseContext.Provider>
          <Button
            className={main.button}
            onClick={() => {
              setPhase(false);
              setContent("");
              if (excuse !== "") Push(content, excuse);
            }}
            variant="contained"
          >
            納得した！
          </Button>
          <IndulgenceList />
        </Collapse>
      </TransitionGroup>
    </PhaseContext.Provider>
  );
}
