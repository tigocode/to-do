import Total from '@/components/Total'
import Task from '@/components/Task'
import Itens from '@/components/Itens';

import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.container}>
      <div className={styles.to_do_top}>
        <Total />
        <Task />
      </div>
      <div className={styles.list_tasks}>
        <h1>LISTAS DE COMPRAS</h1>
        <div className={styles.line}></div>
        <div className={styles.itens}>
          <Itens />
        </div>
      </div>
    </main>
  );
}
