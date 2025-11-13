import Checkbox from "./Checkbox";
import { categoryTitle } from "../data/category";

function CategoryFilter({ selectedCategories, onChangeCategory }) {

  console.log(selectedCategories);

  return (
    <div className="text-black px-4 py-3 border-b border-gray-300">

      <h3 className="font-semibold text-lg py-2">Category Filter</h3>
      {categoryTitle.map((category, index) => (
        <Checkbox
          key={index}
          text={category}
          checked={selectedCategories.includes(category)}
          onChange={(e) => onChangeCategory(category, e.target.checked)}
        />
      ))}

    </div>
  );
}

export default CategoryFilter;