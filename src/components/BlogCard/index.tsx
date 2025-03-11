import { Blog } from "@/types";
import Image from "next/image";
import Link from "next/link";

export default function BlogCard({ blog }: { blog: Blog }) {
  return (
    <div className="flex flex-col gap-4">
      <div className="w-full h-[240px] relative">
        <Image
          src={blog.image}
          alt="Post title"
          layout="fill"
          objectFit="cover"
          className="rounded-md object-cover"
        />
      </div>
      <div className="flex flex-col gap-1">
        <div className="flex gap-2">
          {blog.categories.map((category) => (
            <span
              key={category.name}
              className="text-sm font-medium rounded-md text-gray-700 bg-gray-100 p-[3px_8px]"
            >
              {category.name}
            </span>
          ))}
        </div>
        <Link href={`/blogs${blog.slug}`} className="flex gap-2">
          <h2 className="text-xl font-medium flex-1">{blog.title}</h2>
          <Image
            src="/arrow-up-right.svg"
            className="w-5 h-7"
            alt="arrow-svg"
            width={20}
            height={28}
          />
        </Link>
        <p className="text-[#667085] text-sm tracking-[-0.2px]">
          {blog.description}
        </p>
        <div className="flex gap-5 items-center text-sm text-[#181A2A]">
          <div className="font-medium">{blog.author.name}</div>
          <div>August 20, 2024</div>
        </div>
      </div>
    </div>
  );
}
