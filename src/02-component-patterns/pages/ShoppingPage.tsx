import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components";


const product = {
  id: '1',
  title: 'Coffe Mug - Card',
  img: './coffee-mug.png'
}


export const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />

      <div style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap"
      }}>

{/*  Forma 1 de pasar info a los componentes hijos*/
        <ProductCard product={product}>
          <ProductImage />
          <ProductTitle title={'Forma 1'} />
          <ProductButtons />
        </ProductCard> }


{/* FOrma 2 de pasar info a los componentes hijos */}
         <ProductCard product={product}>
            <ProductCard.Image />
            <ProductCard.Title />
            <ProductCard.Buttons  />
        </ProductCard> 
      </div>

    </div>
  );
};
