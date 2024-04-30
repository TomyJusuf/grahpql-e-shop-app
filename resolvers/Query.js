// Main Topic
//# type Query
//3th paramert of context
//destracture object inside paramerts

export const Query = {
  products: (parent, args, { productsData }) => productsData,

  product: (parent, { id }, { productsData }) => {
    return productsData.find((p) => p.productId === id);
  },

  categories: (parent, args, { category }) => category,

  category: (parent, { id }, { category }) => {
    return category.find((c) => c.categoryId === id);
  },
};
