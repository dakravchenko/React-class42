export default function ProductsItem({ product }){
    const { title, image } = product;
    return (
      <div className='product-item'>
        <img className='item-image' src={image} alt={title}></img>
        <span className='item-title'>
          {title}
        </span>
      </div>
    );
  };