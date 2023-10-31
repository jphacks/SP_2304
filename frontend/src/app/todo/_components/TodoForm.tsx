import { TextField, Button } from "@mui/material";
import React, { useContext } from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";

import styles from "../_css/Main.module.scss";

import ExcuseFetch from "./ExcuseFetch";
import { PhaseContext } from "./Main";

type Props = {
  setExcuse: (excuse: string) => void,
  setRootContent: (content: string) => void;
};

type Inputs = {
  content: string;
};

const TodoForm = (props: Props) => {
  const { setRootContent, setExcuse } = props;
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const validationRules = {
    content: {
      required: {
        message: "概要を入力してください。",
        value: true
      },
    },
  };

  const onSubmit: SubmitHandler<Inputs> = async (data: Inputs) => {
    setRootContent(data.content);
    setPhase(true);
    setExcuse(await ExcuseFetch(data.content));
    // console.log(phase);
  };

  const { phase, setPhase } = useContext(PhaseContext);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.todoFormWrapper}>
        {/* <p className={styles.formText}>やりたいこと</p> */}
        <Controller
          control={control}
          name="content"
          render={({ field }) => (
            <TextField
              {...field}
              className={styles.formContent}
              inputProps={{
                readOnly: phase
              }}
              label="やりたいこと"
              multiline
            />
          )}
          rules={validationRules.content}
        />
        {!phase && (
          <Button className={styles.formButton} type="submit" variant="contained">
            次へ
          </Button>
        )}
      </div>
    </form>
  );
};

export default TodoForm;
