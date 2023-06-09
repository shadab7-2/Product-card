import ProductCard from './Card/card';
import './App.css';

function App() {
  const products = [
    {
      productId: '1',
      productPic: 'https://images.pexels.com/photos/6698234/pexels-photo-6698234.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      productName: 'Shoes',
      Brand: 'Puma',
      productDescription: 'A great pair of shoes for any occasion',
      Price: '7$',
      Rating: 4,
    },
    {
      productId: '2',
      productPic: 'https://files.cdn.printful.com/o/upload/blog-post-img-upload/f0/f0c10a3c1c5d72ccba6e45bcf729a6f0_l',
      productName: 'T-Shirt',
      Brand: 'Nike',
      productDescription: 'A comfortable t-shirt for casual wear',
      Price: '10$',
      Rating: 3,
    },
    {
      productId: '3',
      productPic: 'data:image/jpeg;base64,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',
      productName: 'Jeans',
      Brand: 'Levi\'s',
      productDescription: 'A classic pair of jeans for any outfit',
      Price: '50$',
      Rating: 5,
    },
    {
      productId: '4',
      productPic: 'https://files.cdn.printful.com/o/upload/product-catalog-img/47/47bc948005e8df113b851170072b88ad_l',
      productName: 'Backpack',
      Brand: 'The North Face',
      productDescription: 'A durable backpack for outdoor activities',
      Price: '80$',
      Rating: 4,
    },
    {
      productId: '5',
      productPic: 'data:image/jpeg;base64,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',
      productName: 'Smartwatch',
      Brand: 'Apple',
      productDescription: 'A stylish and functional smartwatch',
      Price: '300$',
      Rating: 5,
    },
  ];

  return (
    <div className="Product-Card">
      {products.map((product) => (
        <ProductCard key={product.productId} {...product} />
      ))}
    </div>
  );
}

export default App;
