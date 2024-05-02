export const Query = {
  products: (parent, { filter }, { productsData, reviews }) => {
    let filterData = productsData;
    let filterReview = reviews;

    if (filter) {
      const { onSale, avgRating } = filter;

      if (onSale) {
        filterData = filterData.filter((p) => {
          return p.onSale === onSale;
        });
        return filterData;
      }

      if (avgRating !== null && avgRating !== 0) {
        filterReview = filterReview.filter((r) => {
          return r.rating >= avgRating;
        });

        const productIdsWithFilteredReviews = Array.from(
          new Set(filterReview.map((r) => r.productId))
        );

        let filteredProducts = filterData.filter((p) =>
          productIdsWithFilteredReviews.includes(p.productId)
        );

        const productsWithFilteredReviews = filteredProducts.map((p) => {
          const filteredReviews = filterReview.filter(
            (r) => r.productId === p.productId && r.rating >= avgRating
          );

          p.reviews = filteredReviews;

          return p;
        });

        return productsWithFilteredReviews;
      }
    } else {
      return filterData;
    }

    return filterData;
  },

  product: (parent, { id }, { productsData }) => {
    return productsData.find((p) => p.productId === id);
  },

  categories: (parent, args, { category }) => {
    console.log(category);
    return category;
  },

  category: (parent, { id }, { category }) => {
    return category.find((c) => c.categoryId === id);
  },
};
