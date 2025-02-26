import { SectionRenderer } from "@/components/SectionRenderer";
import { fetchAllBlogSlugs } from "@/services/allblogSlugs";
import { fetchBlogDetail } from "@/services/blog-detail";
import Image from "next/image";

export default async function BlogDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const blog = await fetchBlogDetail(`/${slug}/`);

  return (
    <div className="flex justify-center">
      <div className="flex flex-col gap-2 max-w-[800px]">
        <div className="flex flex-col gap-4">
          <div className="flex gap-2 text-white">
            {blog.categories.map((category) => (
              <span
                key={category.name}
                className="text-sm font-medium rounded-md bg-[#4B6BFB] p-[4px_10px]"
              >
                {category.name}
              </span>
            ))}
          </div>
          <h1 className="text-2xl font-medium">{blog.title}</h1>
          <div className="flex items-center gap-5 text-sm text-[#696A75]">
            <div className="flex gap-3 items-center">
              <Image src="/person.png" width={28} height={28} alt="avatar" />
              <span className="font-medium">{blog.author.name}</span>
            </div>
            <span>August 20, 2024</span>
          </div>
        </div>
        <SectionRenderer sections={blog.sections} />
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  const blogs = await fetchAllBlogSlugs();

  return blogs.map((blog) => ({
    params: {
      slug: blog.slug,
    },
  }));
}
