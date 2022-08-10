import * as C from './App.styles';
import { useState } from 'react';
import { Item } from "./types/Item";
import { ListaItem } from './componentes/ListaItem/index'
import { AddArea } from './componentes/AddArea';

const App = () => {

  const[ lista, setLista ] = useState<Item[]>([
    {id: 1, nome: 'Comprar leite', marcado: false},
    {id: 2, nome: 'Comprar Pão', marcado: true},
  ]);

  //Irá receber o nome da minha tarefa essa função
  //Dentro do parâmetro irei receber o nome da minha tarefa

  const adicionar = (novoNome: string) => {
    //Clono minha lista
    //Para adicionar um item novo no meu clone
    let novaLista = [...lista];
    novaLista.push({
      id: lista.length + 1,
      nome: novoNome,
      marcado: false
    });
    //Atuaizei este clone e setei em uma lista nova
    setLista(novaLista);
  }

  //Excluir

  const excluir = (id: number) => {
    let novaListaExcluir = [...lista];

    console.log(novaListaExcluir.length);
    let remover = novaListaExcluir.splice(id, 1);
    console.log(novaListaExcluir.length);
    alert('Item removido com sucesso');
    setLista(novaListaExcluir);
};
  

  return (
    <C.Container>
      <C.Area>
        <C.Header> Lista de Tarefas </C.Header>

        <AddArea onEnter={adicionar}/>

        {lista.map((frase, index) => (
          <ListaItem key={index} index={index} frase={frase} excluir={excluir} />
        ))}

      </C.Area>
    </C.Container>
  );
}

export default App;