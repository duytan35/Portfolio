import { sanityClientFetch } from "@/sanity/lib/client";
import { Blog } from "@/types";
import { formatData } from "@/utils/format-data";

export const fetchAllBlogSlugs = async (): Promise<Blog[]> => {
  const res = await sanityClientFetch({
    query: `*[_type == "Blog"] {
      slug
    }`,
  });

  return formatData(res);
};
