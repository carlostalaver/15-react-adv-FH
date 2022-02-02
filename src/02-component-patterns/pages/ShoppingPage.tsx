import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components";
import '../styles/custom_styles.css';


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

        {/* Forma 1 de pasar info a los componentes hijos*/
        <ProductCard product={product} className="bg-dark text-white ">
          <ProductImage className="custom-image" activeImgClass="active" />
          <ProductTitle title={'Forma 1'} className="text-bold" />
          <ProductButtons className="custom-buttons" />
        </ProductCard>}


        {/* Forma 2 de pasar info a los componentes hijos */}
        <ProductCard product={product}>
          <ProductCard.Image activeImgClass="active" />
          <ProductCard.Title className="text-bold" activeTitleClass="active" />
          <ProductCard.Buttons />
        </ProductCard>

        {/* Forma 3 de pasar info a los componentes hijos */}
        <ProductCard product={product} style={{ backgroundColor:"#70D1F8" }}>
          <ProductCard.Image />
          <ProductCard.Title style={{ fontWeight:'bold' }}/>
          <ProductCard.Buttons style = {{ display: "flex", justifyContent: "end"}} />
        </ProductCard>
      </div>

    </div>
  );
};
