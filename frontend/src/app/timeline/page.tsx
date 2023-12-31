"use client";

import { AutoAwesome, ConfirmationNumber } from "@mui/icons-material";
import { AppBar, Toolbar, Divider, IconButton } from "@mui/material";
import { useState } from "react";

import styles from "@/app/_css/utils.module.scss";
import styles2 from "@/app/timeline/_css/style.module.scss";
import SideBar from "@/components/SideBar";

import TLIndulgence from "./_components/TLIndulgence";
import TLTodo from "./_components/TLTodo";

export default function Home() {
  const [timelineId, setTimelineId] = useState(0);

  return (
    <div className={styles.sideBySide}>
      <SideBar sideBarId={1} />
      <div className={styles2.contentWrapper}>
        <AppBar
          position="sticky"
          sx={{
            alignItems: "center",
            backgroundColor: "white",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Toolbar
            className={styles2.appBar}
            sx={{
              padding: "0",
              width: "100%",
            }}
          >
            <IconButton
              className={timelineId == 0 ? styles2.onState : styles2.offState}
              onClick={() => {
                setTimelineId(0);
              }}
              size="large"
              sx={{
                width: "50%",
              }}
            >
              <AutoAwesome />
            </IconButton>
            <Divider flexItem orientation="vertical" />
            <IconButton
              className={timelineId == 1 ? styles2.onState : styles2.offState}
              onClick={() => {
                setTimelineId(1);
              }}
              size="large"
              sx={{
                width: "50%",
              }}
            >
              <ConfirmationNumber />
            </IconButton>
          </Toolbar>
        </AppBar>
        {timelineId == 0 && <TLTodo />}
        {timelineId == 1 && <TLIndulgence />}
      </div>
    </div>
  );
}
