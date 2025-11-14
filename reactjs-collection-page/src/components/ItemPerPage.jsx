
function ItemPerPage({ onChange }) {

  const handleChange = (e) => {

    const val = Number(e.target.value);
    onChange && onChange(val)
    console.log("Items per page:", val);

  };

  return (
    <div className="pgStDrpdwnDiv flex justify-center mr-2 font-[Montserrat]">

      <p className="font-semibold text-[14px] pr-2 flex items-center">ITEMS PER PAGE</p>
      <select onChange={handleChange} className="bg-white border-[2px] rounded-md w-16 h-11 text-center font-semibold hover:cursor-pointer">
          <option disabled selected>9</option>
          <option value="16">16</option>
          <option value="12">12</option>
          <option value="9" >9</option>
          <option value="6" >6</option>
          <option value="3" >3</option>
      </select>

    </div>
  );
}

export default ItemPerPage;