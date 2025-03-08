import { sanityClientFetch } from "@/sanity/lib/client";
import { BlogCategory } from "@/types";
import { formatData } from "@/utils/format-data";

export const fetchAllCategories = async (): Promise<BlogCategory[]> => {
  const res = await sanityClientFetch({
    query: `*[_type == "BlogCategory"] {
      name,
      slug
    }`,
  });

  return formatData(res);
};
