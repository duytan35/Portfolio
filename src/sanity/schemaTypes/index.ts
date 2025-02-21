import { SchemaTypeDefinition } from "sanity";
import { Blog } from "./blog";

export const schemaTypes = [Blog];

export const schema: { types: SchemaTypeDefinition[] } = {
  types: schemaTypes,
};
