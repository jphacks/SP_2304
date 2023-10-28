import React from 'react';
// import './css/style.module.scss';
import { AddReaction, ImportContacts, Person, RamenDining } from '@mui/icons-material'
import styles from './css/style.module.scss';

const SideBar = () => {
  return (
    <div className={styles['sideBarWrapper']}>
      <ul className=''>
        <li>
          <AddReaction />
        </li>
        <li>
          <ImportContacts />
        </li>
        <li>
          <Person />
        </li>
        <li>
          <RamenDining />
        </li>
      </ul>
    </div>
  )
}

export default SideBar
