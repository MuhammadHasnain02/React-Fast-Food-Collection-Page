import { useState } from "react";
import CategoryFilter from "./components/CategoryFilter";
import Rating from "./components/Rating";

import Products from "./components/Products";
import { products } from "./data/product";

function App() {

  let [selectedCateg , setSelectedCateg] = useState([])
  const [selectedRating, setSelectedRating] = useState(null);

  // Handle Category Change
  let handleCategChange = (category , isChecked) => {
    
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
    
    console.log("Filtering by rating:", rat);
    if (selectedRating === rat) return setSelectedRating(null)
    else return setSelectedRating(rat)
    
  }

  let filteredProd = products.filter(item => {

    if (selectedCateg.length > 0) return selectedCateg.includes(item.category)
    else return true
    
  }).filter(item => {

    if (selectedRating) return item.rating >= selectedRating
    else return true

  })

  return (
    <div className="grid grid-cols-12 my-3">

      <div className="col-span-2 space-y-2">

        <CategoryFilter 
          selectedCategories={selectedCateg}
          onChangeCategory={handleCategChange}
        />
        <Rating onFilter={handleRatingFilter} />

      </div>
      <div className="col-span-10">
        <Products products={filteredProd} />
      </div>

    </div>
  );
}

export default App;