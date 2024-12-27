import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Comments } from "@/components/comments";

export default function Home() {
  return (
    <main className="px-8 sm:px-12 lg:px-16">
      <Header />
      <Hero />
      <hr className="w-3/4 mx-auto border-b-2 border-b-gray-300 mt-8" />
      <Comments />
      <hr className="w-3/4 mx-auto border-b-2 border-b-gray-300 mt-8" />
      <Footer />
    </main>
  );
}
