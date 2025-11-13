import FiltersChips from "./FiltersChips";
import ItemPerPage from "./ItemPerPage";
import SelectSorting from "./SelectSorting";

function FiltersTab({ selectdFilters }) {
  console.log(selectdFilters);

  return (
    <div className="TopFiltDiv grid grid-cols-12">

      <FiltersChips selectdFilt={selectdFilters} />

      <div className="dropdownsDiv flex col-span-4 items-end">
        <ItemPerPage />
        <SelectSorting />
      </div>
        
    </div>
  );
}

export default FiltersTab;