import React, { useState } from "react";

function Gallery() {
  const [activeTab, setActiveTab] = useState("photos");

  const photos = [
    { id: 1, src: "path/to/image1.jpg", alt: "Mosque exterior" },
    { id: 2, src: "path/to/image2.jpg", alt: "Prayer hall" },
    { id: 3, src: "path/to/image3.jpg", alt: "Quran class" },
    { id: 4, src: "path/to/image4.jpg", alt: "Community iftar" },
    { id: 5, src: "path/to/image5.jpg", alt: "Charity event" },
    { id: 6, src: "path/to/image6.jpg", alt: "Eid celebration" },
  ];

  const videos = [
    {
      id: 1,
      src: "https://www.youtube.com/embed/VIDEO_ID_1",
      title: "Eid Message",
    },
    {
      id: 2,
      src: "https://www.youtube.com/embed/VIDEO_ID_2",
      title: "Islamic Lecture Series",
    },
    {
      id: 3,
      src: "https://www.youtube.com/embed/VIDEO_ID_3",
      title: "Community Day Highlights",
    },
  ];

  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-green-800 mb-8">Gallery</h1>

      <div className="flex space-x-4 mb-8">
        <button
          className={`px-4 py-2 rounded ${
            activeTab === "photos"
              ? "bg-green-600 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
          onClick={() => setActiveTab("photos")}
        >
          Photos
        </button>
        <button
          className={`px-4 py-2 rounded ${
            activeTab === "videos"
              ? "bg-green-600 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
          onClick={() => setActiveTab("videos")}
        >
          Videos
        </button>
      </div>

      {activeTab === "photos" && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {photos.map((photo) => (
            <div key={photo.id} className="bg-white p-2 rounded shadow">
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-48 object-cover rounded"
              />
              <p className="mt-2 text-center text-gray-600">{photo.alt}</p>
            </div>
          ))}
        </div>
      )}

      {activeTab === "videos" && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {videos.map((video) => (
            <div key={video.id} className="bg-white p-2 rounded shadow">
              <iframe
                width="100%"
                height="200"
                src={video.src}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <p className="mt-2 text-center text-gray-600">{video.title}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Gallery;
