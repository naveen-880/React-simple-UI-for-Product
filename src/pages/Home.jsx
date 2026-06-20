import Header from "../components/Header";
import Hero from "../components/Hero";
import ProductCard from "../components/Product";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Hero />

      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-10">
          Featured Products
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 p-3">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          
        </div>
      </section>
    </>
  );
}