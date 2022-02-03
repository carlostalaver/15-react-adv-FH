import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components";
import '../styles/custom_styles.css';
import { useShoppingCart } from "../hooks/useShoppingCart";
import { products } from "../data/products";



export const ShoppingPage = () => {

    const { onProductCounterChange, shoppingCart} = useShoppingCart();

    return (
        <div>
            <h1>Shopping Store</h1>
            <hr />

            <div style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap"
            }}>

                {
                    products.map(product => (
                        <ProductCard key={product.id}
                            product={product}
                            onChangeCustom={(e) => onProductCounterChange(e)}
                            value={ shoppingCart[product.id]?.count || 0 }
                            >

                            <ProductCard.Image activeImgClass="active" />
                            <ProductCard.Title className="text-bold" activeTitleClass="active" />
                            <ProductCard.Buttons />

                        </ProductCard>

                    ))
                }

            </div>

            <div className="shopping-cart">
                {
                    Object.values(shoppingCart).map(prod =>
                        prod.count > 0 &&
                        (<ProductCard
                            key={prod.id}
                            product={prod}
                            className="bg-dark text-white"
                            style={{
                                width: '100px'
                            }}
                            onChangeCustom = { onProductCounterChange }
                            value={ prod.count  }
                        >
                            <ProductImage className="custom-image" />
                            <ProductButtons
                                className="custom-buttons"
                                style={{
                                    display: 'flex',
                                    justifyContent: 'center'
                                }}
                            />
                        </ProductCard>)
                    )
                }

            </div>

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
