import { useContext } from "react";
import { ProductContext } from "./ProductCard";
import styles from '../styles/styles.module.css'




export const ProductButtons = (/* { increaseBy, counter }: ProductButtonProps */) => { // la comenté porque si uso ProductContext no es necesario pasarla como props

    const {  counter, increaseBy } = useContext(ProductContext);

    return (

        <div className={styles.buttonsContainer}>
            <button className={styles.buttonMinus} onClick={() => increaseBy(-1)}> - </button>
            <div className={styles.countLabel}> {counter} </div>
            <button className={styles.buttonAdd} onClick={() => increaseBy(1)}> + </button>
        </div>
    )
};