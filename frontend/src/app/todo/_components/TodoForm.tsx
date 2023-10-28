import React, { useContext } from 'react'
import styles from '../_css/style.module.scss'
import { TextField, Button } from '@mui/material'
import { useForm, SubmitHandler, Controller } from 'react-hook-form'
import { PhaseContext } from '../page'

type Props = {
  setContent: (content: string) => void;
}

type Inputs = {
  content: string
}

const TodoForm = (props: Props) => {
  const {setContent} = props
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<Inputs>();

  const validationRules = {
    content: {
      required: '概要を入力してください。',
    }
  }

  const onSubmit: SubmitHandler<Inputs> = (data: Inputs) => {
    setContent(data.content);
    setPhase(1);
    // console.log(phase);
  }

  const {phase, setPhase} = useContext(PhaseContext);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.todoFormWrapper}>
        {/* <p className={styles.formText}>やりたいこと</p> */}
        <Controller
          name="content"
          control={control}
          rules={validationRules.content}
          render={({ field }) =>
            <TextField
              {...field}
              multiline
              label='やりたいこと'
              className={styles.formContent}
            />
          }
        />
        {phase == 0 &&
        <Button
          variant='contained'
          type='submit'
          className={styles.formButton}
        >
          次へ
        </Button>
        }
      </div>
    </form>
  )
}

export default TodoForm
