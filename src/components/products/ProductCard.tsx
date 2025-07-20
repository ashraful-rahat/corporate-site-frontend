import React from "react";
import Image from "next/image";
import Link from "next/link";
import { IProduct } from "@/types/product";

interface ProductCardProps {
  product: IProduct & {
    _id: string;
    image?: string;
  }
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
 
  return (
    <Link
      href={`/products/${product._id}`}
      className="group block bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden flex flex-col border border-gray-100 hover:border-blue-400 focus:ring-2 focus:ring-blue-300"
      prefetch={false}
    >
      <div className="relative h-56 w-full overflow-hidden">
        <Image
          src={product.image || ""}
          alt={product.metaImageAlt || product.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, 33vw"
          priority={false}
        />
        {product.category && (
          <span className="absolute top-3 left-3 bg-blue-600 text-white text-xs px-3 py-1 rounded-full shadow">
            {product.category}
          </span>
        )}
      </div>
      <div className="p-6 flex-1 flex flex-col">
        <h2 className="text-2xl font-semibold mb-1 group-hover:text-blue-700 transition-colors">
          {product.title}
        </h2>
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
          <span>Brand: <span className="font-medium text-gray-700">{product.brand}</span></span>
          {product.model && <span className="ml-2">| Model: <span className="font-medium text-gray-700">{product.model}</span></span>}
        </div>
        <p className="text-gray-600 mb-3 line-clamp-2 flex-1">{product.description}</p>
        {product.features && product.features.length > 0 && (
          <ul className="flex flex-wrap gap-2 mb-2">
            {product.features.slice(0, 3).map((feature, idx) => (
              <li key={idx} className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded text-xs font-medium">
                {feature}
              </li>
            ))}
            {product.features.length > 3 && (
              <li className="text-xs text-gray-400">+{product.features.length - 3} more</li>
            )}
          </ul>
        )}
        <div className="flex flex-wrap gap-1 mt-auto">
          {product.metaTags?.slice(0, 2).map((tag) => (
            <span key={tag} className="bg-gray-100 text-gray-500 px-2 py-0.5 rounded text-xs">#{tag}</span>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
