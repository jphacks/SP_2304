import { AddReaction, ImportContacts, Person, RamenDining } from "@mui/icons-material";
import { Drawer, List, ListItem, ListItemIcon } from "@mui/material";
import Link from "next/link";
import React from "react";
// import './css/style.module.scss';

import styles from "./css/style.module.scss";

const SideBar = () => {
  return (
    <div className={styles.sideBarWrapper}>
      <Drawer anchor="left" open={true} variant="persistent">
        <List className={styles.iconList}>
          <Link href="/">
            <ListItem>
              <ListItemIcon>
                <AddReaction />
              </ListItemIcon>
            </ListItem>
          </Link>

          <Link href="/timeline">
            <ListItem>
              <ListItemIcon>
                <ImportContacts />
              </ListItemIcon>
            </ListItem>
          </Link>
          <Link href="/">
            <ListItem>
              <ListItemIcon>
                <Person />
              </ListItemIcon>
            </ListItem>
          </Link>
          <Link href="/todo">
            <ListItem>
              <ListItemIcon>
                <RamenDining />
              </ListItemIcon>
            </ListItem>
          </Link>
        </List>
      </Drawer>
    </div>
  );
};

export default SideBar;
