import { fetchAllCategories } from "@/services/allCategories";
import { fetchFooter } from "@/services/footer";
import Link from "next/link";
import Image from "next/image";
import { SubscribeForm } from "./SubscribeForm";

export default async function Footer() {
  const footer = await fetchFooter();
  const categories = await fetchAllCategories();

  return (
    <footer className="bg-[#F6F6F7] w-full flex justify-center">
      <div className="max-w-screen-xl pt-10 pb-0 px-4 sm:px-6 w-full">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-1">
            <h3 className="mb-4 text-lg font-semibold">About</h3>
            <div
              className="text-sm"
              dangerouslySetInnerHTML={{ __html: footer.about }}
            ></div>
            <div className="mt-4 space-y-2">
              <p className="text-sm">
                <strong>Email:</strong> {footer.email}
              </p>
              <p className="text-sm">
                <strong>Phone:</strong> {footer.phone}
              </p>
            </div>
          </div>

          <div className="flex-1 grid grid-cols-2 min-[450px]:grid min-[450px]:grid-cols-2 gap-8">
            <div>
              <h3 className="mb-4 text-lg font-semibold">Quick Link</h3>
              <nav className="space-y-2">
                {footer.quickLinks.map((quickLink) => (
                  <Link
                    key={quickLink.slug}
                    href={quickLink.slug}
                    className="block text-sm hover:text-foreground hover-underline-animation"
                  >
                    {quickLink.title}
                  </Link>
                ))}
              </nav>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-semibold">Category</h3>
              <nav className="space-y-2">
                {categories.slice(0, 6).map((category) => (
                  <Link
                    key={category.slug}
                    href={`/categories/${category.slug}`}
                    className="block text-sm hover:text-foreground hover-underline-animation"
                  >
                    {category.name}
                  </Link>
                ))}
              </nav>
            </div>
          </div>

          <SubscribeForm />
        </div>
        <div className="border-t border-[#E4E4E7] w-full text-center py-4 mt-4 flex justify-between">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>
          <div className="flex gap-3">
            <Link href={footer.linkdin}>
              <Image
                src="/linkdin.svg"
                className="w-6 h-6"
                width={24}
                height={24}
                alt="linkdin"
              />
            </Link>
            <Link href={footer.github}>
              <Image
                src="/github.svg"
                className="w-6 h-6"
                width={24}
                height={24}
                alt="github"
              />
            </Link>
            <Link href={footer.facebook}>
              <Image
                src="/fb.svg"
                className="w-6 h-6"
                width={24}
                height={24}
                alt="facebook"
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
