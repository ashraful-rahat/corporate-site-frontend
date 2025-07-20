import { getBlogBySlug } from "@/lib/blogApi";
import { Metadata } from "next";
import Image from "next/image";
import React from "react";

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const blog = await getBlogBySlug(params.slug);
  if (!blog) return { title: "Blog Not Found" };
  return {
    title: blog.metaTitle || blog.title,
    description: blog.metaDescription,
    openGraph: {
      title: blog.metaTitle || blog.title,
      description: blog.metaDescription,
      images: [blog.image || ''],
    },
    keywords: blog.metaTags,
  };
}

export default async function BlogDetailsPage({ params }: { params: { slug: string } }) {
  const blog = await getBlogBySlug(params.slug);
  if (!blog) {
    return (
      <div className="container mx-auto py-20 text-center">
        <h1 className="text-3xl font-bold mb-4">Blog Not Found</h1>
        <p className="text-gray-500">Sorry, the blog post you are looking for does not exist.</p>
      </div>
    );
  }

  return (
    <article className="container mx-auto max-w-3xl py-12 px-4">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">{blog.title}</h1>
        <h2 className="text-xl text-gray-600 mb-4">{blog.subtitle}</h2>
        <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
          <span>By {blog.author}</span>
          <span>•</span>
          <span>{blog.createdAt ? new Date(String(blog.createdAt)).toLocaleDateString() : "-"}</span>
        </div>
        <div className="relative w-full h-72 rounded-xl overflow-hidden mb-8">
          <Image
            src={blog.image || ""}
            alt={blog.metaImageAlt || blog.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 700px"
            priority={true}
          />
        </div>
      </div>
      <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: blog.content }} />
      <div className="mt-8 flex flex-wrap gap-2">
        {blog.tags?.map((tag) => (
          <span key={tag} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">#{tag}</span>
        ))}
      </div>
    </article>
  );
} 