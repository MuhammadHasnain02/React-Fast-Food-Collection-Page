import { useState } from "react";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import CategoryFilter from "./components/CategoryFilter";
import Rating from "./components/Rating";
import PriceRange from "./components/PriceRange";
import { priceRange } from "./data/price-range-filter";
import {getVisibleProducts} from "./data/product-filters";
import Pagination from "./components/Pagination";
import Footer from "./components/Footer";
import SelectSorting from "./components/SelectSorting";
import ItemPerPage from "./components/ItemPerPage";
import FiltersChips from "./components/FiltersChips";


function App() {

  const [ selectedCateg   , setSelectedCateg   ] = useState([])
  const [ selectedRating  , setSelectedRating  ] = useState(null);
  const [ selectedRange   , setSelectedRange   ] = useState({ min: priceRange.min, max: priceRange.max, isApplied: false });
  const [ selectedSorting , setSelectedSorting ] = useState("");
  const [ searchInp , setSearchInp ]  = useState("");
  const [ currentPage , setCurrentPage ] = useState(1);
  const [ itemsPerPage, setItemsPerPage ] = useState(9);


  // Handle Category Change
  const handleCategChange = (category , isChecked) => {
    
    if (isChecked) {
      setSelectedCateg([...selectedCateg , category])
    }
    else {
      setSelectedCateg(
        selectedCateg.filter((categ) => categ !== category)
      )
    }
    
    setCurrentPage(1)
  }

  // Handle Rating Filter
  const handleRatingFilter = (rat) => {
    setSelectedRating(rat); // null bhi set ho jayega toggle par
  };

  // Handle Rating Filter
  const handleRangeFilter = (value) => {
    setSelectedRange({ ...selectedRange, max: value, isApplied: true });
  }

  // Handle Sorting Change
  const handleSortingChange = (value) => {
    setSelectedSorting(value);
  };

  // Handle Search Input
  const handleSearchInp = (value) => {
    setSearchInp(value);
  };

  const filteredProd = getVisibleProducts( selectedCateg , selectedRating , selectedRange , selectedSorting , searchInp )

  // Pagination logic
  const totalItems = filteredProd.length;
  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;

  const currentItems = filteredProd.slice(indexOfFirst, indexOfLast);


  return (

    <div className="flex flex-col h-screen justify-between">
      <Navbar onChange={handleSearchInp} />

      {/* Main All Section Div */}
      <div className="grid grid-cols-12 my-3 mt-28">

        {/* Left Section Div */}
        <div className="sticky top-35 col-span-2 border h-130 py-1.5 rounded-xl border-gray-300 bg-white">

          <CategoryFilter selectedCategories={selectedCateg}
          onChangeCategory={handleCategChange}/>

          <PriceRange min={priceRange.min} max={priceRange.max} 
          onChange={handleRangeFilter} />
          
          <Rating onFilter={handleRatingFilter} />

        </div>

        {/* Right Section Div */}
        <div className="col-span-10 mb-2">

          {/* Top Filters Tab */}
          <div className="grid grid-cols-12">

            {/* Selected Filters Chips */}
            <FiltersChips
              selectedCateg={selectedCateg}
              selectedRating={selectedRating}
              selectedRange={selectedRange}
              onRemoveCategory={(cat) => handleCategChange(cat, false)}
              onRemoveRating={() => setSelectedRating(null)}
              onRemoveRange={() => setSelectedRange({ min: priceRange.min, max: priceRange.max, isApplied: false })}
            />

            {/* Dropdowns Div */}
            <div className="flex col-span-4 items-end">
              <ItemPerPage onChange={setItemsPerPage} />
              <SelectSorting onChange={handleSortingChange} />
            </div>
              
          </div>

          <hr className="mb-8" />
          <Products products={currentItems} />
          <Pagination
            totalItems={totalItems}
            itemsPerPage={itemsPerPage}
            currentPage={currentPage}
            onPageChange={ (pageNum) => setCurrentPage(pageNum) }
          />
          
        </div>
        
      </div>

      <Footer />
    </div>

  );
}

export default App;