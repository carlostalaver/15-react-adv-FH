import { useEffect, useRef, useState } from "react";
import { IOnChangeArgs, IProduct } from "../interfaces/interfaces";

interface IUseProductArgs {
    product: IProduct;
    onChangeCustom?: (args: IOnChangeArgs) => void;
    value?: number
}

export const useProduct = ( {onChangeCustom, product, value = 0}: IUseProductArgs ) => { // no se usó {} en ( onChangeCustom?: () => void ) xq este es un hook(funcion silvestre) personalizado, no un componente REACT
    const [counter, setCounter] = useState  ( value );

    const increaseBy =(value: number) => {

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