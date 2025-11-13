import { useState } from "react";

function ItemPerPage() {

  let [selectedValue , setSelectedValue] = useState(null)

  const handleChange = (e) => {
    
    setSelectedValue(Number(e.target.value));
    console.log("Items per page:", e.target.value);

  };


  return (
    <div className="pgStDrpdwnDiv flex justify-center mr-2 font-[Montserrat]">

      <p className="font-semibold text-[14px] pr-2 flex items-center">ITEMS PER PAGE</p>
      <select onChange={handleChange} className="bg-white border-[2px] rounded-md w-16 h-11 text-center font-semibold hover:cursor-pointer">
          <option value="15">15</option>
          <option value="12">12</option>
          <option value="9" >9</option>
          <option value="6" >6</option>
          <option value="3" >3</option>
      </select>

    </div>
  );
}

export default ItemPerPage;