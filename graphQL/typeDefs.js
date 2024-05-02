import { gql } from 'apollo-server';
// import { gql } from '@apollo/server';
// import { ApolloServer } from '@apollo/server';
// import { startStandaloneServer } from '@apollo/server/standalone';
const typeDefs = gql`
  type Product {
    productName: String
    productId: ID!
    description: String
    expirationDate: String!
    price: Float!
    quantity: Int!
    type: String!
    departmentId: String!
    category: Category!
    onSale: Boolean!
    reviews: [Review!]!
  }

  type Category {
    categoryId: ID!
    categoryName: String
    products(filter: ProductsFilterInput): [Product!]!
  }

  type Review {
    id: ID!
    date: String
    title: String!
    comment: String!
    rating: Int!
  }
  type Query {
    products(filter: ProductsFilterInput): [Product]!
    product(id: ID!): Product
    categories: [Category!]!
    category(id: ID!): Category
  }
  input ProductsFilterInput {
    onSale: Boolean
    avgRating: Int
  }
  input AddCategoryInput {
    categoryName: String
  }
  input AddProductInput {
    productName: String!
    description: String
    price: Int!
    quantity: Int!
    onSale: Boolean!
    type: String
  }
  input AddReviewInput {
    title: String!
    comment: String!
    rating: Int!
    productId: String
  }
  type Mutation {
    addCategory(input: AddCategoryInput!): Category!
    addProduct(input: AddProductInput!): Product!
    addReview(input: AddReviewInput!): Review!
  }
`;

export default typeDefs;
