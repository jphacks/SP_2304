import React from 'react';
import Link from 'next/link';
// import './css/style.module.scss';
import { Drawer, List, ListItem, ListItemButton, ListItemIcon } from '@mui/material'
import { AddReaction, ImportContacts, Person, RamenDining } from '@mui/icons-material'
import styles from './css/style.module.scss';

const SideBar = () => {
  return (
    <div className={styles.sideBarWrapper}>
      <Drawer
        variant='persistent'
        anchor='left'
        open={true}
      >
        <List
          className={styles.iconList}
        >
          <Link href='/'>
            <ListItem>
              <ListItemIcon>
                <AddReaction />
              </ListItemIcon>
            </ListItem>
          </Link>

          <Link href='/timeline'>
            <ListItem>
              <ListItemIcon>
                <ImportContacts />
              </ListItemIcon>
            </ListItem>
          </Link>
          <Link href='/'>
            <ListItem>
              <ListItemIcon>
                <Person />
              </ListItemIcon>
            </ListItem>
          </Link>
          <Link href='/todo'>
            <ListItem>
              <ListItemIcon>
                <RamenDining />
              </ListItemIcon>
            </ListItem>
          </Link>
        </List>
      </Drawer>
    </div>
  )
}

export default SideBar
