import { SchemaTypeDefinition } from "sanity";
import { Blog, CodeSection, ImageSection, TextSection } from "./blog";
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
  CodeSection,
];

export const schema: { types: SchemaTypeDefinition[] } = {
  types: schemaTypes,
};
