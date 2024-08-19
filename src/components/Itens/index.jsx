import Image from 'next/image';
import { FaCheck } from 'react-icons/fa';
import { GoTrash } from 'react-icons/go';
import { IoIosAdd } from "react-icons/io";

import styles from './Itens.module.css';

export default function Itens() {
  return (
    <div className={styles.container_item}>
      <li className={styles.task}>
        <FaCheck />
        <p>AÇUCAR</p>
        <GoTrash />
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
