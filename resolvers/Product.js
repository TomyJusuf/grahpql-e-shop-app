import { category } from '../graphQL/db.js';

export const Product = {
  category: (parent, args, context) => {
    const departmentId = parent.departmentId;
    return category.find((p) => {
      return p.categoryId === departmentId;
    });
  },
};
