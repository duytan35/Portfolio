import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen items-center max-w-full">
      <Header />
      <main className="w-full max-w-screen-xl flex-1 px-4 sm:px-6">
        {children}
      </main>
      <Footer />
    </div>
  );
}
