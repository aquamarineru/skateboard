const ProductCard = ({ product }) => {
  return (
    <div>
      
       <ul> 
       <li> {product.name} </li>
         {product.description}
         {product.avatar}
        
      </ul> 
      
    </div>
  );
}

export default ProductCard
//background={product.fields}