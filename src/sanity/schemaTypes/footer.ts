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
  ],
});
