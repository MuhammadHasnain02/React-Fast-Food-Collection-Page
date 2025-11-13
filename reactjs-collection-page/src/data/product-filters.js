import { products as copyProducts } from "./product.js";

export const getVisibleProducts = ( selectedCategories , selectedRating , selectedRange) => {
    let products = copyProducts;
    
    if (selectedCategories.length === 0 && !selectedRating && !selectedRange?.isApplied) {
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

    return products;
};