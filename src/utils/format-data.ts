import { toHTML } from "@portabletext/to-html";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function formatData<T>(input: any): T {
  if (Array.isArray(input)) {
    if (input.length > 0 && input[0]?._type === "block") {
      const html = toHTML(input);
      return html
        .replaceAll("<p></p>", "<p>&nbsp;</p>")
        .replaceAll("<code>", "<code class='highlight-code'>") as T;
    }
    return input.map(formatData) as T;
  } else if (typeof input === "object" && input !== null) {
    if (
      input.asset &&
      (input.asset._type === "sanity.imageAsset" ||
        input.asset._type === "sanity.fileAsset")
    ) {
      return input.asset.url;
    }
    return Object.fromEntries(
      Object.entries(input).map(([key, value]) => [key, formatData(value)])
    ) as T;
  }
  return input;
}
