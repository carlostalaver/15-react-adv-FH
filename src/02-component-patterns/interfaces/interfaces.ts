import { IProductButtonsProps } from "../components/ProductButtons";
import { IProductImageProps } from "../components/ProductImage";
import { IProductTitleProps } from "../components/ProductTitle";
import { IProductCardProps as XYZProductCardProps } from "../components/ProductCard";

export interface IProduct {
    id: string;
    img?: string;
    title: string;
}
export interface IProductContextProps {
    counter: number;
    increaseBy: (value: number) => void;
    product: IProduct;
}
export interface IProductCardHOCProps {
    ({ product, children }: XYZProductCardProps): JSX.Element; // creo el objeto
    Buttons: (Props: IProductButtonsProps) => JSX.Element // al objeto creado le creo la propiedad Buttons
    Image: (Props : IProductImageProps) => JSX.Element;     // al objeto creado le creo la propiedad Image
    Title: (Props : IProductTitleProps) => JSX.Element;     // al objeto creado le creo la propiedad Title
}

export interface IOnChangeArgs {
    product: IProduct;
    count: number
}


export interface IShoppingCart {
    [key: string]: IProductInCart; // [key:string] para idicarle que tendrán POR LO MENOS una propiedad cuyo nombre será de tipo string
}
export interface IProductInCart extends IProduct {
    count: number
}
