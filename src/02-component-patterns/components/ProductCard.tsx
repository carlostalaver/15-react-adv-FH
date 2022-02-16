import styles from '../styles/styles.module.css'
import { useProduct } from '../hooks/useProducts';
import { createContext } from 'react';
import { IInitialValues, IOnChangeArgs, IProduct, IProductCardHandlers, IProductContextProps } from '../interfaces/interfaces';

export const ProductContext = createContext({} as IProductContextProps);
const { Provider } = ProductContext;

export interface IProductCardProps {
    product: IProduct;
    // children?: React.ReactElement | React.ReactElement[];
    children: (args: IProductCardHandlers) => React.ReactElement, // esto es para trabajar con el formik
    className?: string;
    style?: React.CSSProperties;
    onChangeCustom?: (args: IOnChangeArgs) => void;
    value?: number;
    initialValues?: IInitialValues;
}

export const ProductCard = ({ product, children, className, style, onChangeCustom, value, initialValues}: IProductCardProps) => {

    const { counter, increaseBy, maxCount, isMaxCountReached, reset } = useProduct( { product, onChangeCustom, value, initialValues } );

    return (
        /* Provider recibe un objeto que tendrá toda la informacion que necesitan los hijos, incluye dunciones y de mas */
        <Provider value={{
            counter,
            increaseBy,
            product,
            maxCount
        }}>
            <div
                className={`${styles.productCard}  ${className}`}
                style ={ style }>
                { 
                    children({
                        count: counter,
                        isMaxCountReached,
                        maxCount: initialValues?.maxCount,
                        product,
                        reset,
                        increaseBy
                    }) 
                } {/* tengo que llamar a ejecutar la funcion children, ojo que esto es porq estoy trabajando con formik */}
            </div>

        </Provider>
    );
};

