import DownloadButton from "@/components/download-button";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { from } = await searchParams;

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-sans bg-white text-black">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <img
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
        />
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-mono">
          <li className="mb-2">
            Get started by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
              src/app/page.tsx
            </code>
            .
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>

        {from !== "puppeteer" && <DownloadButton />}
      </main>
    </div>
  );
}
