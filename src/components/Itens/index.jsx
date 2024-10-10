import { FaCheck, FaTrash } from 'react-icons/fa';
import Operacao from '../Operacao';
import styles from './Itens.module.css';

export default function Itens(props) {
  return (
    <div className={styles.container_item}>
      <button onClick={props.acao_click} className={styles.task}>
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
      <Operacao 
        acao_click={props.acao_click}
        ehBotaoClicado={props.ehBotaoClicado}
      />
    </div>
  );
};
