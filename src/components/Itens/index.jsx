import { FaCheck, FaTrash } from 'react-icons/fa';
import Operacao from '../Operacao';
import styles from './Itens.module.css';

export default function Itens() {
  return (
    <div className={styles.container_item}>
      <button className={styles.task}>
        <FaCheck className={`${styles.icon_task} ${styles.check}`} />
        <p>AÇUCAR</p>
        <button className={`${styles.icon_task} ${styles.trash}`}>
          <FaTrash className={`${styles.icon_task}`} />
        </button>
      </button>
      <button className={styles.task}>
        <FaCheck className={`${styles.icon_task} ${styles.check}`} />
        <p>AÇUCAR</p>
        <button className={`${styles.icon_task} ${styles.trash}`}>
          <FaTrash className={`${styles.icon_task}`} />
        </button>
      </button>
      <button className={styles.task}>
        <FaCheck className={`${styles.icon_task} ${styles.check}`} />
        <p>AÇUCAR</p>
        <button className={`${styles.icon_task} ${styles.trash}`}>
          <FaTrash className={`${styles.icon_task}`} />
        </button>
      </button>
      <button className={styles.task}>
        <FaCheck className={`${styles.icon_task} ${styles.check}`} />
        <p>AÇUCAR</p>
        <button className={`${styles.icon_task} ${styles.trash}`}>
          <FaTrash className={`${styles.icon_task}`} />
        </button>
      </button>
      <button className={styles.task}>
        <FaCheck className={`${styles.icon_task} ${styles.check}`} />
        <p>AÇUCAR</p>
        <button className={`${styles.icon_task} ${styles.trash}`}>
          <FaTrash className={`${styles.icon_task}`} />
        </button>
      </button>
      <button className={styles.task}>
        <FaCheck className={`${styles.icon_task} ${styles.check}`} />
        <p>AÇUCAR</p>
        <button className={`${styles.icon_task} ${styles.trash}`}>
          <FaTrash className={`${styles.icon_task}`} />
        </button>
      </button>
      <button className={styles.task}>
        <FaCheck className={`${styles.icon_task} ${styles.check}`} />
        <p>AÇUCAR</p>
        <button className={`${styles.icon_task} ${styles.trash}`}>
          <FaTrash className={`${styles.icon_task}`} />
        </button>
      </button>
      <button className={styles.task}>
        <FaCheck className={`${styles.icon_task} ${styles.check}`} />
        <p>AÇUCAR</p>
        <button className={`${styles.icon_task} ${styles.trash}`}>
          <FaTrash className={`${styles.icon_task}`} />
        </button>
      </button>
      <button className={styles.task}>
        <FaCheck className={`${styles.icon_task} ${styles.check}`} />
        <p>AÇUCAR</p>
        <button className={`${styles.icon_task} ${styles.trash}`}>
          <FaTrash className={`${styles.icon_task}`} />
        </button>
      </button>
      <button className={styles.task}>
        <FaCheck className={`${styles.icon_task} ${styles.check}`} />
        <p>AÇUCAR</p>
        <button className={`${styles.icon_task} ${styles.trash}`}>
          <FaTrash className={`${styles.icon_task}`} />
        </button>
      </button>
      <button className={styles.task}>
        <FaCheck className={`${styles.icon_task} ${styles.check}`} />
        <p>AÇUCAR</p>
        <button className={`${styles.icon_task} ${styles.trash}`}>
          <FaTrash className={`${styles.icon_task}`} />
        </button>
      </button>
      <button className={styles.task}>
        <FaCheck className={`${styles.icon_task} ${styles.check}`} />
        <p>AÇUCAR</p>
        <button className={`${styles.icon_task} ${styles.trash}`}>
          <FaTrash className={`${styles.icon_task}`} />
        </button>
      </button>
      <Operacao className={styles.invisivel} />
    </div>
  );
};
