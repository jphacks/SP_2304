import { TextField, Button } from "@mui/material";
import React, { useContext } from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";

import styles from "../_css/style.module.scss";
import { PhaseContext } from "../page";

type Props = {
  setContent: (content: string) => void;
};

type Inputs = {
  content: string;
};

const TodoForm = (props: Props) => {
  const { setContent } = props;
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const validationRules = {
    content: {
      required: "概要を入力してください。",
    },
  };

  const onSubmit: SubmitHandler<Inputs> = (data: Inputs) => {
    setContent(data.content);
    setPhase(1);
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
            <TextField {...field} className={styles.formContent} label="やりたいこと" multiline />
          )}
          rules={validationRules.content}
        />
        {phase == 0 && (
          <Button className={styles.formButton} type="submit" variant="contained">
            次へ
          </Button>
        )}
      </div>
    </form>
  );
};

export default TodoForm;
