"use client";

import { AutoAwesome, ConfirmationNumber } from "@mui/icons-material";
import { AppBar, List, ListItemIcon, ListItemButton, Divider } from "@mui/material";
import { useState } from "react";

import SideBar from "@/components/SideBar";

import TLIndulgence from "./_components/TLIndulgence";
import TLTodo from "./_components/TLTodo";
import styles from "./_css/style.module.scss";

export default function Home() {
  const [timelineId, setTimelineId] = useState(0);

  return (
    <main>
      <SideBar />

      <div className="main">
        <AppBar
          className={styles.appBar}
          position="sticky"
          sx={{
            backgroundColor: "white",
            width: "100%",
          }}
        >
          <List>
            <ListItemButton
              onClick={() => {
                setTimelineId(0);
              }}
            >
              <ListItemIcon>
                <AutoAwesome />
              </ListItemIcon>
            </ListItemButton>

            <Divider flexItem orientation="vertical" />

            <ListItemButton
              onClick={() => {
                setTimelineId(1);
              }}
            >
              <ListItemIcon>
                <ConfirmationNumber />
              </ListItemIcon>
            </ListItemButton>
          </List>
        </AppBar>

        {timelineId == 0 && <TLTodo />}
        {timelineId == 1 && <TLIndulgence />}
      </div>
    </main>
  );
}
