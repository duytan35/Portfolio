import Image from "next/image";
import Link from "next/link";
import Search from "../Search";
import { fetchBlogs } from "@/services/blogs";
import { fetchHeader } from "@/services/header";

export default async function Header() {
  const blogs = await fetchBlogs();
  const header = await fetchHeader();

  const briefBlogs = blogs.map((blog) => ({
    title: blog.title,
    description: blog.description,
    image: blog.image,
    slug: blog.slug,
  }));

  return (
    <header className="sticky z-10 top-0 bg-white w-full max-w-screen-xl flex justify-between items-center py-6 px-4 sm:px-6">
      <div className="min-w-[200px]">
        <Link href="/">
          <Image src="/logo.png" width={150} height={36} alt="Logo" priority />
        </Link>
      </div>
      <div className="flex justify-center items-center gap-10 text-[#171717] max-md:hidden">
        {header.navLinks.map((navLink) => (
          <Link
            key={navLink.slug}
            href={navLink.slug}
            className="hover-underline-animation"
          >
            {navLink.title}
          </Link>
        ))}
      </div>
      <Search blogs={briefBlogs} />
    </header>
  );
}
