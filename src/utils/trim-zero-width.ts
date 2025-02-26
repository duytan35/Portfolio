const ZERO_WIDTH_SPACES_REGEX =
  /([\u200B]+|[\u200C]+|[\u200D]+|[\u200E]+|[\u200F]+|[\uFEFF]+)/g;

export function trimZeroWidth<T>(input: T): T {
  if (typeof input === "string") {
    return input.replace(ZERO_WIDTH_SPACES_REGEX, "") as T;
  } else if (Array.isArray(input)) {
    return input.map(trimZeroWidth) as T;
  } else if (input !== null && typeof input === "object") {
    return Object.fromEntries(
      Object.entries(input).map(([key, value]) => [key, trimZeroWidth(value)])
    ) as T;
  }
  return input;
}
