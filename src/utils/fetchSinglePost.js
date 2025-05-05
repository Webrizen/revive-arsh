import { groq } from "next-sanity";
import { client } from "@/utils/sanity.client";

export const query = groq`
  *[_type=="post"]{
    _id,
    title,
    description,
    mainImage{
      asset->{
        _id,
        url
      },
      alt
    },
    publishedAt,
    slug,
    author->{
      name,
      image{
      asset->{
        _id,
        url
      },
      alt
    },
    },
    categories[]->{
      _id,
      description,
      title
    },
    body
  } | order(_createdAt asc)
`;

export const fetchSinglePost = async (querySlug) => {
  const posts = await client.fetch(query);

  // Find the post with the matching slug
  const post = posts.find((p) => p.slug.current === querySlug);

  return post || null;
};
