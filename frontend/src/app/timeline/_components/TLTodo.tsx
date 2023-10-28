import React, { useState, useEffect } from 'react'
import TLFetch from './TLFetch';
import styles from '../_css/style.module.scss'
import { TodoTypes, IndulgenceTypes } from './types/Types';
import { v4 as uuidv4} from 'uuid'


const TLTodo = () => {
  const [data, setData] = useState<TodoTypes[]>([])
  const uuid = 'template'
  useEffect(() => {
    const fetch = async () => {
      const data_ = await TLFetch(uuid, 'todos');
      for(let datum of data_){
        setData((data) => ([...data, datum]));
      }
      // setData((data) => ([...data, data_]))
    }
    fetch();
  }, []);

  // console.log(data);


  return (
    <div className={styles.TLWrapper}>
      {(data!.map((datum) =>
        <React.Fragment key={uuidv4()}>
          <div className={styles.cell}>
            <p className={styles.date}>{datum.time}</p>
            <p className={styles.content}>{datum.content}</p>
          </div>
        </React.Fragment>
      ))}
    </div>
  )
}

export default TLTodo
