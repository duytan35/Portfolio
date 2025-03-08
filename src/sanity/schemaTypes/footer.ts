import { defineField, defineType } from "sanity";

export const Footer = defineType({
  name: "Footer",
  title: "Footer",
  type: "document",
  fields: [
    defineField({
      name: "about",
      title: "About",
      type: "array",
      of: [{ type: "block" }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "phone",
      title: "Phone",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "quickLinks",
      title: "Quick Links",
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
    defineField({
      name: "linkdin",
      title: "Linkdin",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "github",
      title: "GitHub",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "facebook",
      title: "Facebook",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
  ],
});
