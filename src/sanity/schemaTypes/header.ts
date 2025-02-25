import { defineField, defineType } from "sanity";

export const Header = defineType({
  name: "Header",
  title: "Header",
  type: "document",
  fields: [
    defineField({
      name: "navLinks",
      title: "Nav Links",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "title",
              title: "Title",
              type: "string",
            }),
            defineField({
              name: "slug",
              title: "Slug",
              type: "string",
            }),
          ],
        },
      ],
    }),
  ],
});
