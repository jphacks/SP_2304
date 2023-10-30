import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

import { IndulgenceTypes } from "../../../types/Types";
import styles from "../_css/style.module.scss";

import TLFetch from "./TLFetch";
import { DocumentData } from "firebase/firestore";

const TLIndulgence = () => {
  const [data, setData] = useState<DocumentData[]>([]);
  const uuid = "template";
  useEffect(() => {
    const fetch = async () => {
      const data_ = await TLFetch(uuid, "indulgences");
      for (let datum of data_) {
        setData((data) => [...data, datum]);
      }
      // setData((data) => ([...data, data_]))
    };
    fetch();
  }, []);

  // console.log(data);

  return (
    <div className={styles.TLWrapper}>
      {data!.map((datum) => (
        <React.Fragment key={uuidv4()}>
          <div className={styles.cell}>
            <p className={styles.date}>{datum.time}</p>
            <p className={styles.content}>{datum.content}</p>
            <p className={styles.tags}>{datum.tags.join("/")}</p>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};

export default TLIndulgence;
