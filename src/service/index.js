import { Lista } from '@/data/dataList';

export let ListaItens = Lista;

export let ShowLista = () => {
  if (localStorage.myLista) {
    ListaItens = JSON.parse(localStorage.getItem('myLista'));
  }
  return ListaItens;
};

export const AdicionarItem = (objeto) => {
  if (localStorage.myLista) {
    ListaItens = JSON.parse(localStorage.getItem('myLista'));
  }

  ListaItens.push(objeto);
  localStorage.myLista = JSON.stringify(ListaItens);
  window.location.reload();
  return ListaItens;
};

export const CriarObjeto = (texto) => {
  const objeto = {
    // crypto.randomUUID() - Cria um hash que será usando como ID do cada objeto criado
    id: crypto.randomUUID(),
    nome: texto.toUpperCase(),
    qtd: null,
    valor: null,
  };

  return AdicionarItem(objeto);
};

export const DeletarTodaLista = () => {
  ListaItens = [];
  localStorage.myLista = JSON.stringify(ListaItens);
  window.location.reload();
};
