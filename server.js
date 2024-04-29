import { config } from 'dotenv';
import { ApolloServer } from 'apollo-server';
import typeDefs from './graphQL/typeDefs.js';
import resolvers from './graphQL/resolver.js';
import mongoose from 'mongoose';

config();

const mongoUrl = process.env.MONGODB_URL;
const server = new ApolloServer({
  typeDefs,
  resolvers,
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
