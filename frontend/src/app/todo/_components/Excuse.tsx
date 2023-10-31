import { TextField, CircularProgress } from "@mui/material";
import React from "react";

import styles from '../_css/Excuse.module.scss'

// import { ExcuseContext } from "./Main";

type Props = {
  excuse: string;
};

const Excuse = (props: Props) => {
  const { excuse } = props;
  // const { excuse, setExcuse } = useContext(ExcuseContext);


  // if(phase) console.log(data);

    // setGPTExcuse('test');
    // setExcuse('test');

  return (
    <div className={styles.excuseField}>
      <TextField
        InputProps={{
          readOnly: true,
        }}
        defaultValue={excuse}
        multiline
        rows={4}
      />
      {excuse === "" &&
        <div className={styles.progressModal}>
          <CircularProgress
            className={styles.progress}
            color="inherit"
          />
        </div>
      }
    </div>
  );
};

export default Excuse;
