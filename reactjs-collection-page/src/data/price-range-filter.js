import { products } from './product';

const findPriceRange = () => {

  let min = products[0].price
  let max = 0

  products.forEach(p => {

    if (p.price < min) min = p.price;
    if (p.price > max) max = p.price;

  });

  return { min, max };
};

export const priceRange = findPriceRange();