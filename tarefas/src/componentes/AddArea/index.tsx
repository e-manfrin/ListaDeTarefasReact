import * as C from './styles';
import { useState, KeyboardEvent } from 'react';

type Props = {
    onEnter: (novoNome: string) => void
}

export const AddArea = ({ onEnter }: Props) => {

    const[inputText, setInputText] = useState<string> ('');

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
                //Tudo que o usuário digitar ficará armazenado no inputText
                value={inputText}
                //onChange passará um evento e o setInputText 
                //fará a modificação => 
                //O que escrever novo ficará armazenado 
                onChange={e => setInputText (e.target.value)}
                onKeyUp={finalizadoEscrever}
            />
        </C.Container>
    );
}