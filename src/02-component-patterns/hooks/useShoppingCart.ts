import { useState } from "react";
import { IProduct, IProductInCart, IShoppingCart } from "../interfaces/interfaces";
import { products } from "../data/products";

export const useShoppingCart = ()  => {

    const [shoppingCart, setShoppingCart] = useState<IShoppingCart>({});

    const onProductCounterChange = ({ count, product }: { count: number, product: IProduct }) => {

        setShoppingCart(oldShoppingCart => {
            
            if(count === 0){
                const  { [product.id]: toDelete, ...rest } =  oldShoppingCart;
                return rest;
            }


            return { 
                ...oldShoppingCart,
                [product.id]: {...product, count}
            };
        })

        
    };
    return { 
        products,
        shoppingCart,
        onProductCounterChange

    }
}