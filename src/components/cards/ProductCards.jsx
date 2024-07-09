
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
  width = "w-[270px] lg:w-[250px] sm:w-[220px]",
  imgWidth = "w-[200px] sm:w-[160px]",
  imgHeight = "h-[200px]",
}) => (
  <div
  className={`font-poppins  flex flex-col bg-white shadow-lg justify-center items-center pt-3 p-2 rounded-2xl aspect-h-1 aspect-w-1 ${width} overflow-hidden xl:aspect-h-8 xl:aspect-w-7`}
>
  {showImage && (
    <div className="flex w-full justify-between">
      <img
        src={imageSrc}
        alt={productName}
        className={`${imgWidth} ${imgHeight}`}
      />
      {symbol && (
        <span className="material-symbols-outlined text-btn hover:text-btnlight hover:border-btnlight border border-btn rounded-full w-4 h-4 flex items-center justify-center transition-colors duration-300 ease-in-out">
          favorite
        </span>
      )}
    </div>
  )}
  <h2 className="text-base font-bold self-start leading[18px] pt2">{productName}</h2>
  <h3 className="text-sm font-medium self-start leading[18px] pt2">{productDesc}</h3>
  <div className="flex gap-2 mt-1 mb-2 self-start">
    <p className="text-base leading-[18px] font-bold">{productPrice}</p>
  </div>
  <div className="flex gap-2 self-start">
    <p>{review}</p>
    <p className="text-[10px] text-gray pt-0.5">{reviewCount}</p>
  </div>
  {showButton && (
    <div className="self-start mt-2">
      <Link to="/cart" className="bg-btn p-1 rounded-md text-sm hover:bg-btnlight flex items-center gap-1 text-white">
        <span className="material-symbols-outlined text-white hover:text-white">
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
  prevPrice: PropTypes.string,
  tag: PropTypes.string,
  review: PropTypes.string,
  reviewCount: PropTypes.string,
  showButton: PropTypes.bool,
  showImage: PropTypes.bool,
  symbol: PropTypes.bool,
  width: PropTypes.string,
  imgWidth: PropTypes.string,
  imgHeight: PropTypes.string,
};

export default ProductCards;
