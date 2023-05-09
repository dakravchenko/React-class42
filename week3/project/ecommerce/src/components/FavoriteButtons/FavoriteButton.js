import React, { useContext } from 'react';
import { HeartSolidButton } from './HeartSolidButton';
import { HeartRegularButton } from './HeartRegularButton';
import { GlobalContext } from '../../context/GlobalState';

export const FavoriteButton = ({ productId }) => {
  const { handleFavoriteId, favoriteIds } = useContext(GlobalContext);
  const isFavorite = favoriteIds.includes(productId);
  return (
    <div
      onClick={e => {
        e.preventDefault();
        handleFavoriteId(productId);
      }}
    >
      {isFavorite ? <HeartSolidButton/> : <HeartRegularButton/>}
    </div>
  );
};