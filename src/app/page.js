'use client'
import { useState, useEffect } from 'react';

import Total from '@/components/Total'
import Task from '@/components/Task'
import Itens from '@/components/Itens';

import { CriarObjeto, DeletarTodaLista, ShowLista, AtualizarItem, FiltraDados } from '@/service';

import styles from "./page.module.css";

export default function Home() {
  const [ehLista, setLista] = useState([]);
  const [ehTextoDigitado, setTextoDigitado] = useState("");
  
  const [ehBotaoClicado, setBotaoClidado] = useState(false);
  const [ehId, setId] = useState(null);

  const [ehFiltroQtd, setFiltroQtd] = useState('');
  const [ehFiltroValor, setFiltroValor] = useState('');

  // Carrega a lista do localStorage quando o componente é montado
  useEffect(() => {
    const lista = ShowLista(); // Pega a lista inicial do localStorage
    setLista(lista); // Atualiza o estado com a lista
  }, []);

  const handleTextoDigitado = (texto) => {
    setTextoDigitado(texto);    
  }

  const criarItemLista = () => {
    const novoObjeto = CriarObjeto(ehTextoDigitado);
    setLista(novoObjeto);
    setTextoDigitado("");
  }

  const excluirItemLista = () => {
    const listaVazia = DeletarTodaLista();
    setLista(listaVazia);
  };

  const abrirSoma = (id) => {
    setId(id);
    const item = FiltraDados(id);
    if (item) {
      setFiltroQtd(item.qtd); // Atualiza o estado com a quantidade do item
      setFiltroValor(item.valor); // Atualiza o estado com o valor do item
    }
    console.log(ehFiltroQtd);
    console.log(ehFiltroValor);
    setBotaoClidado(!ehBotaoClicado);
  };

  const fecharSoma = () => {
    setBotaoClidado(!ehBotaoClicado);
    setId(null); // Reseta o ID ao fechar
    setFiltroQtd(''); // Reseta o filtro
    setFiltroValor(''); // Reseta o filtro
  };

  const atualizarItem = (id, qtd, valor) => {
    const listaAtualizada = AtualizarItem(id, qtd, valor);
    
    setLista(listaAtualizada);
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
          acao_delete={excluirItemLista}
        />
      </div>
      <div className={styles.list_tasks}>
        <h1>LISTAS DE COMPRAS</h1>
        <div className={styles.line}></div>
        <div className={styles.itens}>
          {ehLista.map((item, index) => (
            <Itens
              key={index}
              id={ehId}
              idItem={item.id}
              nome={item.nome}
              qtd={item.qtd}
              valor={item.valor}
              ehAbrirSoma={() => abrirSoma(item.id)}
              ehFecharSoma={() => fecharSoma(item.id)}
              ehBotaoClicado={ehBotaoClicado}
              ehSoma={atualizarItem}
            />
          ))
          }
        </div>
      </div>
    </main>
  );
}
