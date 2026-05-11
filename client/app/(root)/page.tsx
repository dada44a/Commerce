import Link from "next/link";
import ProductCard from "@/components/ProductCard";


export default async function Home() {
  let products = { products: [] };

  try {
    const res = await fetch(`${process.env.API_URL}/products`, {
      next: { revalidate: 3600 } // Example: Cache for 1 hour
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch products: ${res.status} ${res.statusText}`);
    }

    const contentType = res.headers.get("content-type");
    if (!contentType || !contentType.includes("application/json")) {
      throw new TypeError("API did not return JSON");
    }

    products = await res.json();
  } catch (error) {
    console.error("Error fetching products on home page:", error);
  }

  return (
    <div className="pb-20">

      {/* hero */}
      <div className="hero min-h-[80vh] bg-slate-50">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-6xl font-bold text-slate-900 leading-tight">Elevate Your Style</h1>
            <p className="py-6 text-slate-600 text-lg">
              Discover our curated collection of premium essentials designed for the modern lifestyle. Quality meets comfort in every piece.
            </p>
            <Link href="/products" className="btn btn-primary btn-lg rounded-full px-10">
              Shop Collection
            </Link>
          </div>
        </div>
      </div>

      {/* featured */}
      <div className="max-w-screen-2xl mx-auto px-6 md:px-16 lg:px-24 xl:px-32 mt-20">
        <h2 className="text-3xl font-bold text-slate-900 text-center mb-2 font-poppins">New Arrivals</h2>
        <p className="text-slate-500 mb-12 font-poppins text-center">Explore the latest additions to our collection.</p>
        
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.products?.slice(0, 4).map( (product:any) => (
            <ProductCard key={product._id} {...product} />
          ))}
        </section>

        {/* CTA */}
        <div className="mt-24 bg-slate-900 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Join the Community</h2>
            <p className="text-slate-400 max-w-xl mx-auto mb-10 text-lg">Subscribe to our newsletter and get 10% off your first order plus exclusive access to new drops.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input type="email" placeholder="Enter your email" className="input input-bordered bg-white/10 border-white/20 text-white rounded-full px-6 h-14 flex-1 focus:outline-none" />
              <button className="btn btn-primary rounded-full px-8 h-14">Subscribe</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}