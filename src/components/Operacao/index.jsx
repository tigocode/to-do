import styles from './Operacao.module.css';

export default function Operacao() {
  return (
    <div className={`${styles.container}`}>
      <h3>SOMA DOS ITENS</h3>
      <div>
        <input type="text" placeholder="0" />
        <input type="text" placeholder="R$" />
        <button type="submit">
          <p>SOMAR</p>
        </button>
      </div>
    </div>
  );
}
