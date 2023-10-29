import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemButton,
  Checkbox,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

import { IndulgenceTypes } from "@/types/Types";

import styles from "../_css/IndulgenceList.module.scss";

import IndulgenceListFetch from "./IndulgenceListFetch";

const IndulgenceList = () => {
  const [data, setData] = useState<IndulgenceTypes[]>([]);
  const uuid = "template";
  useEffect(() => {
    const fetchIndulgences = async () => {
      const data_ = await IndulgenceListFetch(uuid);
      for (let datum of data_) {
        setData((data) => [...data, datum]);
      }
    };

    fetchIndulgences();
  }, []);

  const handleToggle = (id: string) => {};

  return (
    <List className={styles.list}>
      {data!.map((datum) => {
        const labelId = `indulgenceListLabel-${datum.id}`;
        return (
          <React.Fragment key={uuidv4()}>
            <ListItem>
              <ListItemButton onClick={() => handleToggle(datum.id)} role={undefined}>
                <ListItemIcon>
                  <Checkbox edge="start" />
                </ListItemIcon>

                <ListItemText id={labelId} primary={datum.content} />
              </ListItemButton>
            </ListItem>
          </React.Fragment>
        );
      })}
    </List>
  );
};

export default IndulgenceList;
