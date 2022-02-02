import { useContext } from "react";
import { ProductContext } from "./ProductCard";
import styles from '../styles/styles.module.css'

export interface  IProductTitleProps {
    title?: string,
    className?: string,
    activeTitleClass?: string;
    style?: React.CSSProperties
} 


export const ProductTitle = ({ title, className, style} : IProductTitleProps) => {

    const { product } = useContext(ProductContext);
    let titleToShow: string;
    if(title){
        titleToShow = title;
    } else{
        titleToShow = product.title;
    }

    return (
        <span className={`${styles.productDescription} ${ className } `} style= { style }
            > { titleToShow } </span>
    )
};