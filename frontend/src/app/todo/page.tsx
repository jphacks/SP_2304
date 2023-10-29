import styles from "@/app/_css/utils.module.scss";
import styles2 from "@/app/todo/_css/style.module.scss";
import SideBar from "@/components/SideBar";

import Main from "./_components/Main";


export default function Home() {

  // console.log(content);

  return (
    <div className={styles.sideBySide}>
      <SideBar sideBarId={2} />

      <div className={styles2.todoFormWrapper}>
        <Main />
      </div>
    </div>
  );
}
