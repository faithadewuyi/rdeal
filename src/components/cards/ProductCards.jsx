import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ProductCards = ({
  imageSrc,
  productName,
  productDesc,
  productPrice,
  review,
  reviewCount,
  showButton = true,
  showImage = true,
  symbol = true,
  width = "w-[300px] lg:w-[300px] sm:w-[250px]",
  imgWidth = "w-[350px] sm:w-[250px]",
  imgHeight = "h-[250px]",
  cardHeight = "h-auto",
}) => (
  <div
    className={`font-mon flex flex-col bg-white shadow-lg justify-center items-center pt-3 p-2 rounded-2xl aspect-h-1 aspect-w-1 ${width} ${cardHeight} overflow-hidden xl:aspect-h-8 xl:aspect-w-7 relative m-4`}
  >
    {symbol && (
      <span className="material-symbols-outlined text-btn hover:text-btnlight hover:border-btnlight border border-btn rounded-full w-4 h-4 flex items-center justify-center transition-colors duration-300 ease-in-out absolute top-1 right-2">
        favorite
      </span>
    )}
    {showImage && (
      <div className="flex w-full justify-center">
        <img
          src={imageSrc}
          alt={productName}
          className={`${imgWidth} ${imgHeight}`}
        />
      </div>
    )}
    <h2 className="text-base font-bold self-start leading-[18px] pt-2">{productName}</h2>
    <h3 className="text-sm font-medium self-start leading-[18px] pt-2">{productDesc}</h3>
    <div className="flex gap-2 mt-1 mb-2 self-start">
      <p className="text-base leading-[18px] font-bold">{productPrice}</p>
    </div>
    <div className="flex gap-2 self-start">
      <p>{review}</p>
      <p className="text-[10px] text-gray pt-0.5">{reviewCount}</p>
    </div>
    {showButton && (
      <div className="self-start mt-2">
        <Link to="/cartitems" className="bg-btn p-1 rounded-md text-sm hover:bg-btnlight flex items-center gap-1 text-white">
          <span className="material-symbols-outlined text-white hover:text-black">
            shopping_cart
          </span>
          Add To Cart
        </Link>
      </div>
    )}
  </div>
);

ProductCards.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  productName: PropTypes.string.isRequired,
  productDesc: PropTypes.string,
  productPrice: PropTypes.string.isRequired,
  review: PropTypes.string,
  reviewCount: PropTypes.string,
  showButton: PropTypes.bool,
  showImage: PropTypes.bool,
  symbol: PropTypes.bool,
  width: PropTypes.string,
  imgWidth: PropTypes.string,
  imgHeight: PropTypes.string,
  cardHeight: PropTypes.string,
};

export default ProductCards;
