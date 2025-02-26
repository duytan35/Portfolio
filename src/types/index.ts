export interface Blog {
  title: string;
  slug: string;
  description?: string;
  image: string;
  author: {
    name: string;
  };
  categories: {
    title: string;
  }[];
}
