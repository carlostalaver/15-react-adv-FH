import styles from '../styles/styles.module.css'
import { useProduct } from '../hooks/useProducts';
import { createContext } from 'react';
import { IOnChangeArgs, IProduct, IProductContextProps } from '../interfaces/interfaces';

export const ProductContext = createContext({} as IProductContextProps);
const { Provider } = ProductContext;

export interface IProductCardProps {
    product: IProduct;
    children?: React.ReactElement | React.ReactElement[];
    className?: string;
    style?: React.CSSProperties;
    onChangeCustom?: (args: IOnChangeArgs) => void;
    value?: number;
}

export const ProductCard = ({ product, children, className, style, onChangeCustom, value}: IProductCardProps) => {

    const { counter, increaseBy } = useProduct( { product, onChangeCustom, value } );

    return (
        /* Provider recibe un objeto que tendrá toda la informacion que necesitan los hijos, incluye dunciones y de mas */
        <Provider value={{
            counter,
            increaseBy,
            product
        }}>
            <div
                className={`${styles.productCard}  ${className}`}
                style ={ style }>
                {children}
            </div>

        </Provider>
    );
};

