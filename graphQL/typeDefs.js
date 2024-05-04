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
    category: Category
    onSale: Boolean!
    reviews: [Review!]!
  }

  type Category {
    categoryId: ID!
    categoryName: String!
    products(filter: ProductsFilterInput): [Product]
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
    category(id: ID!): Category!
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
    price: Float!
    quantity: Int!
    onSale: Boolean!
    type: String!
  }
  input AddReviewInput {
    title: String!
    comment: String!
    rating: Int!
    productId: String
  }
  input UpdateReviewInput {
    title: String!
    comment: String!
    rating: Int!
  }
  type DeleteCategoryPayload {
    success: Boolean!
    category: [Category!]!
    productsData: [Product!]!
  }
  input UpdateCategoryInput {
    categoryName: String!
  }
  input UpdateProductInput {
    productName: String
    description: String
    price: Float
    quantity: Int
    type: String
    departmentId: String
    onSale: Boolean
  }
  type Mutation {
    addCategory(input: AddCategoryInput!): Category!
    addProduct(input: AddProductInput!): Product!
    addReview(input: AddReviewInput!): Review!
    deleteCategory(id: ID!): Boolean!
    deleteProduct(id: ID!): Boolean!
    updateCategory(id: ID!, input: UpdateCategoryInput): Category!
    updateProduct(id: ID!, input: UpdateProductInput): Product!
    updateReview(id: ID!, input: UpdateReviewInput): Review!
  }
`;

export default typeDefs;
