import "./card.css";


export default function ProductCard(props) {
    const { productId, productPic, productName, Brand, productDescription, Price } = props;
  
    return (
      <div className="product-card">
        <img src={productPic} alt={productName} />
        <h2>{productName}</h2>
        <p>{Brand}</p>
        <p>{productDescription}</p>
        <p>{Price}</p>
        <button onClick={() => alert(`Product of id ${productId}, which is ${productName} of brand ${Brand} has price of ${Price} is added to cart, please proceed to pay !!!`)}>
          Add to Cart
        </button>
      </div>
    );
  }
  