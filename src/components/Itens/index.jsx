import { FaCheck, FaTrash } from 'react-icons/fa';
import Operacao from '../Operacao';
import styles from './Itens.module.css';

export default function Itens(props) {
  return (
    <div className={styles.container_item}>
      <div onClick={props.acao_click} className={styles.task}>
        <FaCheck className={`${styles.icon_task} ${styles.check}`} />
        <p>{props.id}</p>
        <p>{props.nome}</p>
        <p>{props.ehQtd}</p>
        <p>{props.ehValor}</p>
        <button className={`${styles.icon_task} ${styles.trash}`}>
          <FaTrash className={`${styles.icon_task}`} />
        </button>
      </div>
      <Operacao
        id={props.id}
        qtd={props.qtd}
        valor={props.valor}
        ehQtd={props.ehQtd}
        ehValor={props.ehValor}
        acao_click={props.acao_click}
        ehBotaoClicado={props.ehBotaoClicado}
        ehSoma={props.ehSoma}
      />
    </div>
  );
};
