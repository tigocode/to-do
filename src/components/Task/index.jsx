import { FaCheckSquare, FaTrash } from 'react-icons/fa';
import styles from './Task.module.css';

export default function Task() {
  return (
    <div className={styles.container}>
      <input type="text" placeholder="Digite o item de Compra" />
      <div>
        <button className={styles.button_add_task}>
          <FaCheckSquare className={styles.icon_add} />
          <p>ADICIONAR</p>
        </button>
        <button className={styles.button_delete_task}>
          <FaTrash className={styles.icon_delete} />
          <p>LIMPAR</p>
        </button>
      </div>
    </div>
  );
}
