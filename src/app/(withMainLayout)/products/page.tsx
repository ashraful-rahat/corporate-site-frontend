/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React from "react";
import { useGetProductsQuery } from "@/redux/api/productApi";
import { Badge } from "@/components/ui/badge";
import ProductCard from "@/components/products/ProductCard";

export default function ProductsPage() {
  const { data: productsData, isLoading, error } = useGetProductsQuery();
  const [selectedCategory, setSelectedCategory] = React.useState<string>("");

  const categoryOptions = [
    { value: "Routers", label: "Routers" },
    { value: "Switch", label: "Switch" },
    { value: "Wi-Fi AP", label: "Wi-Fi AP" },
    { value: "Radio Device", label: "Radio Device" },
    { value: "Accessories", label: "Accessories" },
    { value: "POE Injector", label: "POE Injector" },
    { value: "SFP Module", label: "SFP Module" },
    { value: "LAN Accessories", label: "LAN Accessories" },
    { value: "Network Rack", label: "Network Rack" },
  ];

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-96">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }


  if (error) {
    return (
      <div className="text-center text-red-500 py-20">Failed to load products.</div>
    );
  }

  const products = (productsData && 'data' in productsData && Array.isArray(productsData.data))
    ? productsData.data
    : [];

  // Filter products by selected category if one is selected
  const filteredProducts = selectedCategory
    ? products.filter((product: any) => product.category === selectedCategory)
    : products;


    console.log(products)

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-8 text-center">Our Products</h1>
      <div className="flex gap-2 overflow-x-auto mb-8 pb-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
        <button
          type="button"
          onClick={() => setSelectedCategory("")}
        >
          <Badge
            variant={selectedCategory === "" ? "default" : "outline"}
            className="cursor-pointer transition-colors"
          >
            All
          </Badge>
        </button>
        {categoryOptions.map((option) => (
          <button
            key={option.value}
            type="button"
            onClick={() => setSelectedCategory(option.value)}
          >
            <Badge
              variant={selectedCategory === option.value ? "default" : "outline"}
              className="cursor-pointer transition-colors"
            >
              {option.label}
            </Badge>
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {(filteredProducts as any[])?.map((product) => (
          <ProductCard key={product.model || product.title} product={product} />
        ))}
      </div>
    </div>
  );
}
