import { useState } from "react";



export const useProduct = () => {
    const [counter, setCounter] = useState(0);

    const increaseBy =(value: number) => {
        setCounter(prev => Math.max( value + prev, 0));
    }


    return {
        counter,
        increaseBy
    }

};