import { buildSchema } from "graphql";

const schema = buildSchema(`
  type Store {
    store: String
  }

  type Product {
    id: ID
    name: String
    description: String
    price: Float
    soldout: Boolean
    stores: [Store]!
  }

  type Query {
    getProduct(id: ID): Product
  }

  input StoreInput {
    store: String
  }

  input ProductInput {
    id: ID
    name: String
    description: String
    price: Float
    soldout: Boolean
    stores: [StoreInput]!
  }

  type Mutation {
    createProduct(input: ProductInput): Product
  }
`);

export default schema;
