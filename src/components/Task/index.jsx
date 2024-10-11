import { FaCheckSquare, FaTrash } from 'react-icons/fa';
import styles from './Task.module.css';

export default function Task(props) {
  return (
    <div className={styles.container}>
      <input
        type="text"
        value={props.valor}
        onChange={(event) => props.texto(event.target.value)}
        placeholder="Digite o item de Compra"
      />
      <div>
        <button onClick={props.acao_add} className={styles.button_add_task}>
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
