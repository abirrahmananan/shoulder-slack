import { useState } from "react";

const ProductImage = ({ product, className }) => {
  const [showBack, setShowBack] = useState(false);

  return (
    <div
      className={`group relative w-full overflow-hidden bg-gray-100 ${className}`}
      onPointerEnter={(event) => {
        if (event.pointerType === "mouse" && product.backImage) setShowBack(true);
      }}
      onPointerLeave={(event) => {
        if (event.pointerType === "mouse") setShowBack(false);
      }}
    >
      <button
        type="button"
        onClick={() => product.backImage && setShowBack((visible) => !visible)}
        aria-label={product.backImage ? `Show ${showBack ? "front" : "back"} of ${product.name}` : product.name}
        aria-pressed={product.backImage ? showBack : undefined}
        className="relative block h-full w-full cursor-pointer"
      >
        <img
          src={product.image}
          alt={`${product.name} front`}
          className={`absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105 ${product.backImage && showBack ? "opacity-0" : "opacity-100"}`}
        />
        {product.backImage && (
          <>
            <img
              src={product.backImage}
              alt={`${product.name} back`}
              className={`absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105 ${showBack ? "opacity-100" : "opacity-0"}`}
            />
            <span className="pointer-events-none absolute bottom-2 right-2 rounded-full bg-black/65 px-2.5 py-1 text-xs font-semibold text-white">
              {showBack ? "Back view" : "Tap to view back"}
            </span>
          </>
        )}
      </button>
    </div>
  );
};

export default ProductImage;
