//# type Product

export const Product = {
  category: ({ departmentId }, args, { category }) => {
    return category.find((p) => {
      return p.categoryId === departmentId;
    });
  },
};
