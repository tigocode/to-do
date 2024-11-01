'use client';
import styles from './Operacao.module.css';
import { IoMdCloseCircle } from "react-icons/io";
import { useState, useEffect } from 'react';

export default function Operacao(props) {
  const [ehQtd, setQtd] = useState(props.qtd || '');  // Inicializa com o valor atual ou vazio
  const [ehValor, setValor] = useState(props.valor || '');  // Inicializa com o valor atual ou vazio

  useEffect(() => {
    setQtd(props.qtd || '');
    setValor(props.valor || '');
  }, [
    props.qtd,
    props.valor
  ]);

  const handleAtualizar = () => {
    props.ehSoma(props.id, ehQtd, ehValor);
  }

  return (
    <div className={props.ehBotaoClicado ? `${styles.container}` : `${styles.container}  ${styles.invisivel}`}>
      <h3>SOMA DOS ITENS</h3>
      <IoMdCloseCircle onClick={props.ehFecharSoma} className={styles.botao_fechar} />
      <div>
        <input
          type="decimal"
          placeholder="0"
          value={ehQtd}
          onChange={(e) => setQtd(e.target.value)}
        />
        <input
          type="decimal"
          placeholder="R$"
          value={ehValor}
          onChange={(e) => setValor(e.target.value)}
        />
        <button onClick={handleAtualizar}>
          <p>SOMAR</p>
        </button>
      </div>
    </div>
  );
}
