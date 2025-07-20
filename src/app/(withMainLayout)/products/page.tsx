// src/app/products/page.tsx
"use client";

import Link from "next/link";
import Image from "next/image"; // Import the Image component
import { Router, HardDrive, Wifi, Radio, Box, Zap, Cable } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/Card";
import { productsData, ProductItem, allProducts } from "@/config/products"; // Import allProducts
import { useForm } from "react-hook-form";
import { IProduct } from "@/types/product";
import { useCreateProductMutation } from "@/redux/api/productApi";
import { useState } from "react";

// Helper to get an icon based on category name
const getCategoryIcon = (categoryName: string) => {
  switch (categoryName) {
    case "Routers":
      return <Router className="w-5 h-5" />; // Smaller icon size
    case "Switches":
      return <HardDrive className="w-5 h-5" />; // Smaller icon size
    case "Wi-Fi AP":
      return <Wifi className="w-5 h-5" />; // Smaller icon size
    case "Radio Device":
      return <Radio className="w-5 h-5" />; // Smaller icon size
    case "Accessories":
      return <Box className="w-5 h-5" />; // Smaller icon size
    case "PoE Injector":
      return <Zap className="w-5 h-5" />; // Smaller icon size
    case "SFP Module":
      return <Cable className="w-5 h-5" />; // Smaller icon size
    case "Network Rack":
      return <HardDrive className="w-5 h-5" />; // Smaller icon size
    default:
      return <span className="text-base font-bold">{categoryName[0]}</span>; // Smaller font size for default
  }
};

