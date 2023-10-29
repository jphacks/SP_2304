import { AddReaction, ImportContacts, Person, RamenDining } from "@mui/icons-material";
import { Drawer, List, ListItem, ListItemIcon } from "@mui/material";
import Link from "next/link";
import React from "react";
// import './css/style.module.scss';

import styles from "./css/style.module.scss";

type Props = {
  sideBarId: number;
};

const SideBar = (props: Props) => {
  const { sideBarId } = props;

  return (
    <div className={styles.sideBarWrapper}>
      <Drawer anchor="left" open={true} variant="persistent">
        <List className={styles.iconList}>
          <Link href="/">
            <ListItem className={sideBarId == 0 ? styles.onState : styles.offState}>
              <ListItemIcon>
                <AddReaction className={styles.itemIcon} />
              </ListItemIcon>
            </ListItem>
          </Link>

          <Link href="/timeline">
            <ListItem className={sideBarId == 1 ? styles.onState : styles.offState}>
              <ListItemIcon>
                <ImportContacts className={styles.itemIcon} />
              </ListItemIcon>
            </ListItem>
          </Link>
          <Link href="/">
            <ListItem>
              <ListItemIcon>
                <Person className={styles.itemIcon} />
              </ListItemIcon>
            </ListItem>
          </Link>
          <Link href="/todo">
            <ListItem className={sideBarId == 2 ? styles.onState : styles.offState}>
              <ListItemIcon>
                <RamenDining className={styles.itemIcon} />
              </ListItemIcon>
            </ListItem>
          </Link>
        </List>
      </Drawer>
    </div>
  );
};

export default SideBar;
