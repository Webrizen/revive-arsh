"use client";
import React from "react";
import { client } from "@/utils/sanity.client";
import imageUrlBuilder from "@sanity/image-url";

export default function GetImage({ source, title }) {
  const builder = imageUrlBuilder(client);
  function urlFor(srcmain) {
    return builder.image(srcmain);
  }
  return (
    <>
      <img
        src={urlFor(source)}
        alt={title}
        className="object-cover h-full w-full"
      />
    </>
  );
}