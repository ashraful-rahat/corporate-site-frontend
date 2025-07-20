// src/app/products/[...slug]/page.tsx
import Link from "next/link";
import { notFound } from "next/navigation";
import { allItems, allProducts, ProductItem, Product } from "@/config/products";
import Image from "next/image";
import {
  Tag,
  Package,
  Wrench,
  Globe,
  CheckCircle,
  ArrowRight,
  // ShoppingCart, // Removed as Add to Cart button is removed
  Check, // For features list
} from "lucide-react";
// import { Button } from "@/components/ui/button"; // Button component might not be needed if only for Add to Cart

// Function to find an item (category or product) by its slug (path)
function findItemBySlug(slug: string[]): {
  item: ProductItem | Product | null;
  products: Product[]; // Products directly within a category
} {
  const fullPath = `/products/${slug.join("/")}`;
  let foundItem: ProductItem | Product | null = null;
  let categoryProducts: Product[] = [];

  // Try to find if the slug corresponds to a category/sub-category
  const categoryMatch = allItems.find(
    (item) => item.href === fullPath
  ) as ProductItem;

  if (categoryMatch) {
    foundItem = categoryMatch;

    // Recursively collect all products under this category and its sub-categories
    function collectProductsRecursively(cat: ProductItem): Product[] {
      let prods: Product[] = cat.products || [];
      if (cat.subItems) {
        cat.subItems.forEach((sub) => {
          prods = prods.concat(collectProductsRecursively(sub));
        });
      }
      return prods;
    }
    categoryProducts = collectProductsRecursively(categoryMatch);
  } else {
    // If not a category, try to find if it's a product by productId
    const productId = slug[slug.length - 1]; // Assuming product ID is the last part of the slug
    foundItem =
      allProducts.find((product) => product.productId === productId) || null;

    // If it's a product, there are no 'category products' to display on its own page
    if (foundItem && "productId" in foundItem) {
      categoryProducts = [];
    }
  }

  return { item: foundItem, products: categoryProducts };
}

// Generate static params for all product and category pages
export async function generateStaticParams() {
  const paths: { slug: string[] }[] = [];

  // Add paths for categories and sub-categories
  allItems.forEach((item) => {
    if (item.href && item.href !== "/products") {
      const slugParts = item.href.split("/").filter(Boolean).slice(1);
      if (slugParts.length > 0) {
        paths.push({ slug: slugParts });
      }
    }
  });

  // Add paths for individual products
  allProducts.forEach((product) => {
    // For product detail pages, we assume the slug is just the productId
    // e.g., /products/RTR001
    paths.push({ slug: [product.productId] });
  });

  return paths;
}

interface ProductDynamicPageProps {
  params: {
    slug: string[];
  };
}

