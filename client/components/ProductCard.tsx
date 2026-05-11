"use client"

import Link from 'next/link';


interface ProductCardProps {
  _id: number;
  name: string;
  price: number;
  image: string;
  category: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ _id, name, price, image }) => {
  return (
    <Link href={`/products/${_id}`} className='group w-[300px] '>
      <div className="overflow-hidden rounded-lg">
        <img 
          className='rounded-lg w-[250px] h-[400px] object-cover object-top ' 
          alt={name} 
          src={image}
        
        />
      </div>
      <p className='text-sm mt-3 text-slate-600 font-poppins'>{name}</p>
      <p className='text-xl font-semibold text-slate-900'>$ {price.toFixed(2)}</p>
    </Link>
  );
};

export default ProductCard;
