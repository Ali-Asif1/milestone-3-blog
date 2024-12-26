import { Comment } from "@/components/comment";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";


export default function Home() {
  return (
    <main className="px-8 sm:px-12 lg:px-16">
      <Header />
      <Hero />
      <hr className="w-1/2 mx-auto border-b-2 border-b-gray-300 py-6"/>
      <Comment />
      <hr className="w-1/2 mx-auto border-b-2 border-b-gray-300 py-6"/>
      <Footer />
    </main>
  );
}
