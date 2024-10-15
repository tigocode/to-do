import { Lista } from '@/data/dataList';

export let ListaItens = Lista;

const isClient = () => typeof window !== 'undefined';

export let ShowLista = () => {
  if (isClient() && localStorage.myLista) {
    ListaItens = JSON.parse(localStorage.getItem('myLista'));
  }
  return ListaItens;
};

export const AdicionarItem = (objeto) => {
  if (isClient() && localStorage.myLista) {
    ListaItens = JSON.parse(localStorage.getItem('myLista'));
  }

  ListaItens.push(objeto);

  if(isClient()) {
    localStorage.myLista = JSON.stringify(ListaItens);
  }

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
  if(isClient()) {
    localStorage.myLista = JSON.stringify(ListaItens);
  }
  return ListaItens;
};
