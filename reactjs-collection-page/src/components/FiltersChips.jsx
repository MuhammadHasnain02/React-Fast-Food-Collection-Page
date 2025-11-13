
function FiltersChips({ selectdFilt }) {
  // console.log(selectdFilt);
  return (
    <div className="filtChipsDiv col-span-8 flex items-end font-[Montserrat]">

      <div>
        <p className="font-semibold text-[18px]">Filter By :</p>
        {/* {
          selectdFilt.map((filt , i) => {
            console.log(filt[i]);
          })
        } */}

      </div>

    </div>
  )
}

export default FiltersChips;