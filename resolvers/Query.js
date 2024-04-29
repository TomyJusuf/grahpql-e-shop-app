import { productsData, category } from '../graphQL/db.js';

export const Query = {
  // data as productsData from db.js
  products: (parent, args, contextValue) => productsData,
  product: (parent, args, contextValue) => {
    const { id } = args;
    return productsData.find((product) => product.productID === id);
  },
  // department as category from db.js
  categories: (parent, args, contextValue) => category,
  category: (parent, args, contextValue) => {
    const { id } = args;
    return category.find((dep) => dep.categoryId === id);
  },
};
