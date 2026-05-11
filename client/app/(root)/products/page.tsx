// import React, { useState, useMemo } from 'react';
import ProductCard from '@/components/ProductCard';
// import FilterSidebar from '@/components/FilterSidebar';
export const dynamic = "force-dynamic";


export default async function ProductsPage() {

  let products: any = { products: [] };
  
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`, {
      cache: 'no-store' // Or handle revalidation as needed
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
    console.error("Error fetching products:", error);
  }

  console.log("Fetched products count:", products.products?.length || 0);


  return (
    <main className="min-h-screen bg-slate-50/50">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-16 lg:px-24 xl:px-32 py-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-6">
          <div>
            <h1 className="text-4xl font-bold text-slate-900 mb-2">Our Collection</h1>
            <p className="text-slate-500 max-w-md">Browse through our curated selection of premium apparel and accessories.</p>
          </div>
          <p className="text-slate-400 font-medium">{products.products?.length || 0} Products Found</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          
          {/* Sidebar */}
          {/* <div className="lg:sticky lg:top-24 h-fit">
            <FilterSidebar 
              categories={CATEGORIES}
              selectedCategories={selectedCategories}
              onCategoryChange={handleCategoryChange}
              priceRange={priceRange}
              onPriceChange={setPriceRange}
              sortBy={sortBy}
              onSortChange={setSortBy}
            />
          </div> */}

          {/* Grid */}
          <div className="flex-1">
            {products.products && products.products.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-x-8 gap-y-12">
                {products.products.map( (product:any) => (
                  <ProductCard key={product._id} {...product} />
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-20 text-center bg-white rounded-2xl border border-dashed border-slate-200">
                <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">No products found</h3>
                <p className="text-slate-500 mb-6">Try adjusting your filters to find what you&apos;re looking for.</p>

                <button 
                  
                  className="btn btn-primary btn-sm"
                >
                  Reset All Filters
                </button>
              </div>
            )}
          </div>

        </div>
      </div>
    </main>
  );
}
