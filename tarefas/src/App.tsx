import * as C from './App.styles';
import { Item } from "./types/Item";
import { useState } from 'react';
import { ListaItem } from './componentes/ListaItem/index'
import { AddArea } from './componentes/AddArea';

const App = () => {

  const[ lista, setLista ] = useState<Item[]>([
    {id: 1, nome: 'Comprar leite', marcado: false},
    {id: 2, nome: 'Comprar Pão', marcado: true},
  ]);

  const adicionar = (novoNome: string) => {
    let novaLista = [...lista];
    novaLista.push({
      id: lista.length + 1,
      nome: novoNome,
      marcado: false
    });
    setLista(novaLista);
  }

  return (
    <C.Container>
      <C.Area>
        <C.Header> Lista de Tarefas </C.Header>

        <AddArea onEnter={adicionar}/>

        {lista.map((frase, index) => (
          <ListaItem key={index} frase={frase}/>
        ))}

      </C.Area>
    </C.Container>
  );
}

export default App;