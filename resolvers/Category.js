//# type Category

export const Category = {
  products: ({ categoryId }, args, { productsData }) => {
    return productsData.filter((p) => p.departmentId === categoryId);
  },
};
