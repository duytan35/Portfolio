import { sanityFetch } from "@/sanity/lib/live";
import { Blog } from "@/types";
import { formatData } from "@/utils/format-data";

export const fetchBlogDetail = async (slug: string): Promise<Blog> => {
  const res = await sanityFetch({
    query: `
      *[_type == "Blog" && slug == $slug][0] {
        ...,
        author-> {
          name,
        },
        categories[]-> {
          name,
        },
        image {
          asset-> {
            _type,
            url,
          },
        },
        sections[] {
          ...,
          _type == "ImageSection" => {
            ...,
            image {
              asset-> {
                _type,
                url,
              },
            },
          }
        }
      }
    `,
    params: { slug },
  });

  return formatData(res.data);
};
