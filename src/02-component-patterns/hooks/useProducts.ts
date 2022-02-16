import { useEffect, useState, useRef } from 'react';
import { IInitialValues, IOnChangeArgs, IProduct } from "../interfaces/interfaces";

interface IUseProductArgs {
    product: IProduct;
    onChangeCustom?: (args: IOnChangeArgs) => void;
    value?: number;
    initialValues?: IInitialValues;
}

export const useProduct = ( {onChangeCustom, product, value = 0, initialValues}: IUseProductArgs ) => { // no se usó {} en ( onChangeCustom?: () => void ) xq este es un hook(funcion silvestre) personalizado, no un componente REACT
   
    const [counter, setCounter] = useState<number>( initialValues?.count || value );
    const isMounted = useRef(false);

    console.log('counter ', counter);
    

    const increaseBy =(value: number) => {

        let newValue = Math.max( value + counter, 0);

        if( initialValues?.maxCount ){
            newValue =  Math.min( newValue, initialValues.maxCount);
        }

        setCounter(newValue);

        onChangeCustom && onChangeCustom({ product: product, count: newValue} );
    };

    const reset = () => {
        setCounter( initialValues?.count || value );
    }

    useEffect(() => {
        if( !isMounted.current ) return;
        setCounter(value);
    }, [value])

    // cuando se monte el componente isMounted.current sera true, [] está vacio porq necesito que dispare una unica vez cuando el componente se monte
    useEffect(() => {
        isMounted.current = true;
    }, [])
    

    return {
        counter,
        isMaxCountReached: !!initialValues?.count && initialValues?.maxCount === counter,
        maxCount: initialValues?.maxCount,
        
        increaseBy,
        reset
    }

};