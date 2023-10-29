"use client";

import { AutoAwesome, ConfirmationNumber } from "@mui/icons-material";
import { AppBar, Toolbar, Divider, IconButton } from "@mui/material";
import { useState } from "react";

import styles from "@/app/_css/utils.module.scss";
import SideBar from "@/components/SideBar";

import TLIndulgence from "./_components/TLIndulgence";
import TLTodo from "./_components/TLTodo";

export default function Home() {
  const [timelineId, setTimelineId] = useState(0);

  return (
    <>
      <div className={styles.sideBySide}>
        <SideBar />
        <div>
          <AppBar
            position="sticky"
            sx={{
              backgroundColor: "white",
            }}
          >
            <Toolbar>
              <IconButton
                onClick={() => {
                  setTimelineId(0);
                }}
                size="large"
              >
                <AutoAwesome />
              </IconButton>
              <Divider flexItem orientation="vertical" />
              <IconButton
                onClick={() => {
                  setTimelineId(1);
                }}
                size="large"
              >
                <ConfirmationNumber />
              </IconButton>
            </Toolbar>
          </AppBar>
        </div>
      </div>

      <div>
        {timelineId == 0 && <TLTodo />}
        {timelineId == 1 && <TLIndulgence />}
      </div>
    </>
  );
}
