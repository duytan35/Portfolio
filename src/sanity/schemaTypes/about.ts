import { defineField, defineType } from "sanity";

export const About = defineType({
  name: "About",
  title: "About",
  type: "document",
  fields: [
    defineField({
      name: "firstDescription",
      title: "First Description",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "secondDescription",
      title: "Second Description",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "avatar",
      title: "Avatar",
      type: "image",
    }),
    defineField({
      name: "experience",
      title: "Experience",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "title",
              title: "Title",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "company",
              title: "Company",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "period",
              title: "Period",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "description",
              title: "Description",
              type: "array",
              of: [{ type: "block" }],
            }),
          ],
        },
      ],
    }),
    defineField({
      name: "pdfCVFile",
      title: "PDF CV File",
      type: "file",
      options: {
        accept: "application/pdf",
      },
    }),
  ],
});
