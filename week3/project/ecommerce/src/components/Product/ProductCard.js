import { useParams } from 'react-router-dom';
import { Header } from '../Header/Header';
import { FavoriteButton } from '../FavoriteButtons/FavoriteButton';
import { useFetch } from '../../customHook/useFetch';

export const ProductCard = () => {
  let { id } = useParams();
  const [isLoading, product] = useFetch(
    `https://fakestoreapi.com/products/${id}`,
    id
  );

  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div className='product-details'>
          <Header title={product.title} />
          <div className='product-details--information'>
            <div className='product-details--image'>
              <div className='product-image--container'>
                <img
                  className='product-image'
                  src={product.image}
                  alt={product.title}
                />
                <div className='product-image--favourite-container'>
                  <FavoriteButton productId={product.id} />
                </div>
              </div>
            </div>
            <p className='product-details--description'>
              {product.description}
            </p>
          </div>
        </div>
      )}
    </>
  );
};