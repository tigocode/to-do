import { MdAssignmentAdd } from "react-icons/md";
import Itens from '@/components/Itens';

import styles from "./page.module.css";



export default function Home() {
  return (
    <main className={styles.container}>
      <div className={styles.to_do_list}>
        <div>
          <input type="text" className={styles.input_task} />
          <button className={styles.button_add_task}>
            <MdAssignmentAdd className={styles.icon_add} />
          </button>
        </div>
        <ul className={styles.list_tasks}>
          <Itens />
        </ul>
      </div>
    </main>
  );
}
