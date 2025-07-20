import React from "react";
import Link from "next/link";
import Image from "next/image";
import { getAllBlogs } from "@/lib/blogApi";

export default async function BlogPage() {
  const blogs = await getAllBlogs();

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-8 text-center">Our Blog</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <Link
            key={blog._id}
            href={`/blog/${blog._id}`}
            className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden flex flex-col"
          >
            <div className="relative h-56 w-full">
              <Image
                src={blog.image || ""}
                alt={blog.metaImageAlt || blog.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, 33vw"
                priority={false}
              />
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <h2 className="text-2xl font-semibold mb-2 group-hover:text-blue-600 transition-colors duration-300">
                {blog.title}
              </h2>
              <p className="text-gray-600 mb-4 line-clamp-2">{blog.subtitle}</p>
              <div className="mt-auto flex items-center justify-between text-sm text-gray-400">
                <span>By {blog.author}</span>
                <span>{blog.createdAt ? new Date(String(blog.createdAt)).toLocaleDateString() : "-"}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
} 