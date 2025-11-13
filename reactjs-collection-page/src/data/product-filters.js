import { products as copyProducts } from "./product.js";

export const getVisibleProducts = ( selectedCategories , selectedRating , selectedRange , selectedSorting , searchInp) => {
    let products = copyProducts;
    
    if (
        selectedCategories.length === 0 && !selectedRating &&
        !selectedRange?.isApplied && !selectedSorting &&
        (!searchInp || searchInp.trim() === "")
    ) {
        return copyProducts;
    }

    // Category filter
    if (selectedCategories.length > 0) {

        products = products.filter((product) =>
            selectedCategories.includes(product.category)
        )

    }

    // Rating filter
    if (selectedRating) {
        products = products.filter((product) => product.rating >= selectedRating);
    }
    
    // Price range filter
    if (selectedRange?.isApplied) {

        products = products.filter(product => 
            product.price >= selectedRange.min && product.price <= selectedRange.max
        )

    }

    // Selected Sorting
    if (selectedSorting) {
        if (selectedSorting === "ratLowToHigh") products = [...products].sort( (a , b) => a.rating - b.rating )
        else if (selectedSorting === "ratHighToLow")  products = [...products].sort( (a , b) => b.rating - a.rating )
        else if (selectedSorting === "pricLowToHigh") products = [...products].sort( (a , b) => a.price - b.price )
        else if (selectedSorting === "pricHighToLow") products = [...products].sort( (a , b) => b.price - a.price )
    }

    // Search filter
    if (searchInp && searchInp.trim() !== "") {

        const lowerSearch = searchInp.toLowerCase()
        products = products.filter(
        (product) =>
            product.title.toLowerCase().includes(lowerSearch)
        );
        
    }


    return products;
};