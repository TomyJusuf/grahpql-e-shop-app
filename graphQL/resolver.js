// Resolvers define how to fetch the types defined in your schema.
import { productsData, category } from './db.js';

const resolvers = {
  Query: {
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
  },
  Category: {
    products: (parent, args, contextValue) => {
      const { categoryId } = parent;
      return productsData.filter((p) => p.departmentId === categoryId);
    },
  },

  Product: {
    category: (parent, args, content) => {
      const departmentId = parent.departmentId;
      return category.find((p) => {
        return p.categoryId === departmentId;
      });
    },
  },
};

export default resolvers;
