// import DownloadButton from "@/components/download-button";
import BlogCard from "@/components/BlogCard";
import { fetchBlogs } from "@/services/blogs";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  // const { from } = await searchParams;
  const blogs = await fetchBlogs();

  return (
    <main className="flex-1">
      <section className="py-6 md:py-12">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2 md:gap-12">
          <div className="flex flex-col justify-center space-y-4">
            <h1 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">
              Technology & Software Development.
            </h1>
            <p className="text-gray-600 md:text-[18px] dark:text-gray-300 mb-2">
              Welcome to my personal blog, where I share insights, experiences,
              and ideas on topics that inspire me. From tech and coding to
              personal growth and creativity, this space is a blend of knowledge
              and curiosity!
            </p>
            <div className="flex flex-col gap-2 sm:flex-row">
              <Link
                href={`blogs${blogs[0].slug}`}
                className="inline-flex items-center justify-center rounded-md bg-black px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200"
              >
                Read Latest Post
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="ml-2 h-4 w-4"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </Link>
              <Link
                href="/blogs"
                className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-800"
              >
                Browse All
              </Link>
            </div>
          </div>
          <div className="relative aspect-video overflow-hidden rounded-lg">
            <Image
              src="/hero.jpg"
              alt="Featured post"
              fill
              className="object-cover opacity-0 animate-fadeIn"
              priority
              sizes="(min-width: 640px) 600px, 80vw"
            />
          </div>
        </div>
      </section>
      <section className="py-12 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">
              Latest Posts
            </h2>
            <Link
              href="/blogs"
              className="!flex items-center text-sm font-medium hover-underline-animation"
            >
              View All
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="ml-1 h-4 w-4"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8">
            {blogs.slice(0, 6).map((blog, index) => (
              <BlogCard key={index} blog={blog} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
