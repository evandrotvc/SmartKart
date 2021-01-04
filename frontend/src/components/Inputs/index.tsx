import React , {InputHTMLAttributes , useState, useCallback} from 'react'

import {IconBaseProps} from 'react-icons';

import {Container} from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    name: string;
    icon?: React.ComponentType<IconBaseProps>; // recebe o componente como uma propriedade.
    ContentState: [string , React.Dispatch<React.SetStateAction<string>>]
}


const Input: React.FC<InputProps> = ({name ,ContentState: [State , setState],icon : Icon , ...rest }) => {
    const [IsFocused , setIsFocused] = useState(false);
    const [IsFilled , setIsFilled] = useState(false);

    const HandleInputBlur = useCallback(() => {
        setIsFocused(false);
        console.log("a" , !!State)
        setIsFilled(!!State)
        },[State])

    const HandleInputFocus = useCallback(() => {
        setIsFocused(true);
      }, []);

      const HandleContentInput = useCallback((e) => {

        setState(e.target.value)
        console.log("cont" , State);
      }, [State, setState]);

    return (
        <Container isFilled = {IsFilled} IsFocused = {IsFocused}>
            {Icon && <Icon size = {20}/>}
            <input
            onFocus = {HandleInputFocus}
            onBlur = {HandleInputBlur}
            onChange = {( e : any) =>  HandleContentInput(e)}
            placeholder = {name}
            {...rest}
            />            
            
        </Container>
    );
}

export default Input;