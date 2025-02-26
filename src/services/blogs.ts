import { sanityFetch } from "@/sanity/lib/live";
import { Blog } from "@/types";
import { formatData } from "@/utils/format-data";

export const fetchBlogs = async (): Promise<Blog[]> => {
  const res = await sanityFetch({
    query: `*[_type == "Blog"]`,
  });

  return formatData(res.data);
};
