import { useState } from "react";

function Rating({ onFilter }) {

  const [selectedRat, setSelectedRat] = useState(null);
  const ratingArr = [5, 4, 3, 2, 1];

  const handleClick = (rat) => {
    setSelectedRat(rat);
    onFilter && onFilter(rat);
  };

  return (
    <div className="border bg-white border-gray-200 rounded-lg shadow-lg px-5 py-4">

      {ratingArr.map((rat , i) => (

        <div key={i} className="h-8 flex flex-row cursor-pointer items-center space-x-0.5"
          onClick={() => handleClick(rat)}>

          {Array(5).fill().map((_, i) => (
            <i key={i}
              className={`
                fa-solid fa-star text-[14px] pr-5 
                ${i < rat ? "text-yellow-400" : "text-gray-300"}
                ${rat === selectedRat ? "!text-[#e85151]" : ""}
            `}></i>
          ))}

          <p className="flex items-end font-medium pl-1 text-gray-500">
            {rat === 5 ? "5.0" : rat.toFixed(1) + "+"}
          </p>
          
        </div>

      ))}
      
    </div>
  );
}

export default Rating;
