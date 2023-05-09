import { FavoriteButton } from "../FavoriteButtons/FavoriteButton";

export const ProductsItem = ({ product }) => {
  const { title, image } = product;
  return (
    <>
      <div className='product-image--container'>
        <img className='product--image' src={image} alt={title}></img>
        <div className='product-image--favourite-container'>
          <FavoriteButton productId={product.id} />
        </div>
      </div>
      <span className='item-title' title={title}>
        {title}
      </span>
    </>
  );
};