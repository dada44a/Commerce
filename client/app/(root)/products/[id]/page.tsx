import ProductActions from '@/components/ProductActions';
import Link from 'next/link';
import Image from 'next/image';
export const dynamic = "force-dynamic";

export default async function ProductDetailsPage({ params }: { params: Promise<{ id: string }> }) {

  const { id } = await params;


  let product = null;

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/${id}`, {
      next: { revalidate: 60 }
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch product ${id}: ${res.status} ${res.statusText}`);
    }

    const contentType = res.headers.get("content-type");
    if (!contentType || !contentType.includes("application/json")) {
      throw new TypeError("API did not return JSON");
    }

    const data = await res.json();
    product = data.product;
    console.log("API response for product:", data);
  } catch (error) {
    console.error(`Error fetching product ${id}:`, error);
  }


  console.log("Fetched product:", JSON.stringify(product));

  if (!product) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold mb-4 text-slate-900">Product Not Found</h1>
        <Link href="/products" className="btn btn-primary rounded-full px-8">Back to Shop</Link>
      </div>
    );
  }


  return (
    <main className="min-h-screen">
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-10">

        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-xs text-slate-400 mb-6 font-poppins">
          <Link href="/" className="hover:text-slate-900 transition-colors">Home</Link>
          <span>/</span>
          <Link href="/products" className="hover:text-slate-900 transition-colors">Products</Link>
          <span>/</span>
          <span className="text-slate-900 font-medium">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-16">

          {/* Image Section */}
          <div className="space-y-6">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-slate-100 group cursor-zoom-in relative">
              <img
                src={product.image}
                alt={product.name}

                className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute top-6 right-6">
                <button className="w-12 h-12 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center shadow-sm hover:bg-white transition-all">
                  <svg className="w-6 h-6 text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Thumbnail Placeholder Grid */}
         
          </div>

          {/* Info Section */}
          <div className="flex flex-col">
            <div className="mb-6">
              <p className="text-primary font-semibold tracking-wider uppercase text-xs mb-1 font-poppins">{product.category}</p>
              <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">{product.name}</h1>
              <div className="flex items-center gap-4">
                <p className="text-2xl font-semibold text-slate-900">$ {product.price}</p>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map(i => (
                    <svg key={i} className={`w-4 h-4 ${i <= 4 ? 'text-yellow-400 fill-yellow-400' : 'text-slate-200 fill-slate-200'}`} viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="text-sm text-slate-400 ml-2 font-poppins">(124 Reviews)</span>
                </div>
              </div>
            </div>

            <p className="text-slate-600 text-base leading-relaxed mb-8 font-poppins">
              {product.description}
            </p>

            <ProductActions productId={id} />

          </div>
        </div>
      </div>
    </main>
  );
}
