import { defineField, defineType } from "sanity";

export const BlogCategory = defineType({
  name: "BlogCategory",
  title: "Blog Categories",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
  ],
});
