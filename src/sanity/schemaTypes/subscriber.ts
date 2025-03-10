import { defineField, defineType } from "sanity";

export const Subscriber = defineType({
  name: "Subscriber",
  title: "Subscribers",
  type: "document",
  fields: [
    defineField({
      name: "email",
      title: "Email",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
  ],
});
