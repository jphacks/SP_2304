"use client";
import { Button, Collapse, IconButton } from "@mui/material";
import { Close } from "@mui/icons-material";
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

  const reset = () =>{
    setPhase(false);
    setContent("");
    setExcuse("");
  }

  // console.log(content);

  return (
    <>
      {phase &&
        <IconButton
          className={main.closeButton}
          onClick={() => (reset())}
        >
          <Close />
        </IconButton>
      }
      <PhaseContext.Provider value={{ phase, setPhase }}>
        <TransitionGroup>
          <TodoForm setRootContent={setContent} setExcuse={setExcuse} />
        </TransitionGroup>
        <Collapse in={phase} className={main.collapse}>
            <>
              {/* <ExcuseContext.Provider value={{ excuse, setExcuse }}> */}
              <Excuse excuse={excuse} />
              {/* </ExcuseContext.Provider> */}
              <Button
                className={main.button}
                onClick={() => {
                  if (excuse !== "") Push(content, excuse);
                  reset();
                }}
                variant="contained"
              >
                納得した！
              </Button>
              <IndulgenceList />
            </>
        </Collapse>
      </PhaseContext.Provider>
    </>
  );
}
