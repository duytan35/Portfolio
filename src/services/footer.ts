import { sanityFetch } from "@/sanity/lib/live";
import { Footer } from "@/types";
import { formatData } from "@/utils/format-data";

export const fetchFooter = async (): Promise<Footer> => {
  const res = await sanityFetch({
    query: `
      *[_type == "Footer"][0] {
        about,
        email,
        phone,
        quickLinks[] {
          title,
          slug
        },
        github,
        linkdin,
        facebook
      }
    `,
  });

  return formatData(res.data);
};
