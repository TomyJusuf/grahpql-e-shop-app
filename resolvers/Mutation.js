import { v4 as uuidv4 } from 'uuid';
export const Mutation = {
  addCategory: (parent, { input }, { category }) => {
    const { categoryName } = input;
    const newCategory = {
      categoryName: categoryName,
      categoryId: uuidv4(),
    };
    category.push(newCategory);
    return newCategory;
  },
  addProduct: (parent, { input }, { productsData, category }) => {
    const { productName, description, price, quantity, onSale, type } = input;
    const expirationDate =
      new Date().getFullYear() +
      1 +
      '' +
      new Date().getMonth() +
      '' +
      new Date().getDate();

    const newProduct = {
      productName,
      description,
      price,
      quantity,
      onSale,

      type,
      productId: uuidv4(),
      expirationDate,

      departmentId: () => {
        const filterCategoryName = category.find((c) => {
          return c.categoryName === type;
        });
        return filterCategoryName.categoryId;
      },
    };
    productsData.push(newProduct);
    return newProduct;
  },
  addReview: (parent, { input }, { reviews }) => {
    const newDateReview =
      new Date().getFullYear() +
      '-' +
      (new Date().getMonth() + 1) +
      '-' +
      new Date().getDate();
    const { title, comment, rating, productId } = input;
    const newReview = {
      id: uuidv4(),
      date: newDateReview,
      title,
      comment,
      rating,
      productId,
    };
    reviews.push(newReview);
    return newReview;
  },
};
