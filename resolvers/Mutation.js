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
      '-' +
      (new Date().getMonth() + 1) +
      '-' +
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
  deleteCategory: (parent, { id }, { productsData, category }) => {
    category = category.filter((category) => {
      return category.categoryId !== id;
    });
    productsData = productsData.map((product) => {
      if (product.departmentId === id) {
        return {
          ...product,
          departmentId: null,
        };
      } else {
        return product;
      }
    });
    return true;
  },
  deleteProduct: (parent, { id }, { productsData, reviews }) => {
    productsData = productsData
      .filter((p) => {
        return p.productId !== id;
      })
      .map((product) => ({
        ...product,
        reviews: reviews.filter((review) => review.productId !== id),
      }));

    return true;
  },
  updateCategory: (parent, { id, input }, { category }) => {
    const updateIntex = category.findIndex(
      (category) => category.categoryId === id
    );
    if (updateIntex !== -1) {
      category[updateIntex] = {
        ...category[updateIntex], // Keep existing properties
        ...input, // Update with new properties from input
      };
      return category[updateIntex];
    } else {
      throw new Error('Category not found');
    }
  },
  updateProduct: (parent, { id, input }, { productsData }) => {
    const updateIndex = productsData.findIndex(
      (product) => product.productId === id
    );
    if (updateIndex !== -1) {
      productsData[updateIndex] = {
        ...productsData[updateIndex], // Keep existing properties
        ...input, // Update with new properties from input
      };

      return productsData[updateIndex];
    } else {
      throw new Error('Product not found');
    }
  },
  updateReview: (parent, { id, input }, { reviews }) => {
    console.log(id);
    const update = reviews.findIndex((r) => {
      return r.id === id;
    });
    if (update !== -1) {
      reviews[update] = {
        ...reviews[update],
        ...input,
      };
      return reviews[update];
    } else {
      throw new Error('Review id not found');
    }
  },
};
