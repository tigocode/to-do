'use client'
import { useState } from 'react';

import Total from '@/components/Total'
import Task from '@/components/Task'
import Itens from '@/components/Itens';

import { CriarObjeto, DeletarTodaLista, ShowLista } from '@/service';

import styles from "./page.module.css";

export default function Home() {
  const [ehLista, setLista] = useState(ShowLista);
  const [ehObjeto, setObjeto] = useState({})
  const [ehTextoDigitado, setTextoDigitado] = useState("");
  const [ehBotaoClicado, setBotaoClidado] = useState(false);
  const [ehLimparLista, setLimparLista] = useState()


  const handleTextoDigitado = (texto) => {
    setTextoDigitado(texto);    
  }

  const criarItemLista = () => {
    setObjeto(CriarObjeto(ehTextoDigitado));
    setTextoDigitado("");
  }

  const excluirItemLista = () => {
    setLimparLista(DeletarTodaLista());
  }

  const abrirSoma = () => {
    setBotaoClidado(!ehBotaoClicado);
  };

  return (
    <main className={styles.container}>
      <div className={styles.to_do_top}>
        <Total />
        <Task 
          texto={handleTextoDigitado}
          valor={ehTextoDigitado}
          acao_add={criarItemLista}
          acao_delete={DeletarTodaLista}
        />
      </div>
      <div className={styles.list_tasks}>
        <h1>LISTAS DE COMPRAS</h1>
        <div className={styles.line}></div>
        <div className={styles.itens}>
          {ehLista.map((item, index) => (
            <Itens
              key={index}
              nome={item.nome}
              qtd={item.qtd}
              valor={item.valor}
              acao_click={abrirSoma}
              ehBotaoClicado={ehBotaoClicado}
            />
          ))
          }
        </div>
      </div>
    </main>
  );
}
