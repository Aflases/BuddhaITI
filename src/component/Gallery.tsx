import { useState } from "react";

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
}

const galleryImages = [
  { id: 1, src: `/assets/Entrance.jpeg`, alt: 'College Entrance' },
  { id: 2, src: `/assets/computerlab.jpeg`, alt: 'Computer Lab' },
  { id: 3, src: `/assets/newspapercutout.jpeg`, alt: 'Newspaper Mention' },
  { id: 4, src: `/assets/ClassRoom.jpeg`, alt: 'Class Room' },
  { id: 5, src: `/assets/MajorPoster.jpeg`, alt: 'Major Poster' },
  { id: 6, src: `/assets/Acheivements.jpeg`, alt: 'Student Achievements' },
  { id: 7, src: `/assets/Library.png`, alt: 'College Library' },
  { id: 8, src: `/assets/Grinder.jpeg`, alt: 'Workshop Grinder' },
  { id: 9, src: `/assets/Workshop.jpeg`, alt: 'College Workshop View 1' },
  { id: 10, src: `/assets/Workshop2.jpeg`, alt: 'College Workshop View 2' },
];

const Gallery = () => {

   const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  // Function to open the modal with the clicked image
  const openImage = (image:GalleryImage) => {
    setSelectedImage(image);
  };

  // Function to close the modal
  const closeImage = () => {
    setSelectedImage(null);
  };
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold text-center mb-10 text-gray-900">Gallery</h2>
      <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
        Explore a collection of moments and memories captured from our college events, campus life, and achievements.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
        {galleryImages.map((image) => (
          <div
            key={image.id}
            className="group relative overflow-hidden rounded-lg shadow-md cursor-pointer transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
            onClick={() => openImage(image)}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-48 object-cover rounded-lg transition-opacity duration-300 group-hover:opacity-80"
              // Fallback for broken images (optional)
              onError={(e) => { const target = e.target as HTMLImageElement; target.onerror = null; target.src = "https://placehold.co/600x400/CCCCCC/000000?text=Image+Error"; }}
            />
            {/* Overlay for hover effect */}
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-white text-lg font-semibold">View</span>
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-[1000]"
          onClick={closeImage} // Close modal when clicking outside the image
        >
          <div
            className="relative bg-white rounded-lg shadow-2xl overflow-hidden max-w-4xl max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()} // Prevent modal from closing when clicking on the image itself
          >
            {/* Close Button */}
            <button
              onClick={closeImage}
              className="absolute top-3 right-3 text-white bg-gray-800 rounded-full p-2 hover:bg-gray-700 transition-colors duration-200 z-10"
              aria-label="Close image"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Displayed Image */}
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full max-h-full object-contain rounded-lg"
              onError={(e) => { const target = e.target as HTMLImageElement; target.onerror = null; target.src = "https://placehold.co/800x600/CCCCCC/000000?text=Image+Error"; }}
            />

            {/* Image Alt Text / Caption */}
            <div className="p-4 bg-gray-900 text-white text-center text-sm">
              {selectedImage.alt}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery