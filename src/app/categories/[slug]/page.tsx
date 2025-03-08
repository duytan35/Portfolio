import BlogCard from "@/components/BlogCard";
import { fetchAllCategories } from "@/services/allCategories";
import { fetchBlogs } from "@/services/blogs";

export default async function Category({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const blogs = await fetchBlogs();
  const filteredBlogs = blogs.filter((blog) =>
    blog.categories.some((c) => c.slug === slug)
  );

  return (
    <div className="flex flex-col gap-8 pt-4 pb-12">
      {filteredBlogs.length > 0 ? (
        <>
          <h1 className="text-2xl text-[#181A2A] font-medium">
            All posts in &quot;
            {filteredBlogs[0].categories.find((c) => c.slug === slug)?.name}
            &quot;
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8">
            {filteredBlogs.map((blog, index) => (
              <BlogCard key={index} blog={blog} />
            ))}
          </div>
        </>
      ) : (
        <h1 className="text-2xl text-[#181A2A] font-medium">No posts found</h1>
      )}
    </div>
  );
}

export async function generateStaticParams() {
  const categories = await fetchAllCategories();

  return categories.map((c) => ({
    params: {
      slug: c.slug,
    },
  }));
}
