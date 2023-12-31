import { Mongo } from "meteor/mongo";
import SimpleSchema from "simpl-schema";
import { schemaOptions, metaSchema } from "../../utils/schema";

export const Products = new Mongo.Collection("products");

Products.schema = new SimpleSchema(
  {
    title: String,
    description: String,
    quantity: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
  },
  schemaOptions
).extend(metaSchema);

Products.attachSchema(Products.schema);
