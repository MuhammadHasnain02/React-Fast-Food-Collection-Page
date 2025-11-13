
function SelectSorting() {
  return (
    <div className="sortDrpdwnDiv flex justify-center mr-6">
      
      <select id="sortDropdown" className="bg-white border-[2px] text-[14px] rounded-md w-42 h-11 text-center font-semibold hover:cursor-pointer">
        <option>SELECT SORTING</option>
        <option value="ratLowToHigh">Rating Low to High</option>
        <option value="ratHighToLow">Rating High to Low</option>
        <option value="pricLowToHigh">Price Low to High</option>
        <option value="pricHighToLow">Price High to Low</option>
      </select>

    </div>
  )
}

export default SelectSorting;