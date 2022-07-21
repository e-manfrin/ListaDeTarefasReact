import * as C from './styles';
import { Item } from '../../types/Item';
import { useState } from 'react';


type Props = {
    frase: Item
}

export const ListaItem = ({frase} : Props) => {

    const[marcado, setMarcado] = useState (frase.marcado);

    return(
        <C.Container marcado={marcado}>
            <input 
            type="checkbox"
            checked={marcado}
            onChange= {e => setMarcado(e.target.checked)}
            />
            <label>{frase.nome}</label>
        </C.Container>
    );
}