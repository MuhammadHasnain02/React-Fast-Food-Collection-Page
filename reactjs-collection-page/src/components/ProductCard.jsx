function ProductCard({ product }) {

  return (
    <div className={"relative max-w-sm col-span-4 border bg-white border-gray-300 rounded-2xl hover:cursor-pointer"}>

      <img src={product.image} className={"w-full h-60 object-cover"} />

      <div className={"mb-24 w-full bottom-0 max-h-32 space-y-1.5 bg-[#fff] text-black px-3 py-3 rounded-b-2xl"}>
        
        <div className="mt-3">
          <p className={"font-bold text-xl"}>{product.title}</p>
        </div>

        <div>
          <p className={"prodRat text-yellow-400 text-[32px] h-9 flex flex-row gap-1 items-center"}>
            {
              Array(5).fill().map((_, i) => (
                <i key={i}
                  className={`fa-solid fa-star text-[14px] ${i < product.rating ? "text-yellow-400" : "text-gray-300"}`}
                ></i>
              ))
            }
            <span className="text-black text-[15px] flex items-center">({product.rating})</span>
          </p>
        </div>

        <div>
          <p className={"overflow-auto"}>{product.description}</p>
        </div>

        <div className={"absolute w-full left-0 bottom-0 px-5 mb-3 flex justify-between items-center"}>
          <p className={"prodPric text-[20px] font-semibold text-gray-600"}>${product.price}</p>
          <p><i className={"prodCartIcon fa-solid fa-cart-shopping text-gray-600 text-[18px] hover:text-gray-400"}></i></p>
        </div>

      </div>

    </div>
  );
}

export default ProductCard;