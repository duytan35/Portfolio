import { fetchAllCategories } from "@/services/allCategories";
import { fetchFooter } from "@/services/footer";
import Link from "next/link";

export default async function Footer() {
  const footer = await fetchFooter();
  const categories = await fetchAllCategories();

  return (
    <footer className="bg-[#F6F6F7] w-full flex justify-center">
      <div className="max-w-screen-xl py-12 px-4 sm:px-6 w-full">
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

          <div className="flex-1">
            <h3 className="mb-4 text-lg font-semibold">Weekly Newsletter</h3>
            <p className="mb-4 text-sm">
              Get blog articles and offers via email
            </p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-3 py-2 text-sm border rounded-md focus:outline-none focus:ring-1 focus:ring-slate-600"
                required
              />
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center rounded-md bg-black px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
}
