import { useCallback, useContext } from "react";
import { ProductContext } from "./ProductCard";
import styles from '../styles/styles.module.css'

export interface IProductButtonsProps {
    className?: string;
    classBtnsActive?: string;
    style?: React.CSSProperties
}


export const ProductButtons = (/* { increaseBy, counter }: ProductButtonProps */ { className, style }: IProductButtonsProps) => { // la comenté porque si uso ProductContext no es necesario pasarla como props

    const {  counter, increaseBy, maxCount } = useContext(ProductContext);

   const isMaxReached =  useCallback(
      () => !!maxCount && maxCount === counter,
      [counter, maxCount]
    );

    console.log('ProductButtons.llamada a :',{counter, maxCount} );

    return (
        <div className={`${ styles.buttonsContainer } ${ className }`} style= { style }>
            <button className={styles.buttonMinus} onClick={() => increaseBy(-1)}> - </button>
            <div className={styles.countLabel}> { counter } </div>
            <button className={ `${ styles.buttonAdd } ${ isMaxReached() && styles.disable }`}
                onClick={() => increaseBy(1)}> + </button>
        </div>
    )
};