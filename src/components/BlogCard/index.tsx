import { Blog } from "@/types";
import Image from "next/image";
import Link from "next/link";

export default function BlogCard({ blog }: { blog: Blog }) {
  return (
    <div className="flex flex-col gap-4">
      <div className="w-full h-[240px] relative">
        <Image
          src="/post-image.jpeg"
          alt="Post title"
          layout="fill"
          objectFit="cover"
          className="rounded-md"
        />
      </div>
      <div className="flex flex-col gap-1">
        <div className="flex gap-2">
          {blog.categories.map((category) => (
            <span
              key={category.name}
              className="text-sm font-medium rounded-md text-[#4B6BFB] bg-[#4b6bfb0d] p-[3px_8px]"
            >
              {category.name}
            </span>
          ))}
        </div>
        <Link href={blog.slug} className="flex gap-2">
          <h2 className="text-xl font-medium flex-1">{blog.title}</h2>
          {/* eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text */}
          <img src="/arrow-up-right.svg" className="w-5 h-7" />
        </Link>
        <p className="text-[#667085] text-sm">{blog.description}</p>
        <div className="flex gap-5 items-center text-sm text-[#181A2A]">
          <div className="font-medium">{blog.author.name}</div>
          <div>August 20, 2024</div>
        </div>
      </div>
    </div>
  );
}
