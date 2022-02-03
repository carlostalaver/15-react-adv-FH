import { useState } from "react";
import { IProduct, IProductInCart, IShoppingCart } from "../interfaces/interfaces";
import { products } from "../data/products";

export const useShoppingCart = ()  => {
    
    const [shoppingCart, setShoppingCart] = useState<IShoppingCart>({});

    const onProductCounterChange = ({ count, product }: { count: number, product: IProduct }) => {

        setShoppingCart(oldShoppingCart => {
            
            const  productInCart: IProductInCart  = oldShoppingCart[product.id] || {...product, count: 0};


            if(Math.max(productInCart.count + count, 0) > 0) {
                productInCart.count += count;
                return{
                    ...oldShoppingCart,
                    [product.id]: productInCart
                } 
            }

            //cuando el count sea menor o igual a cero elimino el producto del state
            const { [product.id]: toDelete, ...resto } = oldShoppingCart;
            return { 
                ...resto
            };
        })

        
    };
    return { 
        products,
        shoppingCart,
        onProductCounterChange

    }
}