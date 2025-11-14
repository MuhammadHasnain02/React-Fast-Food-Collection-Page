import Checkbox from "./Checkbox";
import { products } from "../data/product";

function CategoryFilter({ selectedCategories, onChangeCategory }) {

  const uniqueCategories = [...new Set(products.map(p => p.category))];

  return (
    <div className="text-black px-4 py-3 border-b border-gray-300">

      <h3 className="font-semibold text-lg py-2">Category Filter</h3>
      {uniqueCategories.map((categ, index) => (
        <Checkbox
          key={index}
          text={categ}
          checked={selectedCategories.includes(categ)}
          onChange={(e) => onChangeCategory(categ, e.target.checked)}
        />
      ))}

    </div>
  );
}

export default CategoryFilter;