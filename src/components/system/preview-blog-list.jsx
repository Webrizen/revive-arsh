"use client";
import { usePreview } from "@/utils/sanity.preview";

export default function PreviewBlogList({ query }) {
  const posts = usePreview(null, query);
  console.log("LOADING posts...", posts);
  return (
    <div>
      {posts.map((post, i) => (
        <div key={i}>
          <p>{post.title}</p>
        </div>
      ))}
    </div>
  );
}