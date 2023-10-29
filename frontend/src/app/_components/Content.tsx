import { Close } from "@mui/icons-material";
import { IconButton, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import TagFetch from "./TagFetch";
import styles from "../_css/Content.module.scss";

type Props = {
  count: number;
  mode: string;
  onPhaseChange: (phase: number, mode: string, count: number, content: string, tags: string[]) => void;
};

const Content = (props: Props) => {
  const { mode, count, onPhaseChange } = props;
  const [subPhase, setSubPhase] = useState(0);
  const [dbIndulgenceContent, setDBIndulgenceContent] = useState("");
  const phaseChange = (phase: number, mode: string, count: number) => {
    onPhaseChange(phase, mode, count, dbIndulgenceContent, tags);
  };
  const [tags, setTags] = useState<string[]>([]);

  const handleSubPhase = async () => {
    const tags_: any = await TagFetch(dbIndulgenceContent);
    for(let key in tags_){
      setTags((tags) => [...tags, tags_[key]]);
    }
  }

  const face: { [key: string]: string } = {
    benefaction: "🥰",
    stress: "😤",
  };

  return (
    <div className={styles.wrapper}>
      <IconButton
        className={styles.closeButton}
        onClick={() => {
          phaseChange(0, "None", 0);
        }}
      >
        <Close />
      </IconButton>
      <div className={styles.contentWrapper}>
        <div className={styles.contentForm}>
          <div>
            <p>
              {count}
              {face[mode]}
            </p>
            <TextField
              id="indulgenceContent"
              label="概要"
              multiline
              onChange={(e) => {
                setDBIndulgenceContent(e.target.value);
              }}
            />
          </div>
          <div className={styles.tags}>
            <div className={styles.tagsText}>
              <TextField
                variant="outlined"
                defaultValue={tags[0]}
              />
              <TextField
                variant="outlined"
                defaultValue={tags[1]}
              />
              <TextField
                variant="outlined"
                defaultValue={tags[2]}
              />
            </div>
            <Button
              className={styles.text}
              onClick={() => {
                handleSubPhase();
              }}
              variant="contained"
            >
              タグを検出
            </Button>
          </div>

          <Button
            variant="contained"
            onClick={() => onPhaseChange(3, "None", count, dbIndulgenceContent, tags)}
          >記録する</Button>
        </div>
      </div>
    </div>
  );
};

export default Content;
