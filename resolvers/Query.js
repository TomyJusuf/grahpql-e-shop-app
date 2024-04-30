//# type Query

export const Query = {
  products: (parent, args, contextValue) => productsData,
  product: (parent, { id }, { productsData }) => {
    return productsData.find((product) => product.productID === id);
  },

  categories: (parent, args, { category }) => category,
  category: (parent, { id }, { category }) => {
    return category.find((dep) => dep.categoryId === id);
  },
};
