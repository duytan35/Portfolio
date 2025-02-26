import { sanityFetch } from "@/sanity/lib/live";

export const fetchBlogDetail = async (slug: string) => {
  const res = await sanityFetch({
    query: `
      *[_type == "Blog" && slug == $slug][0]
    `,
    params: { slug },
  });

  return res.data;
};
