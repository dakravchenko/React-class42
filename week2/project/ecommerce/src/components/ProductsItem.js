export default function ProductsItem({ product }){
    const { title, image } = product;
    return (
      <>
        <img src={image} alt={title}></img>
        <span className='item-title'>
          {title}
        </span>
      </>
    );
  };