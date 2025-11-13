import { useState } from "react";

function Navbar({ onChange }) {

    let [searchInp , setSearchInp] = useState("")

    const handleInp = (e) => {
        setSearchInp(e.target.value)
        onChange && onChange(e.target.value);
        console.log("Search Inp" , e.target.value);
    }

    return (
        // <!-- Navbar -->
        <nav className="navbar fixed top-0 left-0 w-full z-10">

            {/* <!-- Search Nav --> */}
            <div className="navSearchDiv flex flex-row justify-evenly py-5 bg-white">

                <div className="mainLogoDiv flex items-center transition-transform duration-500 hover:cursor-pointer hover:scale-105">
                    <a href="index.html"><i className="navLogo fa-solid fa-utensils text-[25px] text-[#616e61]" ></i></a>
                    <p className="navLogoTxt text-[21px] pl-2 font-semibold">FOOD</p>
                </div>
                <div className="text-center navInp">
                    <input id="searchBox" type="search" onChange={handleInp} value={searchInp} placeholder="Search products..." 
                    className="shadow-md shadow-gray-300 rounded-3xl w-[650px] p-[10px] pl-5 font-sans bg-[#e7e7e7] focus:outline-gray-400" />
                </div>
                <div className="flex flex-row items-center justify-end hover:cursor-pointer">
                    <i className="navCartIcon fa-solid fa-cart-shopping text-[25px] text-[#616e61]"></i>
                </div>

            </div>
            
        </nav>
    )

}

export default Navbar;
