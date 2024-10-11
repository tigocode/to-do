import { Lista } from '@/data/dataList';

export const ListaItens = Lista;

export const AdicionarItem = (objeto) => {
  return Lista.push(objeto);
};

export const CriarObjeto = (texto) => {
  const objeto = {
    // crypto.randomUUID() - Cria um hash que será usando como ID do cada objeto criado
    id: crypto.randomUUID(),
    nome: texto,
    qtd: null,
    valor: null,
  };

  return objeto;
};
