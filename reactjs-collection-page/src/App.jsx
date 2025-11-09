import { useState } from "react";
import CategoryFilter from "./components/CategoryFilter";

import Products from "./components/Products";
import { getVisibleProducts } from "./data/product-filters";

function App() {

  let [selectedCateg , setSelectedCateg] = useState([])

  let filteredProd = getVisibleProducts(selectedCateg)

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

  return (
    <div>
      <div className="grid grid-cols-12 my-3">
        <div className="col-span-2">
          <CategoryFilter 
            selectedCategories={selectedCateg}
            onChangeCategory={handleCategChange}
          />
        </div>
        <div className="col-span-10">
          <Products products={filteredProd} />
        </div>
      </div>
    </div>
  );
}

export default App;