export default function ProductDynamicPage({
  params,
}: ProductDynamicPageProps) {
  const { slug } = params;
  const { item, products } = findItemBySlug(slug);

  if (!item && (!products || products.length === 0)) {
    notFound();
  }

  // Render Product Detail Page
  if (item && "productId" in item) {
    const product = item as Product;
    return (
      <div className="container mx-auto px-2 py-4 max-w-2xl sm:px-4 sm:py-6">
        <Link
          href="/products"
          className="text-blue-600 hover:text-blue-800 font-semibold mb-4 inline-flex items-center gap-1 text-xs" // Smaller font size
        >
          <ArrowRight className="w-3 h-3 rotate-180" /> Back to Products
          Overview
        </Link>
        <div className="bg-white p-4 rounded-lg shadow-md space-y-4 sm:p-6 sm:rounded-xl sm:space-y-6">
          {" "}
          {/* Reduced padding and spacing */}
          {/* Product Image Section */}
          <div className="flex justify-center items-center py-2">
            {" "}
            {/* Added py-2 for vertical spacing */}
            {product.imageUrl && (
              <Image
                src={product.imageUrl}
                alt={product.productName}
                width={200} // Further adjusted width for smaller display
                height={150} // Further adjusted height for smaller display
                className="object-contain rounded"
                style={{ height: "9.375rem" }} // Match h-30 (10rem) if needed, or adjust based on new height
              />
            )}
          </div>
          {/* Product Info Section */}
          <div className="space-y-3">
            {" "}
            {/* Reduced spacing */}
            <h1 className="text-xl md:text-2xl font-bold text-gray-900 leading-tight">
              {" "}
              {/* Smaller font size */}
              {product.productName}
            </h1>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-gray-700">
              {" "}
              {/* Reduced gap and font size */}
              {product.productModel && (
                <span className="flex items-center gap-1 bg-gray-100 px-2 py-0.5 rounded-full text-xs font-medium">
                  <Tag className="w-3 h-3 text-gray-500" /> Model:{" "}
                  {product.productModel}
                </span>
              )}
              {product.brand && (
                <span className="flex items-center gap-1 bg-gray-100 px-2 py-0.5 rounded-full text-xs font-medium">
                  <Wrench className="w-3 h-3 text-gray-500" /> Brand:{" "}
                  {product.brand}
                </span>
              )}
              {product.origin && (
                <span className="flex items-center gap-1 bg-gray-100 px-2 py-0.5 rounded-full text-xs font-medium">
                  <Globe className="w-3 h-3 text-gray-500" /> Origin:{" "}
                  {product.origin}
                </span>
              )}
              {product.ndaaCompliant && (
                <span className="flex items-center gap-1 bg-green-100 px-2 py-0.5 rounded-full text-xs font-medium text-green-700">
                  <CheckCircle className="w-3 h-3 text-green-600" /> NDAA
                  Compliant
                </span>
              )}
            </div>
            <p className="text-lg font-bold text-blue-700 pt-1">
              {" "}
              {/* Smaller font size */}
              Price: ${product.price.toFixed(2)}
            </p>
            <p className="text-sm text-gray-700">
              {" "}
              {/* Smaller font size */}
              <strong>Stock:</strong> {product.stock} units
            </p>
            <p className="text-gray-800 leading-relaxed text-sm pt-2">
              {" "}
              {/* Smaller font size and padding */}
              {product.description}
            </p>
            {product.features?.length > 0 && (
              <div className="pt-2">
                {" "}
                {/* Reduced padding */}
                <h3 className="text-lg font-semibold mb-1.5 text-gray-900">
                  {" "}
                  {/* Smaller font size */}
                  Key Features:
                </h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-3 gap-y-1 text-gray-700 text-xs">
                  {" "}
                  {/* Reduced gap and font size */}
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      {" "}
                      {/* Use items-start for multi-line text alignment */}
                      <Check className="w-3 h-3 mr-1 text-blue-500 flex-shrink-0" />{" "}
                      {/* Smaller icon */}
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {/* Specifications Section REMOVED */}
            {/* Package Contents */}
            {product.packageContents && product.packageContents.length > 0 && (
              <div className="pt-4 border-t border-gray-200">
                {" "}
                {/* Reduced padding */}
                <h3 className="text-lg font-semibold mb-2 text-gray-900 flex items-center gap-1.5">
                  <Package className="w-4 h-4 text-gray-700" /> Package
                  Includes: {/* Smaller icon */}
                </h3>
                <ul className="list-disc list-inside text-gray-700 space-y-0.5 text-xs">
                  {" "}
                  {/* Reduced spacing and font size */}
                  {product.packageContents.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="mr-1 text-blue-500">•</span>{" "}
                      {/* Reduced margin */}
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {/* Add to Cart Button REMOVED */}
          </div>
        </div>
      </div>
    );
  }

  // Render Category/Sub-Category Page (kept original sizes for now, as focus was on product detail page)
  if (item && "name" in item && item.href?.startsWith("/products/")) {
    const currentCategory = item as ProductItem;

    return (
      <div className="container mx-auto px-4 py-8">
        <Link
          href="/products"
          className="text-blue-600 hover:text-blue-800 font-semibold mb-6 inline-flex items-center gap-1"
        >
          <ArrowRight className="w-4 h-4 rotate-180" /> Back to Categories
        </Link>
        <h1 className="text-4xl font-bold mb-4 text-gray-900">
          {currentCategory.name}
        </h1>
        {currentCategory.description && (
          <p className="text-lg text-gray-700 mb-8">
            {currentCategory.description}
          </p>
        )}

        {currentCategory.subItems && currentCategory.subItems.length > 0 && (
          <>
            <h2 className="text-3xl font-semibold mb-4 text-gray-900">
              Sub-Categories:
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentCategory.subItems.map((subItem) => (
                <div
                  key={subItem.id}
                  className="border p-5 rounded-lg shadow-sm bg-gray-50 hover:shadow-md transition-shadow"
                >
                  <Link
                    href={subItem.href}
                    className="text-blue-600 text-xl font-semibold hover:underline"
                  >
                    {subItem.name}
                  </Link>
                  {subItem.products && subItem.products.length > 0 && (
                    <p className="text-sm text-gray-500 mt-1">
                      ({subItem.products.length} products)
                    </p>
                  )}
                  {subItem.description && (
                    <p className="text-sm text-gray-600 mt-2">
                      {subItem.description.substring(0, 80)}...
                    </p>
                  )}
                </div>
              ))}
            </div>
          </>
        )}

        {products?.length > 0 && (
          <>
            <h2 className="text-3xl font-semibold mt-12 mb-4 text-gray-900">
              All Products in {currentCategory.name}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
              {products.map((product) => (
                <div
                  key={product.productId}
                  className="border rounded-xl shadow-md p-5 flex flex-col bg-white hover:shadow-lg transition-shadow"
                >
                  {product.imageUrl && (
                    <img
                      src={product.imageUrl}
                      alt={product.productName}
                      className="h-56 object-contain mb-4 rounded border border-gray-100"
                    />
                  )}
                  <h3 className="text-lg font-semibold mb-1">
                    <Link
                      href={`/products/${product.productId}`}
                      className="text-blue-600 hover:underline"
                    >
                      {product.productName}
                    </Link>
                  </h3>
                  {product.brand && (
                    <p className="text-sm text-gray-500 mb-1">
                      Brand: {product.brand}
                    </p>
                  )}
                  <p className="text-blue-600 text-base mb-2 font-medium">
                    <strong>Price:</strong> ${product.price.toFixed(2)}
                  </p>
                  <p className="text-sm text-gray-600 flex-grow">
                    {product.description.substring(0, 120)}...
                  </p>
                  <div className="mt-4 text-right">
                    <Link
                      href={`/products/${product.productId}`}
                      className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 font-semibold transition-colors"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    );
  }

  return null;
}
