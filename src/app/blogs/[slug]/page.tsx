import CodeBlock from "@/components/code-block";
import { fetchBlogDetail } from "@/services";

export default async function BlogDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const blog = await fetchBlogDetail(slug);

  return (
    <div>
      Blog detail
      {/* <CodeBlock
        language={blog.myCodeField.language}
        code={blog.myCodeField.code}
        filename={blog.myCodeField.filename}
      /> */}
    </div>
  );
}
