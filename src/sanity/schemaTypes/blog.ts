import { defineField, defineType } from "sanity";

export const TextSection = defineField({
  name: "TextSection",
  title: "Text Section",
  type: "object",
  fields: [
    defineField({
      name: "content",
      title: "Content",
      type: "array",
      of: [{ type: "block" }],
    }),
  ],
});

export const ImageSection = defineField({
  name: "ImageSection",
  title: "Image Section",
  type: "object",
  fields: [
    defineField({
      name: "image",
      title: "Image",
      type: "image",
    }),
    defineField({
      name: "imageMaxHeight",
      title: "Image Max Height",
      type: "string",
    }),
    defineField({
      name: "meta",
      title: "Meta",
      type: "string",
    }),
    defineField({
      name: "metaMaxWidth",
      title: "Meta Max Width",
      type: "string",
    }),
  ],
});

export const Blog = defineType({
  name: "Blog",
  title: "Blogs",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "string",
    }),
    defineField({
      name: "author",
      title: "Author",
      type: "reference",
      to: [{ type: "Author" }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "categories",
      title: "Categories",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "BlogCategory" }],
        },
      ],
    }),
    defineField({
      name: "sections",
      title: "Sections",
      type: "array",
      of: [
        {
          type: "TextSection",
        },
        {
          type: "ImageSection",
        },
      ],
    }),
  ],
});
