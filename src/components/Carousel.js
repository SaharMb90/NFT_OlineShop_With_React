import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";


const images = [
  "/Rectangle3.png",
  "/Rectangle3.png",
  "/Rectangle3.png",
  "/Rectangle3.png",
];
const profileimg = [
  "/Rectangle10.png",
  "/Rectangle10.png",
  "/Rectangle10.png",
  "/Rectangle10.png",
];

const Carousel = () => {
  return (
    <div className="carousel-container mx-4 md:mx-8 lg:mx-16 relative mt-10">
      <Swiper
        modules={[Scrollbar, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        scrollbar={{ draggable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        className="swiper-container"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="carousel-slide-content flex flex-col md:flex-row items-center justify-between p-4 md:p-8 lg:p-12 bg-gray-100 rounded-[30px] gap-4 md:gap-6 lg:gap-8">
              <div className="carousel-textbox w-full md:w-2/3 lg:w-1/2 text-left">
                <button className="bg-gray-200 rounded-full mb-2 btn-collection px-3 py-1 md:px-4 md:py-2">
                  Trending Now
                </button>
                <h4 className="font-bold text-gray-400 text-md md:text-lg">
                  Night sky collection
                </h4>
                <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold mt-3 md:mt-5">
                  With the stars
                </h2>
                <div className="flex items-center mt-6 md:mt-10 justify-start">
                  <img
                    src={profileimg[index]}
                    alt={`Profile ${index + 1}`}
                    className="rounded-xl object-cover max-w-[40px] md:max-w-[60px] lg:max-w-[68px] h-[40px] md:h-[60px] lg:h-[68px] mr-4"
                  />
                  <div className="flex flex-col justify-center">
                    <h4 className="font-bold text-gray-400">Artist</h4>
                    <p className="text-sm md:text-md lg:text-lg mt-1 text-gray-600">
                      Léa Jacquot
                    </p>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mt-4 md:mt-6 justify-start">
                  <button className="bg-black text-white font-medium py-2 px-5 md:px-6 rounded-full btn">
                    <a href="./">Buy</a>
                  </button>
                  <button className="btn border-2 border-gray-800 text-gray-800 font-medium py-2 px-5 md:px-6 rounded-full">
                    See collection
                  </button>
                </div>
              </div>
              <div className="w-full md:w-1/3 lg:w-1/2 flex justify-center">
                <img
                  src={image}
                  alt={`Slide ${index + 1}`}
                  className="rounded-xl object-cover max-w-full h-[300px] md:h-[300px] lg:h-[411px]"
                />
              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
