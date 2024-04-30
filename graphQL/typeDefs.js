import { gql } from 'apollo-server';

const typeDefs = gql`
  type Product {
    productName: String!
    productId: ID!
    description: String
    createdAt: String
    expirationDate: String!
    price: Float!
    quantity: Int!
    type: String!
    expirationYear: String!
    departmentId: String!
    category: Category!
    reviews: [Review!]!
  }

  type Category {
    categoryId: ID!
    categoryName: String
    products: [Product!]!
  }

  type Review {
    id: ID!
    date: String!
    title: String!
    comment: String!
    rating: Int!
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
