import { useState } from "react";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import CategoryFilter from "./components/CategoryFilter";
import Rating from "./components/Rating";
import PriceRange from "./components/PriceRange";
import { priceRange } from "./data/price-range-filter";
import {getVisibleProducts} from "./data/product-filters";
import FiltersTab from "./components/FiltersTab";
import Pagination from "./components/Pagination";
import Footer from "./components/Footer";


function App() {

  const [selectedCateg , setSelectedCateg] = useState([])
  const [selectedRating, setSelectedRating] = useState(null);
  const [selectedRange, setSelectedRange] = useState({ min: 0, max: 100, isApplied: false });

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

  }

  // Handle Rating Filter
  const handleRatingFilter = (rat) => {
    setSelectedRating(rat); // null bhi set ho jayega toggle par
  };

  // Handle Rating Filter
  const handleRangeFilter = (value) => {
    setSelectedRange({ ...selectedRange, max: value, isApplied: true });
  }

  const filteredProd = getVisibleProducts( selectedCateg , selectedRating , selectedRange )

  return (

    <div>
      <Navbar />

      <div className="grid grid-cols-12 my-3 mt-26">

        {/* Left Section Main Div */}
        <div className="sticky top-35 col-span-2 border h-130 py-1.5 rounded-xl border-gray-300 bg-white">

          <CategoryFilter selectedCategories={selectedCateg}
          onChangeCategory={handleCategChange}/>

          <PriceRange min={priceRange.min} max={priceRange.max}
          onChange={handleRangeFilter} />
          
          <Rating onFilter={handleRatingFilter} />

        </div>

        {/* Right Section Main Div */}
        <div className="righSecMainDiv col-span-10 mb-2">

          <FiltersTab selectdFilters={[ selectedCateg , selectedRange , selectedRating ]} />
          <hr className="mb-8" />
          <Products products={filteredProd} />
          <Pagination />
          
        </div>
        
      </div>

      <Footer />
    </div>

  );
}

export default App;