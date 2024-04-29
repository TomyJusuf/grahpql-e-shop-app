import { config } from 'dotenv';
import { ApolloServer } from 'apollo-server';
import typeDefs from './graphQL/typeDefs.js';
import mongoose from 'mongoose';
import { Query } from './resolvers/Query.js';
import { Product } from './resolvers/Product.js';
import { Category } from './resolvers/Category.js';

config();

const mongoUrl = process.env.MONGODB_URL;
const server = new ApolloServer({
  typeDefs,
  resolvers: { Query, Product, Category },
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
