import { useState } from "react";

function PriceRange({ min = 0, max = 0, onChange }) {

    const [value, setValue] = useState(max);

    const handleChange = (e) => {
        const newValue = Number(e.target.value);
        setValue(newValue);
        onChange && onChange(newValue);
    };

    return (
        <div className="pricRangCardsDiv text-black px-4 py-5 border-b border-gray-300">

            <h3 className="font-semibold">Pricing Filter</h3>
            <div className="pt-2 rangSlidDiv">
                <input type="range" className="w-full" id="priceSlider" 
                onChange={handleChange} value={value} min={min} max={max} />
            </div>
            <div className="flex justify-between rangSlidTxtDiv">
                <p id="minValue">{min}</p>
                <p id="maxValue">{value}</p>
            </div>

        </div>
        
    )

}

export default PriceRange;
