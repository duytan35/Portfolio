import { createClient, QueryParams } from "next-sanity";
import { projectId, dataset, apiVersion, token } from "../env";

export const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion,
  token,
  stega: {
    studioUrl: "/admin-studio",
  },
  useCdn: false,
});

export async function sanityClientFetch<const QueryString extends string>({
  query,
  params = {},
  revalidate = 60,
  tags = [],
}: {
  query: QueryString;
  params?: QueryParams;
  revalidate?: number | false;
  tags?: string[];
}) {
  return sanityClient.fetch(query, params, {
    next: {
      revalidate: tags.length ? false : revalidate,
      tags,
    },
  });
}
