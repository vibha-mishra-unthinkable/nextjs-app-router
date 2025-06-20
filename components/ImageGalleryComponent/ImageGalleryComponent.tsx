"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  Heart,
  Share2,
  Maximize2,
  MoreHorizontal,
  Eye,
} from "lucide-react";

type SelectedImage = {
  id: string;
  author: string;
  width: number;
  height: number;
  url: string;
  download_url: string;
  // Add any other properties you need
  likes: number;
  views: number;
  src: string;
};

type ImageGalleryProps = {
  images: SelectedImage[];
};

const ImageGalleryComponent = ({ images }: ImageGalleryProps) => {
  const [page, setPage] = useState(1);
  const [newImages, setNewImages] = useState<SelectedImage[]>(images || []);
  const [hasMore, setHasMore] = useState(true);
  const loaderRef = useRef<HTMLDivElement | null>(null);

  const fetchImages = async () => {
    try {
      const response = await fetch(
        `https://picsum.photos/v2/list?page=${page}&limit=10`
      );
      const data = await response.json();
      setNewImages((prev) => [...prev, ...data]);
      if (data.length < 10) {
        setHasMore(false);
      }
    } catch (error) {
      throw new Error("Failed to fetch images: " + error);
    }
  };

  useEffect(() => {
    fetchImages();
  }, [page]);

  useEffect(() => {
    const oberserver = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && hasMore) {
        setPage((prev) => prev + 1);
      }
    });

    const currentLoader = loaderRef.current;
    if(currentLoader) {
      oberserver.observe(currentLoader)
    }
    return () => {
      if(currentLoader) {
        oberserver.unobserve(currentLoader)
      }
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold text-gray-900">Gallery</h1>
              <div className="hidden sm:flex items-center space-x-2">
                <span className="text-sm text-gray-500">
                  {newImages?.length} images
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4">
          {newImages?.map((image, idx) => (
            <div
              key={`${image.url}-${idx}`}
              className="group relative bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer"
              //   onClick={() => openModal(image)}
            >
              {/* Image */}
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={image.download_url}
                  alt={image.url}
                  fill
                  priority
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, 20vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />

                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex space-x-2">
                    <button className="p-2 bg-white rounded-full shadow-lg hover:bg-gray-50">
                      <Maximize2 className="w-4 h-4" />
                    </button>
                    <button className="p-2 bg-white rounded-full shadow-lg hover:bg-gray-50">
                      <Heart className="w-4 h-4" />
                    </button>
                    <button className="p-2 bg-white rounded-full shadow-lg hover:bg-gray-50">
                      <Share2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Image Info */}
              <div className="p-3">
                <h3 className="font-medium text-gray-900 text-sm truncate">
                  {image.author}
                </h3>
                <div className="flex items-center justify-between mt-2 text-xs text-gray-500">
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center space-x-1">
                      <Heart className="w-3 h-3" />
                      <span>{image.likes}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Eye className="w-3 h-3" />
                      <span>{image.views}</span>
                    </div>
                  </div>
                  <button className="hover:text-gray-700">
                    <MoreHorizontal className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Loading Indicator for Infinite Scroll */}
        <div className="flex justify-center py-8" ref={loaderRef}>
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
        </div>
      </main>
    </div>
  );
};

export default ImageGalleryComponent;
