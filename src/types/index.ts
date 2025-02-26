export interface TextSection {
  _type: "TextSection";
  content: string;
}

export interface ImageSection {
  _type: "ImageSection";
  image: string;
  imageMaxHeight: string;
  meta?: string;
  metaMaxWidth?: string;
}

export interface CodeSection {
  _type: "CodeSection";
  code: {
    code: string;
    filename?: string;
    lang: string;
    language: string;
  };
}

export interface Blog {
  title: string;
  slug: string;
  description?: string;
  image: string;
  author: {
    name: string;
  };
  categories: {
    name: string;
  }[];
  sections: (TextSection | ImageSection | CodeSection)[];
}
