import { SchemaTypeDefinition } from "sanity";
import { Blog, CodeSection, ImageSection, TextSection } from "./blog";
import { Header } from "./header";
import { Footer } from "./footer";
import { BlogCategory } from "./blog-category";
import { Author } from "./author";
import { About } from "./about";
import { Subscriber } from "./subscriber";

export const schemaTypes = [
  Blog,
  Header,
  Footer,
  BlogCategory,
  Author,
  TextSection,
  ImageSection,
  CodeSection,
  About,
  Subscriber,
];

export const schema: { types: SchemaTypeDefinition[] } = {
  types: schemaTypes,
};
