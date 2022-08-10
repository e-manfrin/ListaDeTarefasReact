import * as C from './styles';
import { Item } from '../../types/Item';
import { useState } from 'react';


type Props = {
    frase: Item,
    index: number,
    excluir: (index: number) => void
}

export const ListaItem = ({frase, index ,excluir} : Props) => {

    const[marcado, setMarcado] = useState<boolean>(frase.marcado);


    return(
        <C.Container marcado={marcado}>
            <div>
                <input 
                type="checkbox"
                checked={marcado}
                onChange= {e => setMarcado(e.target.checked)}
                />
                <label>{frase.nome}</label>
            </div>
            <button onClick={(e) => excluir(index)}>Excluir</button>
        </C.Container>
    );
}