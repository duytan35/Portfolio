import { SchemaTypeDefinition } from "sanity";
import { Blog, ImageSection, TextSection } from "./blog";
import { Header } from "./header";
import { Footer } from "./footer";
import { BlogCategory } from "./blog-category";
import { Author } from "./author";

export const schemaTypes = [
  Blog,
  Header,
  Footer,
  BlogCategory,
  Author,
  TextSection,
  ImageSection,
];

export const schema: { types: SchemaTypeDefinition[] } = {
  types: schemaTypes,
};
