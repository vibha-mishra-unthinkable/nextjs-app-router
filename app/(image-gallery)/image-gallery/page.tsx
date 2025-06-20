import ImageGalleryComponent from "@/components/ImageGalleryComponent/ImageGalleryComponent";
import React from "react";

export async function generateMetadata() {
  return {
    title: "Image Gallery",
    description: "A simple image gallery page",
  };
}

export async function getImagesFromAPI() {
  const response = await fetch("https://picsum.photos/v2/list?page=1&limit=10");
  if (!response.ok) {
    throw new Error("Failed to fetch images");
  }
  return response.json();
}

export default async function ImageGallery() {
  const images = await getImagesFromAPI();
  console.log("images", images);
  return <ImageGalleryComponent images={images} />;
}
