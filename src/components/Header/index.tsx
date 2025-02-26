import Image from "next/image";
import Link from "next/link";

export default async function Header() {
  return (
    <header className="w-full max-w-screen-xl flex justify-between items-center py-8 px-4 sm:px-6">
      <div className="min-w-[200px]">
        <Link href="/">
          <Image src="/logo.png" width={150} height={36} alt="Logo" priority />
        </Link>
      </div>
      <div className="flex justify-center items-center gap-10 text-[#171717] max-md:hidden">
        <Link href="#">Home</Link>
        <Link href="/blogs">Blogs</Link>
        <Link href="#">Contact</Link>
        <Link href="#">About</Link>
      </div>
      <div className="w-[200px] flex items-center gap-5">
        <div className="relative bg-[#F4F4F5] flex-1 rounded-[5px]">
          <input
            className="p-[8px_32px_8px_16px] bg-transparent max-w-[180px] border-none outline-none"
            placeholder="Search"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/search-outline.svg"
            alt="Search outline"
            className="absolute top-1/2 right-3 transform -translate-y-1/2"
          />
        </div>
      </div>
    </header>
  );
}
