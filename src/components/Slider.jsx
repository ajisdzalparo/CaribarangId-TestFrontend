import React, { useState } from "react";
import * as Icon from "react-feather";

const Slider = ({ sliderData }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);

  if (!sliderData || sliderData.length === 0) {
    return <div className="text-center py-4">No data available</div>;
  }

  const maxScrollPosition = Math.max(0, (sliderData.length - 3) * 84);

  const handleNextThumbnail = () => {
    setScrollPosition((prev) => Math.min(prev + 84, maxScrollPosition));
  };

  const handlePrevThumbnail = () => {
    setScrollPosition((prev) => Math.max(prev - 84, 0));
  };

  return (
    <div className="w-full flex flex-col overflow-hidden lg:py-4 space-y-8">
      {/* Main Preview */}
      <div className="h-full lg:h-[20rem] flex items-center justify-center">
        <div className="relative w-full max-w-full h-full rounded-md lg:rounded-lg overflow-hidden">
          {sliderData[activeIndex].type === "video" ? (
            <video className="w-full h-full object-contain" controls muted>
              <source
                src={`/src/assets/${sliderData[activeIndex].src}`}
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          ) : (
            <img
              src={`/src/assets/${sliderData[activeIndex].src}`}
              alt={`Item ${activeIndex}`}
              className="w-full h-full object-contain"
            />
          )}
        </div>
      </div>

      {/* Thumbnail Slider */}
      <div className="flex items-center justify-center space-x-4">
        {/* Left Arrow */}
        <button
          onClick={handlePrevThumbnail}
          className={`w-10 h-10 flex items-center justify-center rounded-full bg-white hover:bg-gray-200 shadow-md transition-all duration-300 ${
            scrollPosition === 0 ? "opacity-0 cursor-default" : ""
          }`}
          disabled={scrollPosition === 0}
        >
          <Icon.ChevronLeft size={20} />
        </button>

        {/* Thumbnails */}
        <div className="flex overflow-hidden w-full max-w-[30%] sm:max-w-[40%] md:max-w-[40%] lg:max-w-[40%] xl:max-w-[60%]">
          <div
            className="flex space-x-2 lg:space-x-4 transition-transform duration-300"
            style={{ transform: `translateX(-${scrollPosition}px)` }}
          >
            {sliderData.map((item, index) => (
              <div
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-12 sm:w-16 md:w-20 lg:w-h-24 h-w-10 sm:h-w-16 md:h-w-20 lg:h-24 flex items-center justify-center border rounded-lg cursor-pointer transition duration-200 bg-white overflow-hidden shadow-md ${
                  index === activeIndex ? "border-blue-500" : "border-gray-300"
                }`}
              >
                {item.type === "video" ? (
                  <video
                    className="w-full h-full object-contain md:object-cover"
                    muted
                    preload="metadata"
                  >
                    <source src={`/src/assets/${item.src}`} type="video/mp4" />
                  </video>
                ) : (
                  <img
                    src={`/src/assets/${item.src}`}
                    alt={`Thumbnail ${index}`}
                    className="w-full h-full object-contain md:object-cover"
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right Arrow */}
        <button
          onClick={handleNextThumbnail}
          className={`w-10 h-10 flex items-center justify-center rounded-full bg-white hover:bg-gray-200 shadow-md transition-all duration-300 ${
            scrollPosition >= maxScrollPosition
              ? "opacity-0 cursor-default"
              : ""
          }`}
          disabled={scrollPosition >= maxScrollPosition}
        >
          <Icon.ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default Slider;
