const expirationDate =
  new Date().getFullYear() +
  1 +
  '' +
  new Date().getMonth() +
  '' +
  new Date().getDate();

export const productsData = [
  {
    productName: 'Chocolate & berry',
    productID: 'CH001',
    expirationDate: expirationDate,
    price: 2.5,
    quantity: 100,

    type: 'CHOCOLATE',
    departmentId: 'sw0002',
  },
  {
    productName: 'Banana',
    productID: 'BA002',
    expirationDate: expirationDate,
    price: 0.5,
    quantity: 200,

    type: 'TROPICAL_FRUIT',
    departmentId: 'fr004',
  },
  {
    productName: 'Tomato',
    productID: 'TO003',
    expirationDate: expirationDate,
    price: 1,
    quantity: 150,

    type: 'FRUIT_VEGETABLES',
    departmentId: 'vg0001',
  },
  {
    productName: 'Chips & GO',
    productID: 'CH004',
    expirationDate: expirationDate,
    price: 1.75,
    quantity: 120,

    type: 'SALT_BAKERY',
    departmentId: 'br0006',
  },
  {
    productName: 'COCA COLA',
    productID: 'DR005',
    type: 'NONALCOHOL',
    expirationDate: expirationDate,
    price: 3,
    quantity: 80,

    departmentId: 'dr0005',
  },
  {
    productName: 'Salamon',
    productID: 'SL006',
    type: 'Fishes',
    expirationDate: expirationDate,
    price: 3,
    quantity: 80,
    departmentId: 'fs0003',
  },
];

export const category = [
  {
    categoryId: 'vg0001',
    categoryName: 'Vegetables',
  },
  {
    categoryId: 'sw0002',
    categoryName: 'Sweets',
  },
  {
    categoryId: 'fs0003',
    categoryName: 'Fishes',
  },
  {
    categoryId: 'fr004',
    categoryName: 'Fruits',
  },
  {
    categoryId: 'dr0005',
    categoryName: 'Drinks',
  },
  {
    categoryId: 'br0006',
    categoryName: 'Bakery',
  },
];
