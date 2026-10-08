import { useNavigate } from "react-router-dom";
import ProductImage from "./ProductImage";

const Wallet = ({ product }) => {
  const navigate = useNavigate();

  return (
    <div className="w-full min-w-0 max-w-sm overflow-hidden rounded-xl bg-white shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:rounded-2xl sm:hover:-translate-y-2 sm:hover:shadow-2xl">
      <ProductImage product={product} className="h-44 sm:h-60" />

      <div className="min-w-0 p-3 sm:p-5">
        <h2 className="mb-2 break-words text-base font-bold text-gray-900 sm:text-2xl">{product.name}</h2>
        <p className="mb-3 line-clamp-3 text-xs leading-4 text-gray-500 sm:mb-4 sm:line-clamp-none sm:text-sm sm:leading-6">{product.description}</p>
        <div className="mb-3 text-lg font-bold text-gray-900 sm:mb-5 sm:text-2xl">৳{product.price}</div>

        <button
          type="button"
          onClick={() => navigate("/cod-from", { state: { product } })}
          className="w-full rounded-lg bg-black px-2 py-2.5 text-sm font-semibold text-white transition duration-300 hover:bg-red-600 active:scale-95 sm:rounded-xl sm:px-5 sm:py-3 sm:text-base"
        >
          Order Now
        </button>
      </div>
    </div>
  );
};

export default Wallet;
