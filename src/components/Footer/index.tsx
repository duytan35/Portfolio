import Link from "next/link";

export default async function Footer() {
  return (
    <footer className="bg-[#F6F6F7] w-full flex justify-center">
      <div className="max-w-screen-xl py-12 px-4 sm:px-6 w-full">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-1">
            <h3 className="mb-4 text-lg font-semibold">About</h3>
            <p className="text-sm text-muted-foreground">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu
              velit tempus erat egestas efficitur.
            </p>
            <div className="mt-4 space-y-2">
              <p className="text-sm">
                <strong>Email:</strong> info@example.net
              </p>
              <p className="text-sm">
                <strong>Phone:</strong> (480) 123 456 789
              </p>
            </div>
          </div>

          {/* Wrapper to keep Quick Link & Category side by side on small screens */}
          <div className="flex-1 grid grid-cols-2 min-[450px]:grid min-[450px]:grid-cols-2 gap-8">
            <div>
              <h3 className="mb-4 text-lg font-semibold">Quick Link</h3>
              <nav className="space-y-2">
                <Link
                  href="/"
                  className="block text-sm text-muted-foreground hover:text-foreground"
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="block text-sm text-muted-foreground hover:text-foreground"
                >
                  About
                </Link>
                <Link
                  href="/blog"
                  className="block text-sm text-muted-foreground hover:text-foreground"
                >
                  Blog
                </Link>
                <Link
                  href="/archived"
                  className="block text-sm text-muted-foreground hover:text-foreground"
                >
                  Archived
                </Link>
                <Link
                  href="/author"
                  className="block text-sm text-muted-foreground hover:text-foreground"
                >
                  Author
                </Link>
                <Link
                  href="/contact"
                  className="block text-sm text-muted-foreground hover:text-foreground"
                >
                  Contact
                </Link>
              </nav>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-semibold">Category</h3>
              <nav className="space-y-2">
                <Link
                  href="/lifestyle"
                  className="block text-sm text-muted-foreground hover:text-foreground"
                >
                  Lifestyle
                </Link>
                <Link
                  href="/technology"
                  className="block text-sm text-muted-foreground hover:text-foreground"
                >
                  Technology
                </Link>
                <Link
                  href="/travel"
                  className="block text-sm text-muted-foreground hover:text-foreground"
                >
                  Travel
                </Link>
                <Link
                  href="/business"
                  className="block text-sm text-muted-foreground hover:text-foreground"
                >
                  Business
                </Link>
                <Link
                  href="/economy"
                  className="block text-sm text-muted-foreground hover:text-foreground"
                >
                  Economy
                </Link>
                <Link
                  href="/sports"
                  className="block text-sm text-muted-foreground hover:text-foreground"
                >
                  Sports
                </Link>
              </nav>
            </div>
          </div>

          <div className="flex-1">
            <h3 className="mb-4 text-lg font-semibold">Weekly Newsletter</h3>
            <p className="mb-4 text-sm text-muted-foreground">
              Get blog articles and offers via email
            </p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-3 py-2 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <button
                type="submit"
                className="w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
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
