import { IProduct } from "../interfaces/interfaces";



const product = {
    id: '1',
    title: 'Coffe Mug - Card',
    img: './coffee-mug.png'
};

const product2 = {
    id: '2',
    title: 'Coffe Mug - meme',
    img: './coffee-mug2.png'
}


export const products: IProduct[] = [product, product2]