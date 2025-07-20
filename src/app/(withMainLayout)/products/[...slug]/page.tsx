"use client"

import { useGetProductByIdQuery } from "@/redux/api/productApi";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import React from "react";

export default function ProductDetailsPage() {
  const params = useParams();
  const router = useRouter();
 const {slug} = params as { slug: string };
  const { data: product, isLoading, error } = useGetProductByIdQuery(slug);
 
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-96">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="container mx-auto py-20 text-center">
        <h1 className="text-3xl font-bold mb-4">Product Not Found</h1>
        <p className="text-gray-500">Sorry, the product you are looking for does not exist.</p>
      </div>
    );
  }

  return (
    <article className="container mx-auto max-w-3xl py-12 px-4">
      <button
        onClick={() => router.back()}
        className="mb-8 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded shadow text-sm"
      >
        ← Back to Products
      </button>
      <div className="mb-8 flex flex-col md:flex-row gap-8">
        <div className="relative w-full md:w-1/2 h-72 rounded-xl overflow-hidden shadow">
          <Image
            src={product.image || ""}
            alt={product.metaImageAlt || product.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 700px"
            priority={true}
          />
        </div>
        <div className="flex-1 flex flex-col gap-2">
          <h1 className="text-4xl font-bold mb-1">{product.title}</h1>
          <h2 className="text-lg text-gray-600 mb-2">Model: <span className="font-semibold">{product.model}</span></h2>
          <div className="flex flex-wrap gap-3 text-sm text-gray-500 mb-2">
            <span>Brand: <span className="font-medium text-gray-700">{product.brand}</span></span>
            <span>| Core Brand: <span className="font-medium text-gray-700">{product.coreBrand}</span></span>
            <span>| Category: <span className="font-medium text-gray-700">{product.category}</span></span>
          </div>
          <div className="flex flex-wrap gap-2 mt-2">
            {product.metaTags?.map((tag) => (
              <span key={tag} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">#{tag}</span>
            ))}
          </div>
        </div>
      </div>
      <div className="prose prose-lg max-w-none mb-8">
        <h3 className="text-xl font-semibold mb-2">Description</h3>
        <p>{product.description}</p>
      </div>
      {product.features && product.features.length > 0 && (
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-2">Features</h3>
          <ul className="list-disc list-inside space-y-1">
            {product.features.map((feature, idx) => (
              <li key={idx}>{feature}</li>
            ))}
          </ul>
        </div>
      )}
 
    </article>
  );
}
