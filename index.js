import express from "express";
import { graphqlHTTP } from "express-graphql";
import schema from "./schema";

const app = express();

app.get("/", (req, res) => {
  res.send("GraphQL is amazing!");
});

class Product {
  constructor(id, { name, description, price, soldout, stores }) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
    this.soldout = soldout;
    this.stores = stores;
  }
}

const productDatabase = {};

const root = {
  product: () => {
    return {
      id: 285426889,
      name: "widget",
      description: "Some widget to use",
      price: 34.99,
      soldout: false,
      stores: [{ store: "Pasadena" }, { store: "The Big Valuyki" }],
    };
  },
  createProduct: ({ input }) => {
    let id = require("crypto").randomBytes(10).toString("hex");
    productDatabasep[id] = input;

    return new Product(id, input);
  },
};

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);

app.listen(5224, () => console.log("Server running in port localhost:5224/"));
