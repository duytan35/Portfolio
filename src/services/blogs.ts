import { sanityFetch } from "@/sanity/lib/live";
import { Blog } from "@/types";
import { formatData } from "@/utils/format-data";

export const fetchBlogs = async (): Promise<Blog[]> => {
  const res = await sanityFetch({
    query: `*[_type == "Blog"] {
      title,
      slug,
      description,
      priority,
      image {
        asset-> {
          _type,
          url,
        },
      },
      "author": author->{
        name,
      },
      "categories": categories[]->{
        name,
      },
    }`,
  });

  return formatData(res.data);
};
