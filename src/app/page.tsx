import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Templates from "./components/Templates";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="grid items-center p-8 pb-20 gap-16 font-[family-name:var(--font-geist-sans)]">
      <Navbar />
      <Hero />
      <Templates />
      <Footer />
    </div>
  );
}
