import styles from './Operacao.module.css';
import { IoMdCloseCircle } from "react-icons/io";

export default function Operacao(props) {
  return (
    <div className={props.ehBotaoClicado ? `${styles.container}` : `${styles.container}  ${styles.invisivel}`}>
      <h3>SOMA DOS ITENS</h3>
      <IoMdCloseCircle onClick={props.acao_click} className={styles.botao_fechar} />
      <div>
        <input type="text" placeholder="0" value={props.qtd} />
        <input type="text" placeholder="R$" value={props.valor} />
        <button onClick={props.acao_click}>
          <p>SOMAR</p>
        </button>
      </div>
    </div>
  );
}
