import { fetchSinglePost } from "@/utils/fetchSinglePost";
import CustomDateFormatter from "@/components/system/custom-date-formatter";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

const portableTextComponents = {
  types: {
    image: ({ value }) => (
      <figure className="my-12">
        <div className="overflow-hidden rounded-2xl shadow-lg">
          <Image
            src={value.asset.url || "/placeholder.svg"}
            alt={value.alt || ""}
            width={1200}
            height={675}
            className="w-full object-cover transition-transform hover:scale-[1.02] duration-500 ease-in-out"
            priority
          />
        </div>
        {value.alt && (
          <figcaption className="mt-3 text-center text-sm text-muted-foreground/80">
            {value.alt}
          </figcaption>
        )}
      </figure>
    ),
  },
  block: {
    h2: ({ children }) => (
      <h2 className="mt-16 mb-6 text-3xl font-bold tracking-tight text-slate-800">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="mt-12 mb-5 text-2xl font-semibold tracking-tight text-slate-800">
        {children}
      </h3>
    ),
    normal: ({ children }) => (
      <p className="mb-7 text-lg leading-relaxed text-slate-700">{children}</p>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="ml-6 mb-8 list-disc space-y-3 text-slate-700">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="ml-6 mb-8 list-decimal space-y-3 text-slate-700">
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li className="text-lg">{children}</li>,
    number: ({ children }) => <li className="text-lg">{children}</li>,
  },
  marks: {
    link: ({ children, value }) => (
      <a
        href={value.href}
        className="text-primary font-medium underline underline-offset-4 hover:text-primary/80 transition-colors duration-200"
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    ),
    strong: ({ children }) => (
      <strong className="font-bold text-slate-900">{children}</strong>
    ),
  },
};

export default async function Page({ params }) {
  const { slug } = await params;
  const post = await fetchSinglePost(slug);

  return (
    <div className="flex flex-col gap-8 my-8 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Article Header */}
      <header className="flex flex-col gap-6">
        <div className="flex flex-col gap-4">
          <span className="text-sm font-medium text-orange-500 px-3 py-2 rounded-full w-min whitespace-nowrap bg-orange-50 uppercase tracking-wider">
            {post.categories[0].title}
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-balance text-slate-900 leading-tight">
            {post.title}
          </h1>
        </div>

        {/* Author and Metadata */}
        <div className="flex flex-row justify-between items-center pt-2 border-t border-slate-100">
          <div className="flex flex-row gap-4 items-center">
            <div className="relative h-12 w-12 rounded-full overflow-hidden border-2 border-white shadow-sm">
              <Image
                src={post?.author?.image?.asset?.url || "/coming-soon.png"}
                alt={post?.author?.name || "N/A"}
                width={48}
                height={48}
                className="h-full w-full object-cover aspect-square bg-zinc-100"
              />
            </div>
            <div className="flex flex-col gap-1">
              <h2 className="font-semibold text-slate-900">
                {post.author.name}
              </h2>
              <div className="flex flex-row gap-2 text-sm text-slate-500">
                <span>
                  Posted <CustomDateFormatter publishedAt={post.publishedAt} />
                </span>
                <span>·</span>
                <span>{Math.ceil(post.body.length / 1500)} min read</span>
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-3">
            <button className="px-4 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-700 transition-colors duration-200 shadow-sm text-sm font-medium">
              Share
            </button>
          </div>
        </div>
      </header>

      {/* Featured Image */}
      <div className="w-full mt-4">
        <div className="overflow-hidden rounded-2xl shadow-lg">
          <Image
            src={post?.mainImage?.asset?.url || "/placeholder.svg"}
            alt={post.title}
            width={1200}
            height={675}
            className="w-full aspect-[16/9] object-cover"
            priority
          />
        </div>
      </div>

      {/* Article Content */}
      <article className="mx-auto w-full">
        <div
          className="prose prose-lg max-w-none dark:prose-invert 
                       prose-headings:font-bold prose-headings:text-slate-900
                       prose-p:text-slate-700 prose-a:text-primary
                       prose-ul:text-slate-700 prose-ol:text-slate-700
                       prose-blockquote:text-slate-500 prose-blockquote:border-l-4
                       prose-blockquote:border-slate-200 prose-blockquote:pl-4
                       prose-blockquote:italic"
        >
          {post.body && (
            <PortableText
              value={post.body}
              components={portableTextComponents}
            />
          )}
        </div>
      </article>
    </div>
  );
}
