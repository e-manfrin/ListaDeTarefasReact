import { useState, KeyboardEvent } from 'react';
import * as C from './styles';

type Props = {
    onEnter: (novoNome: string) => void
}

export const AddArea = ({ onEnter }: Props) => {

    const[inputText, setInputText] = useState ('');

    const finalizadoEscrever = (e: KeyboardEvent) => {
        if(e.code === 'Enter' && inputText !== '') {
            onEnter(inputText);
            setInputText('');
        }
        /*console.log(e.code)*/
    }

    return(
        <C.Container>
            <div className='image'>➕</div>
            <input
                type="text"
                placeholder='Adicione uma tarefa'
                value={inputText}
                onChange={e => setInputText (e.target.value)}
                onKeyUp={finalizadoEscrever}
            />
        </C.Container>
    );
}