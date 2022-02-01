import { ProductCard as ProductCardHOC } from "./ProductCard"; // HOC: componente de orden superior.
import { ProductButtons } from "./ProductButtons";
import { ProductImage } from "./ProductImage";
import { ProductTitle } from "./ProductTitle";
import { IProductCardHOCProps } from "../interfaces/interfaces";
export { ProductButtons } from "./ProductButtons";
export { ProductImage } from "./ProductImage";
export { ProductTitle } from "./ProductTitle";


//#region: agregando nuevas propidades al componente ProductCardHOC, esto lo hago para poder usar este wea :
    /* 
        <ProductCard product={product}>
            <ProductCard.Image />
            <ProductCard.Title />

            <ProductCard.Buttons  />
        </ProductCard>
    

    uso Object.assign para poder asignarle nuevas propiedades al componente ProductCardHOC, si no lo uso ts marcará error
    Object.assign: copia todo lo que está en el segundo argumento y las pega en el 1ero*/
    export  const ProductCard: IProductCardHOCProps = Object.assign(ProductCardHOC, {
        Title: ProductTitle,
        Image: ProductImage,
        Buttons: ProductButtons
    });

    export default ProductCard;
//#endregion


