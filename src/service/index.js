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

export const AtualizarItem = (id, ehQtd, ehValor) => {
  // Atualiza a lista do localStorage
  if(isClient()) {
    localStorage.myLista = JSON.stringify(ListaItens);
  }

  // Percorre a lista para encontrar o item com o ID correspondente
  const itemIndex = ListaItens.findIndex(item => item.id === id);


  if(itemIndex !== -1)  {
    // Atualiza as propriedades de quantidade e valor
    ListaItens[itemIndex].qtd = ehQtd;
    ListaItens[itemIndex].valor = ehValor;

    // Atualiza a lista no localStorage
    if (isClient()) {
      localStorage.myLista = JSON.stringify(ListaItens);
    }
  }

  return ListaItens;
};

export const FiltraDados = (id) => {
  if (isClient() && localStorage.myLista) {
    ListaItens = JSON.parse(localStorage.getItem('myLista'));
  }
  const itemSelecionado = ListaItens.find(item => item.id === id);

  return itemSelecionado;
}
