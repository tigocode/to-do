'use client'
import { useState } from 'react';

import Total from '@/components/Total'
import Task from '@/components/Task'
import Itens from '@/components/Itens';

import { CriarObjeto, ListaItens, AdicionarItem } from '@/service';

import styles from "./page.module.css";

export default function Home() {
  const [ehLista, setLista] = useState();
  const [ehTextoDigitado, setTextoDigitado] = useState("");
  const [ehBotaoClicado, setBotaoClidado] = useState(false);


  const handleTextoDigitado = (texto) => {
    setTextoDigitado(texto);
    setLista(CriarObjeto(texto));
  }
  const criarItemLista = () => {
    AdicionarItem(ehTextoDigitado);
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
        />
      </div>
      <div className={styles.list_tasks}>
        <h1>LISTAS DE COMPRAS</h1>
        <div className={styles.line}></div>
        <div className={styles.itens}>
          {ListaItens.map((item, index) => (
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
