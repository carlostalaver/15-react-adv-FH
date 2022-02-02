import { IProductButtonsProps } from "../components/ProductButtons";
import { IProductImageProps } from "../components/ProductImage";
import { IProductTitleProps } from "../components/ProductTitle";
import { IProps as ProductCardProps } from "../components/ProductCard";

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
    ({ product, children }: ProductCardProps): JSX.Element; // creo el objeto
    Buttons: (Props: IProductButtonsProps) => JSX.Element // al objeto creado le creo la propiedad Buttons
    Image: (Props : IProductImageProps) => JSX.Element;     // al objeto creado le creo la propiedad Image
    Title: (Props : IProductTitleProps) => JSX.Element;     // al objeto creado le creo la propiedad Title
}