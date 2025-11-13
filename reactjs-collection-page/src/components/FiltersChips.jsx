
function FiltersChips({
  selectedCateg , onRemoveCategory ,
  selectedRating , onRemoveRating ,
  selectedRange , onRemoveRange
}) {

  return (
    <div className="filtChipsDiv col-span-8 flex items-end space-x-2.5 font-[Montserrat]">

      <span className="mr-4">
        <p className="font-semibold text-[18px]">Filter By :</p>
      </span>

      {/* Category Chips */}
      {selectedCateg.map((cat, i) => (
        <span key={i}
          className="flex flex-row items-center text-[15px] bg-gray-200 text-black px-4 py-[6px] rounded-full gap-3 hover:cursor-pointer hover:bg-gray-300 transition">
          
          {cat}
          <button onClick={() => onRemoveCategory(cat)}
            className="flex flex-row justify-center items-center text-red-500 font-bold text-[22px] hover:cursor-pointer">×
          </button>
          
        </span>
      ))}

      {/* Rating Chip */}
      {selectedRating && (
        <span className="bg-yellow-200 text-black px-4 py-[6px] rounded-full text-[15px] flex items-center gap-3 hover:cursor-pointer hover:bg-yellow-300 transition">
          
          {selectedRating}★ & Up
          <button onClick={onRemoveRating} className="text-red-500 font-bold text-[22px] hover:cursor-pointer">
            ×
          </button>

        </span>
      )}

      {/* Price Range Chip */}
      {selectedRange.isApplied && (
        <span className="flex items-center bg-green-200 text-black tracking-wide px-4 py-[6px] rounded-full text-[15px]  gap-3 hover:bg-green-300 transition">
          
          ${selectedRange.min} − ${selectedRange.max}
          <button onClick={onRemoveRange} className="text-red-500 font-bold text-[22px] hover:cursor-pointer">
            ×
          </button>
          
        </span>
      )}
    </div>
  );

}
export default FiltersChips