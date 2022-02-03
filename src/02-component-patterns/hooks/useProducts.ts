import { useEffect, useRef, useState } from "react";
import { IOnChangeArgs, IProduct } from "../interfaces/interfaces";

interface IUseProductArgs {
    product: IProduct;
    onChangeCustom?: (args: IOnChangeArgs) => void;
    value?: number
}

export const useProduct = ( {onChangeCustom, product, value = 0}: IUseProductArgs ) => { // no se usó {} en ( onChangeCustom?: () => void ) xq este es un hook(funcion silvestre) personalizado, no un componente REACT
    const [counter, setCounter] = useState  ( value );

    /* isControlled es para saber si el componente que hace uso de ese hooks es controlado con la funcion  onChangeCustom*/
    const isControlled = useRef(!!onChangeCustom);

    const increaseBy =(value: number) => {

        if(isControlled.current){
            return onChangeCustom!({product, count: value});// Ojo notar el operador de asercion no nulo
        }
        let newValue = Math.max( value + counter, 0);

        setCounter(newValue);

        onChangeCustom && onChangeCustom({ product: product, count: newValue} );
    }

    useEffect(() => {
        setCounter(value);
    },[value])

    return {
        counter,
        increaseBy
    }

};