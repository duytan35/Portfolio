"use client";

import { useMemo, useState } from "react";
import lunr from "lunr";
import Image from "next/image";
import Link from "next/link";

interface SearchProps {
  blogs: { title: string; description?: string; image: string; slug: string }[];
}

export default function Search({ blogs }: SearchProps) {
  const [search, setSearch] = useState("");

  const index = useMemo(() => {
    return lunr(function () {
      this.ref("title");
      this.field("title", { boost: 10 });
      this.field("description", { boost: 5 });

      blogs.forEach((blog) => {
        this.add(blog);
      });
    });
  }, [blogs]);

  const results = useMemo(() => {
    if (!search) return [];

    return index
      .search(search)
      .slice(0, 4)
      .map((result) => blogs.find((blog) => blog.title === result.ref));
  }, [search, index, blogs]);

  return (
    <div className="w-[200px] flex items-center gap-5 relative">
      <div className="relative bg-[#F4F4F5] flex-1 rounded-[5px]">
        <input
          className="p-[8px_32px_8px_16px] bg-transparent max-w-[180px] border-none outline-none"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/search-outline.svg"
          alt="Search outline"
          className="absolute top-1/2 right-3 transform -translate-y-1/2"
        />
      </div>
      {search && results.length > 0 && (
        <div className="absolute top-[calc(100%+5px)] right-0 w-full bg-[#F4F4F5] rounded-md shadow-md min-w-[300px] sm:min-w-[450px] p-2">
          {results.map(
            (blog, idx) =>
              blog && (
                <Link
                  key={idx}
                  href={`/blogs${blog.slug}`}
                  className="p-2 border-b last:border-none flex items-start gap-3"
                >
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    width={120}
                    height={120}
                    className="w-[60px] h-[60px] object-cover rounded-md mt-3"
                  />
                  <div key={idx} className="p-2 border-b last:border-none">
                    <h3 className="font-semibold">{blog.title}</h3>
                    {blog.description && (
                      <p className="text-sm text-gray-600 line-clamp-2">
                        {blog.description}
                      </p>
                    )}
                  </div>
                </Link>
              )
          )}
        </div>
      )}
    </div>
  );
}
