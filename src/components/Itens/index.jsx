import { FaCheck, FaTrash } from 'react-icons/fa';
import Operacao from '../Operacao';
import styles from './Itens.module.css';

export default function Itens(props) {
  return (
    <div className={styles.container_item}>
      <div onClick={props.ehAbrirSoma} className={styles.task}>
        <FaCheck className={`${styles.icon_task} ${styles.check}`} />
        <p>{props.nome}</p>
        <button className={`${styles.icon_task} ${styles.trash}`}>
          <FaTrash className={`${styles.icon_task}`} />
        </button>
      </div>
      <Operacao
        id={props.id}
        qtd={props.qtd}
        valor={props.valor}
        ehAbrirSoma={props.ehAbrirSoma}
        ehFecharSoma={props.ehFecharSoma}
        ehBotaoClicado={props.ehBotaoClicado}
        ehSoma={props.ehSoma}
      />
    </div>
  );
};
