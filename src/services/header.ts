import { sanityFetch } from "@/sanity/lib/live";
import { Header } from "@/types";
import { formatData } from "@/utils/format-data";

export const fetchHeader = async (): Promise<Header> => {
  const res = await sanityFetch({
    query: `
      *[_type == "Header"][0] {
        navLinks[] {
          title,
          slug
        }
      }
    `,
  });

  return formatData(res.data);
};
