import Image from 'next/image';
import { FaCheck, FaTrash } from 'react-icons/fa';
import { IoIosAdd } from "react-icons/io";

import styles from './Itens.module.css';

export default function Itens() {
  return (
    <div className={styles.container_item}>
      <button className={styles.task}>
        <FaCheck className={`${styles.icon_task} ${styles.check }`} />
        <p>AÇUCAR</p>
        <FaTrash className={`${styles.icon_task} ${styles.trash}`} />
      </button>
      <button className={styles.task}>
        <FaCheck className={`${styles.icon_task} ${styles.check }`} />
        <p>AÇUCAR</p>
        <FaTrash className={`${styles.icon_task} ${styles.trash}`} />
      </button>
    </div>
  );
};
