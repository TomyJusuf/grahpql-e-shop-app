//# type Category

export const Category = {
  products: ({ categoryId }, { filter }, { productsData }) => {
    let filterProduct = productsData.filter((p) => {
      return p.departmentId === categoryId;
    });

    if (filter && filter.onSale === true) {
      return (filterProduct = filterProduct.filter((p) => {
        return p.onSale === true;
      }));
    }
    return filterProduct;
  },
};
