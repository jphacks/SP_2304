import { Close } from "@mui/icons-material";
import { IconButton, Button, TextField } from "@mui/material";
import React, { useState } from "react";

import styles from "../_css/Content.module.scss";

import TagFetch from "./TagFetch";

type Props = {
  count: number;
  mode: string;
  onPhaseChange: (phase: number) => void;
  setRootContent: (content: string) => void;
  setRootTags: (tags: string[]) => void;
};

const Content = (props: Props) => {
  const { mode, count, onPhaseChange, setRootTags, setRootContent } = props;
  // const [subPhase, setSubPhase] = useState(0);
  const [content, setContent] = useState("");
  const phaseChange = (phase: number) => {
    if(phase === 3){
      setRootTags(tags);
      setRootContent(content);
    }
    onPhaseChange(phase);
  };
  const [tags, setTags] = useState<string[]>([]);

  const handleSubPhase = async () => {
    const tags_: any = await TagFetch(content);
    setTags([]);
    for (let key in tags_) {
      setTags((tags) => [...tags, tags_[key]]);
    }
  };

  const face: { [key: string]: string } = {
    benefaction: "🥰",
    stress: "😤",
  };

  return (
    <div className={styles.wrapper}>
      <IconButton
        className={styles.closeButton}
        onClick={() => {
          phaseChange(0);
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
                setContent(e.target.value);
              }}
            />
          </div>
          <div className={styles.tags}>
            <div className={styles.tagsText}>
              <TextField defaultValue={tags[0]} variant="outlined" />
              <TextField defaultValue={tags[1]} variant="outlined" />
              <TextField defaultValue={tags[2]} variant="outlined" />
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
            onClick={() => phaseChange(3)}
            variant="contained"
          >
            記録する
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Content;
