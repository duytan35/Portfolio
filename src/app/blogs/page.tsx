import BlogCard from "@/components/BlogCard";
import Image from "next/image";

const post = {
  title: "Back path to the future",
  description:
    "A path back to the future, A path back to the future, A path back to the future",
  author: {
    name: "Marty McFly",
  },
  categories: [
    {
      title: "Time Travel",
    },
    {
      title: "Tech",
    },
  ],
  image: "/post-image.jpeg",
  slug: "/back-path-to-the-future",
};

export default async function Blogs({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  return (
    <div className="w-full flex flex-col gap-10">
      <div className="relative w-full h-[600px]">
        <Image
          src={post.image}
          alt={post.title}
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
        <div className="relative w-full h-full">
          <div className="absolute bottom-0 left-0 p-10 text-white flex flex-col gap-3">
            <div className="flex gap-5">
              {post.categories.map((category) => (
                <span
                  key={category.title}
                  className="text-sm font-medium rounded-md bg-[#4B6BFB] p-[4px_10px]"
                >
                  {category.title}
                </span>
              ))}
            </div>
            <h1 className="text-2xl font-medium">{post.title}</h1>
            <div className="flex items-center gap-5 text-sm">
              <div className="flex gap-3 items-center">
                <Image src="/avatar.png" width={32} height={32} alt="avatar" />
                <span className="font-medium">{post.author.name}</span>
              </div>
              <span>August 20, 2024</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-8 pb-8">
        <h1 className="text-2xl text-[#181A2A] font-medium">All blog posts</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8">
          {[1, 2, 3, 4, 5, 6].map((key) => (
            <BlogCard key={key} blog={post} />
          ))}
        </div>
      </div>
    </div>
  );
}
