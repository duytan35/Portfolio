import { sanityFetch } from "@/sanity/lib/live";
import { About } from "@/types";
import { formatData } from "@/utils/format-data";

export const fetchAbout = async (): Promise<About> => {
  const res = await sanityFetch({
    query: `
      *[_type == "About"][0] {
        firstDescription,
        secondDescription,
        avatar {
          asset-> {
            _type,
            url,
          },
        },
        experience[] {
          title,
          company,
          period,
          description
        },
        pdfCVFile {
          asset-> {
            _type,
            url
          },
        }
      }
    `,
  });

  return formatData(res.data);
};
