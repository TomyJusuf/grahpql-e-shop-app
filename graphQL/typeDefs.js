import { gql } from 'apollo-server';

const typeDefs = gql`
  type Product {
    productName: String
    productID: ID!
    description: String
    createdAt: String
    expirationDate: String
    price: Float
    quantity: Int
    type: String
    expirationYear: String
    departmentId: String
    category: Category
  }

  type Category {
    categoryId: ID!
    categoryName: String
    products: [Product!]!
  }

  type Query {
    products: [Product]!
    product(id: ID!): Product
    categories: [Category!]!
    category(id: ID!): Category
  }
  # type Mutation {
  #   addProduct(productInput: ProductInput): Product
  # }
`;

export default typeDefs;
