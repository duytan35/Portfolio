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
  priority?: boolean;
  image: string;
  author: {
    name: string;
  };
  categories: BlogCategory[];
  sections: (TextSection | ImageSection | CodeSection)[];
}

export interface BlogCategory {
  name: string;
  slug: string;
}

export interface Header {
  navLinks: NavLink[];
}

export interface NavLink {
  title: string;
  slug: string;
}

export interface Footer {
  about: string;
  email: string;
  phone: string;
  quickLinks: NavLink[];
}
