"use client";
import React, { useState } from "react";
import Image from "next/image";
import {
  Heart,
  Download,
  Share2,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  Grid3X3,
  MoreHorizontal,
  Eye,
  Calendar,
  User,
  Search,
  Filter,
  SlidersHorizontal,
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
  const [selectedImage, setSelectedImage] = useState<SelectedImage | null>(
    null
  );
  const [viewMode, setViewMode] = useState("grid"); // 'grid' or 'masonry'
  const [showFilters, setShowFilters] = useState(false);

  const openModal = (image: any) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const currentIndex = images.findIndex(
      (img) => img.id === selectedImage?.id
    );
    const nextIndex = (currentIndex + 1) % images.length;
    setSelectedImage(images[nextIndex]);
  };

  const prevImage = () => {
    const currentIndex = images.findIndex(
      (img) => img.id === selectedImage?.id
    );
    const prevIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setSelectedImage(images[prevIndex]);
  };

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
                  {images?.length} images
                </span>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              {/* Search Bar */}
              <div className="relative hidden md:block">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search images..."
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent w-64"
                />
              </div>

              {/* Filter Button */}
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg"
              >
                <SlidersHorizontal className="w-5 h-5" />
              </button>

              {/* View Mode Toggle */}
              <div className="flex items-center bg-gray-100 rounded-lg p-1">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 rounded ${
                    viewMode === "grid" ? "bg-white shadow-sm" : ""
                  }`}
                >
                  <Grid3X3 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Filters Panel */}
      {showFilters && (
        <div className="bg-white border-b px-4 sm:px-6 lg:px-8 py-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap gap-4 items-center">
              <div className="flex items-center space-x-2">
                <Filter className="w-4 h-4 text-gray-500" />
                <span className="text-sm font-medium text-gray-700">
                  Filters:
                </span>
              </div>
              <select className="px-3 py-1 border border-gray-300 rounded text-sm">
                <option>All Categories</option>
                <option>Nature</option>
                <option>City</option>
                <option>Landscape</option>
              </select>
              <select className="px-3 py-1 border border-gray-300 rounded text-sm">
                <option>Most Recent</option>
                <option>Most Popular</option>
                <option>Most Viewed</option>
              </select>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {images?.map((image: any) => (
            <div
              key={image.id}
              className="group relative bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer"
              //   onClick={() => openModal(image)}
            >
              {/* Image */}
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={image.download_url}
                  alt={image.url}
                  fill
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
                  {image.title}
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
        <div className="flex justify-center py-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
        </div>
      </main>

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
          <div className="relative max-w-7xl max-h-full mx-4">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 p-2 bg-black bg-opacity-50 rounded-full text-white hover:bg-opacity-70"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-black bg-opacity-50 rounded-full text-white hover:bg-opacity-70"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-black bg-opacity-50 rounded-full text-white hover:bg-opacity-70"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Image */}
            <div className="relative">
              <Image
                src={selectedImage?.src}
                alt={selectedImage?.title}
                width={1200}
                height={800}
                className="max-w-full max-h-[80vh] object-contain"
                priority
              />
            </div>

            {/* Image Details */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
              <div className="text-white">
                <h2 className="text-2xl font-bold mb-2">
                  {selectedImage?.title}
                </h2>
                <div className="flex flex-wrap items-center gap-4 text-sm opacity-90">
                  <div className="flex items-center space-x-1">
                    <User className="w-4 h-4" />
                    <span>{selectedImage?.author}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{selectedImage?.date}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Heart className="w-4 h-4" />
                    <span>{selectedImage?.likes} likes</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Eye className="w-4 h-4" />
                    <span>{selectedImage?.views} views</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3 mt-4">
                  <button className="flex items-center space-x-2 px-4 py-2 bg-white bg-opacity-20 rounded-lg hover:bg-opacity-30 transition-colors">
                    <Download className="w-4 h-4" />
                    <span>Download</span>
                  </button>
                  <button className="flex items-center space-x-2 px-4 py-2 bg-white bg-opacity-20 rounded-lg hover:bg-opacity-30 transition-colors">
                    <Heart className="w-4 h-4" />
                    <span>Like</span>
                  </button>
                  <button className="flex items-center space-x-2 px-4 py-2 bg-white bg-opacity-20 rounded-lg hover:bg-opacity-30 transition-colors">
                    <Share2 className="w-4 h-4" />
                    <span>Share</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageGalleryComponent;