export default function ProductsPage() {
  const mainCategories = productsData[0]?.subItems || []; // Get top-level categories from productsData
  const allAvailableProducts = allProducts; // Get all flattened products

  // Product creation form logic
  const [createProduct, { isLoading, error }] = useCreateProductMutation();
  const [successMsg, setSuccessMsg] = useState("");
  const form = useForm<IProduct>({
    defaultValues: {
      title: "",
      mode: "",
      image: "",
      brand: "",
      category: "",
      features: [],
      description: "",
      metaTitle: "",
      metaDescription: "",
      metaImageAlt: "",
      metaTags: [],
    },
  });

  const onSubmit = async (data: IProduct) => {
    try {
      await createProduct(data).unwrap();
      form.reset();
      setSuccessMsg("Product created successfully!");
      setTimeout(() => setSuccessMsg(""), 3000);
    } catch {
      setSuccessMsg("");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section - Prominent Heading and Subtitle */}
      <div className="bg-gradient-to-r from-blue-700 to-purple-700 text-white py-20 text-center">
        {" "}
        {/* Reduced padding */}
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-extrabold mb-4 leading-tight sm:text-3xl">
            {" "}
            {/* Smaller font size */}
            Explore Our Comprehensive Product Catalog
          </h1>
          <p className="text-lg max-w-xl mx-auto leading-relaxed opacity-90 sm:text-xl">
            {" "}
            {/* Smaller font size */}
            Discover cutting-edge networking and communication hardware. From
            high-performance routers and switches to essential accessories, we
            provide reliable solutions for every need.
          </p>
        </div>
      </div>

      {/* Product Creation Form */}
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-4">Add New Product</h2>
        <form onSubmit={form.handleSubmit(onSubmit)} className="bg-white p-6 rounded shadow mb-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block font-semibold mb-1">Title</label>
            <input className="w-full border rounded px-3 py-2" {...form.register("title", { required: true })} />
            {form.formState.errors.title && <span className="text-red-500 text-xs">Title is required</span>}
          </div>
          <div>
            <label className="block font-semibold mb-1">Mode</label>
            <input className="w-full border rounded px-3 py-2" {...form.register("mode", { required: true })} />
            {form.formState.errors.mode && <span className="text-red-500 text-xs">Mode is required</span>}
          </div>
          <div>
            <label className="block font-semibold mb-1">Image URL</label>
            <input className="w-full border rounded px-3 py-2" {...form.register("image")} />
          </div>
          <div>
            <label className="block font-semibold mb-1">Brand</label>
            <input className="w-full border rounded px-3 py-2" {...form.register("brand", { required: true })} />
            {form.formState.errors.brand && <span className="text-red-500 text-xs">Brand is required</span>}
          </div>
          <div>
            <label className="block font-semibold mb-1">Category</label>
            <input className="w-full border rounded px-3 py-2" {...form.register("category", { required: true })} />
            {form.formState.errors.category && <span className="text-red-500 text-xs">Category is required</span>}
          </div>
          <div>
            <label className="block font-semibold mb-1">Features (comma separated)</label>
            <input className="w-full border rounded px-3 py-2" {...form.register("features")} onChange={e => form.setValue("features", e.target.value.split(",").map(f => f.trim()).filter(Boolean))} />
          </div>
          <div>
            <label className="block font-semibold mb-1">Description</label>
            <textarea className="w-full border rounded px-3 py-2" {...form.register("description", { required: true })} />
            {form.formState.errors.description && <span className="text-red-500 text-xs">Description is required</span>}
          </div>
          <div>
            <label className="block font-semibold mb-1">Meta Title</label>
            <input className="w-full border rounded px-3 py-2" {...form.register("metaTitle", { required: true })} />
            {form.formState.errors.metaTitle && <span className="text-red-500 text-xs">Meta title is required</span>}
          </div>
          <div>
            <label className="block font-semibold mb-1">Meta Description</label>
            <textarea className="w-full border rounded px-3 py-2" {...form.register("metaDescription", { required: true })} />
            {form.formState.errors.metaDescription && <span className="text-red-500 text-xs">Meta description is required</span>}
          </div>
          <div>
            <label className="block font-semibold mb-1">Meta Image Alt</label>
            <input className="w-full border rounded px-3 py-2" {...form.register("metaImageAlt", { required: true })} />
            {form.formState.errors.metaImageAlt && <span className="text-red-500 text-xs">Meta image alt tag is required</span>}
          </div>
          <div>
            <label className="block font-semibold mb-1">Meta Tags (comma separated)</label>
            <input className="w-full border rounded px-3 py-2" {...form.register("metaTags")} onChange={e => form.setValue("metaTags", e.target.value.split(",").map(f => f.trim()).filter(Boolean))} />
          </div>
          <div className="col-span-1 md:col-span-2 flex items-center gap-4 mt-2">
            <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors" disabled={isLoading}>
              {isLoading ? "Creating..." : "Create Product"}
            </button>
            {successMsg && <span className="text-green-600 text-sm">{successMsg}</span>}
            {error && <span className="text-red-500 text-sm">{(error as unknown as { data?: { message?: string } })?.data?.message || "Failed to create product"}</span>}
          </div>
        </form>
      </div>

      {/* Product Categories Section */}
      <div className="container mx-auto px-4 py-12">
        {" "}
        {/* Reduced padding */}
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-10 sm:text-4xl">
          {" "}
          {/* Smaller font size */}
          Browse by Category
        </h2>
        <div className="grid gap-6 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {" "}
          {/* Adjusted grid columns and gap */}
          {mainCategories.map((category: ProductItem) => (
            <Link
              key={category.id}
              href={category.href}
              className="group block"
            >
              <Card className="h-full flex flex-col justify-center items-center text-center p-4 rounded-lg shadow-sm border-gray-100 transition-all duration-300 hover:shadow-md hover:border-blue-300 transform hover:-translate-y-0.5">
                {" "}
                {/* Smaller padding, less shadow/transform */}
                <CardHeader className="w-full pb-2 flex flex-col items-center">
                  {" "}
                  {/* Reduced padding */}
                  <div className="mx-auto mb-2 p-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-white w-fit group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                    {" "}
                    {/* Smaller icon container */}
                    {getCategoryIcon(category.name)}{" "}
                  </div>
                  <CardTitle className="text-base font-semibold text-gray-800 group-hover:text-blue-700 transition-colors">
                    {" "}
                    {/* Smaller font size */}
                    {category.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="w-full">
                  {category.description && (
                    <CardDescription className="text-gray-600 text-xs leading-normal line-clamp-1">
                      {" "}
                      {/* Smaller font size, one line */}
                      {category.description}
                    </CardDescription>
                  )}
                  {/* Keeping these for data context, but very small */}
                  {category.subItems && category.subItems.length > 0 && (
                    <p className="text-[0.65rem] text-gray-500 mt-1">
                      {" "}
                      {/* Even smaller font size */}({category.subItems.length}{" "}
                      sub-categories)
                    </p>
                  )}

                  {category.products && category.products.length > 0 && (
                    <p className="text-[0.65rem] text-gray-500 mt-0.5">
                      {" "}
                      {/* Even smaller font size */}({category.products.length}{" "}
                      products)
                    </p>
                  )}
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>

      {/* All Products Listing Section */}
      <div className="bg-white py-12">
        {" "}
        {/* Reduced padding */}
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-10 sm:text-4xl">
            {" "}
            {/* Smaller font size */}
            All Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {" "}
            {/* Reduced gap */}
            {allAvailableProducts.map((product) => (
              <Link
                key={product.productId}
                href={`/products/${product.productId}`}
                className="group block"
              >
                <Card className="h-full flex flex-col rounded-lg shadow-md border-gray-100 transition-all duration-300 hover:shadow-lg hover:border-blue-300 transform hover:-translate-y-0.5">
                  {" "}
                  {/* Smaller border radius, less transform */}
                  <CardHeader className="p-0 flex justify-center items-center h-40 bg-gray-50 rounded-t-lg overflow-hidden">
                    {" "}
                    {/* Reduced height */}
                    {product.imageUrl && (
                      <Image
                        src={product.imageUrl}
                        alt={product.productName}
                        width={200} // Adjusted width
                        height={160} // Adjusted height
                        className="object-contain w-full h-full transform group-hover:scale-105 transition-transform duration-300" // object-contain for better fit
                        priority={false}
                      />
                    )}
                  </CardHeader>
                  <CardContent className="p-4 flex-grow flex flex-col justify-between">
                    {" "}
                    {/* Reduced padding */}
                    <div>
                      <CardTitle className="text-base font-semibold text-gray-900 group-hover:text-blue-700 transition-colors mb-1 leading-tight">
                        {" "}
                        {/* Smaller font size */}
                        {product.productName}
                      </CardTitle>
                      {product.brand && (
                        <p className="text-xs text-gray-600 mb-2">
                          {" "}
                          {/* Smaller font size */}
                          Brand: {product.brand}
                        </p>
                      )}
                      <p className="text-gray-700 text-sm line-clamp-3">
                        {" "}
                        {/* Kept line-clamp-3 for description */}
                        {product.description}
                      </p>
                    </div>
                    <div className="flex justify-end items-center pt-2 border-t border-gray-100 mt-3">
                      {" "}
                      {/* Reduced padding and margin */}
                      <Button
                        size="sm"
                        className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1.5 rounded-md text-xs" // Smaller button
                      >
                        View Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
