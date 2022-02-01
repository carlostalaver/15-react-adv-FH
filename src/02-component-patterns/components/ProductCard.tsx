


import styles from '../styles/styles.module.css'
import { useProduct } from '../hooks/useProducts';
import { createContext } from 'react';
import { IProductCardProps, IProductContextProps } from '../interfaces/interfaces';



export const ProductContext = createContext({} as IProductContextProps);
const { Provider } = ProductContext;


export const ProductCard = ({ product, children }: IProductCardProps) => {

    const { counter, increaseBy } = useProduct();

    return (
        /* Provider recibe un objeto que tendrá toda la informacion que necesitan los hijos, incluye dunciones y de mas */
        <Provider value={{
            counter,
            increaseBy,
            product
        }}>
            <div className={styles.productCard}>
                {children}
            </div>

        </Provider>
    );
};

