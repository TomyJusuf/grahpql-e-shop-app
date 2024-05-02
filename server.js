import { config } from 'dotenv';
import { ApolloServer } from 'apollo-server';
// import { ApolloServer } from '@apollo/server';
// import { startStandaloneServer } from '@apollo/server/standalone';
import typeDefs from './graphQL/typeDefs.js';
import mongoose from 'mongoose';
import { Query } from './resolvers/Query.js';
import { Product } from './resolvers/Product.js';
import { Category } from './resolvers/Category.js';
import { Mutation } from './resolvers/Mutation.js';
import { productsData, category, reviews } from './graphQL/db.js';
config();

const mongoUrl = process.env.MONGODB_URL;
const server = new ApolloServer({
  typeDefs,
  resolvers: { Query, Product, Category, Mutation },
  context: {
    productsData,
    category,
    reviews,
  },
});
mongoose
  .connect(mongoUrl, { useNewUrlParser: true })
  .then(() => {
    console.log('MongoDB connected successfully');
  })
  .then(() => {
    server.listen().then(({ url }) => {
      console.log(`server runing on port ${url}`);
    });
  });
// const { url } = await startStandaloneServer(server, {
//   listen: { port: 4000 },
// });

// console.log(`🚀  Server ready at: ${url}`);
