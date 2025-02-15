const ProductCard = ({ title, image }) => {
  return (
    <div className='product-card'>
      <img src={image} alt={title} className='product-img' />
      <span>{title}</span>
    </div>
  );
};

export default ProductCard;
