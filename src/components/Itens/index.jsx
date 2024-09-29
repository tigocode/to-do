import Image from 'next/image';
import { FaCheck, FaTrash } from 'react-icons/fa';
import { IoIosAdd } from "react-icons/io";

import styles from './Itens.module.css';

export default function Itens() {
  return (
    <div className={styles.container_item}>
      <li className={styles.task}>
        <FaCheck className={`${styles.icon_task} ${styles.check }`} />
        <p>AÇUCAR</p>
        <FaTrash className={`${styles.icon_task} ${styles.trash}`} />
      </li>
      <div>
        <input type="text" placeholder='0' className={styles.input_task} />
        <input type="text" placeholder='R$' className={styles.input_task} />
        <button className={styles.icon_sum}>
          <IoIosAdd className={styles.icon} />
        </button>
      </div>
    </div>
  );
};
