import { sanityClient } from "@/sanity/lib/client";
import { defineEnableDraftMode } from "next-sanity/draft-mode";

export const { GET } = defineEnableDraftMode({
  client: sanityClient.withConfig({
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
  }),
});
