import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components";
import '../styles/custom_styles.css';
import { useShoppingCart } from "../hooks/useShoppingCart";
import { products } from "../data/products";


const product = products[0];

export const ShoppingPage = () => {

    const { onProductCounterChange, shoppingCart } = useShoppingCart();

    return (
        <div>
            <h1>Shopping Store</h1>
            <hr />

            <ProductCard key={product.id}
                product={product}
                onChangeCustom={(e) => onProductCounterChange(e)}
                value={ shoppingCart[product.id]?.count || 0 }
                initialValues= {{
                    count: 4,
                    maxCount: 10
                }}
            >

                {

                    () => (
                        <>
                            <ProductCard.Image activeImgClass="active" />
                            <ProductCard.Title className="text-bold" activeTitleClass="active" />
                            <ProductCard.Buttons />
                        
                        </>
                    )
                }


            </ProductCard>

            <div>
                <code>
                    {
                        JSON.stringify(shoppingCart)
                    }
                </code>
            </div>
        </div>
    );
};
