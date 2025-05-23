import React from "react";
import { fetchPosts, query } from "@/utils/fetchPosts";
import Link from "next/link";
import GetImage from "@/components/system/get-image";
import DateFormatter from "@/components/system/date-formater";
import Image from "next/image";

export default async function page() {
  const posts = await fetchPosts();
  return (
    <>
      <div className="max-w-7xl mx-auto px-2">
        <h1 className="text-4xl font-bold my-3">My Blogs</h1>
        <p className="max-w-4xl">
          This is my blog built with Next.js 14 and sanity.io, you'll love it
          when you read my blogs, it's very simple and I want it to be the same,
          the content should be accessible to all.
        </p>
      </div>
      <hr className="my-5 md:w-3xl max-w-[50%]" />
      <div className="max-w-7xl mx-auto my-3 grid grid-cols-1 gap-4">
        {posts.map((post, index) => (
          <Link
            href={`/blogs/${post.slug.current}`}
            key={index}
            className="w-full"
          >
            <div className="grid md:grid-cols-[.7fr_1fr] grid-cols-1 border-2 relative overflow-hidden rounded-lg border-gray-200 border-opacity-50 md:p-4 p-2 gap-6 items-center justify-start">
              <div className="w-full h-full rounded-lg border border-slate-300 overflow-hidden">
                <Image
                  src={post?.mainImage?.asset?.url}
                  alt={post.title}
                  placeholder="blur"
                  blurDataURL={post.mainImage.asset.metadata.lqip}
                  width={600}
                  height={400}
                />
              </div>
              <div className="flex flex-col gap-2">
                <h2 className="text-gray-900 text-2xl title-font font-medium">
                  {post.title}
                </h2>
                <div className="flex flex-row gap-2 text-xs justify-start items-center">
                  <span>{post.categories[0].title}</span>
                  <span>·</span>
                  <span>
                    <DateFormatter serverDate={post.publishedAt} />
                  </span>
                  <span>·</span>
                  <span>by {post.author.name}</span>
                </div>
                <p className="leading-relaxed text-base line-clamp-3">
                  {post.description}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
