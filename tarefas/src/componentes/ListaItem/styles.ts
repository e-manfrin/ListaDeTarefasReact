
import styled  from "styled-components";

type ContainerProps = {
    marcado: boolean;
}

export const Container = styled.div(({ marcado }: ContainerProps) => (
    `
        display: flex;
        background-color: #20212C;
        padding: 10px;
        border-radius: 10px;
        margin-bottom: 10px;
        align-items: center;
        justify-content: space-between;

        div {
            display: flex;
            align-items: center;
        }

        input {
            width: 25px;
            height: 25px;
            margin-right: 5px;
        }

        label {
            color: #CCC;
            text-decoration: ${marcado ? 'line-through': 'initial'};
        }

        button {
            width: 10%;
            height: 30px;
            padding: 0 5px;
            border: 1px solid #555;
            border-radius: 5px;
            background-color: #555;
            color: white;
            cursor: pointer;
            margin-left: 100px;
            

        &:hover {
            background-color: pink;
            color: white;
        }
        
    `
));
