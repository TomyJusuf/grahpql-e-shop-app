import { productsData } from '../graphQL/db.js';

export const Category = {
  products: (parent, args, contextValue) => {
    const { categoryId } = parent;
    return productsData.filter((p) => p.departmentId === categoryId);
  },
};
