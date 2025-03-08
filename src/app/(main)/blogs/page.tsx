import BlogCard from "@/components/BlogCard";
import { fetchBlogs } from "@/services/blogs";
import Image from "next/image";
import Link from "next/link";

export default async function Blogs() {
  const blogs = await fetchBlogs();

  const priorityBlog = blogs.find((blog) => blog.priority);

  return (
    <div className="w-full flex flex-col gap-10">
      {priorityBlog && (
        <div className="relative w-full h-[400px] sm:h-[600px]">
          <Image
            src={priorityBlog.image}
            alt={priorityBlog.title}
            layout="fill"
            objectFit="cover"
            className="rounded-md"
          />
          <div className="relative w-full h-full">
            <div className="w-full h-2/5 absolute bottom-0 bg-gradient-to-t from-[#1D1B1E] to-transparent rounded-b-md" />
            <div className="absolute bottom-0 left-0 p-10 text-white flex flex-col gap-3 max-w-[600px]">
              <div className="flex gap-3">
                {priorityBlog.categories.map((category) => (
                  <span
                    key={category.name}
                    className="text-sm font-medium rounded-md bg-[#4B6BFB] p-[4px_10px]"
                  >
                    {category.name}
                  </span>
                ))}
              </div>
              <Link href={`/blogs${priorityBlog.slug}`} className="flex gap-2">
                <h2 className="text-xl sm:text-2xl font-medium flex-1">
                  {priorityBlog.title}
                </h2>
                {/* eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text */}
                <img src="/arrow-up-right-white.svg" className="w-6 h-8" />
              </Link>
              <div className="flex items-center gap-5 text-sm">
                <div className="flex gap-3 items-center">
                  <Image
                    src="/avatar.png"
                    width={32}
                    height={32}
                    alt="avatar"
                  />
                  <span className="font-medium">
                    {priorityBlog.author.name}
                  </span>
                </div>
                <span>August 20, 2024</span>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="flex flex-col gap-8 pb-8">
        <h1 className="text-2xl text-[#181A2A] font-medium">All posts</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8">
          {blogs
            .filter((b) => b.slug !== priorityBlog?.slug)
            .map((blog, index) => (
              <BlogCard key={index} blog={blog} />
            ))}
        </div>
      </div>
    </div>
  );
}
