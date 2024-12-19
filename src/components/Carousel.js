import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";
import "./Carousel.css";

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
    <div className="carousel-container m-16 relative">
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
            <div className="carousel-slide-content flex items-center justify-between p-6 lg:p-12 bg-gray-100 rounded-[30px] gap-8">
              <div className="carousel-textbox w-full lg:w-1/2 ml-10">
                <button className="bg rounded-full mb-2 btn-collection">
                  Trending Now
                </button>
                <h4 className="font-bold text-gray-400">Night sky collection</h4>
                <h2 className="text-6xl font-bold mt-5">With the stars</h2>

                <div className="flex items-center mt-10">
                  <img
                    src={profileimg[index]}
                    alt={`Profile ${index + 1}`}
                    className="rounded-xl object-cover max-w-full mr-5 h-[68px]"
                  />
                  <div className="flex flex-col justify-center">
                    <h4 className="font-bold text-gray-400">Artist</h4>
                    <p className="text-lg mt-1 text-gray-600 mr-4">
                      Léa Jacquot
                    </p>
                  </div>
                </div>


                <div className="flex space-x-4 mt-6">
                  <button className="bg-black text-white font-medium py-2 px-6 rounded-full btn">
                    <a href="./"> Buy </a>
                  </button>
                  <button className="btn border-2 border-gray-800 text-gray-800 font-medium py-2 px-6 rounded-full">
                    See collection
                  </button>
                </div>
              </div>
              <div className="w-full lg:w-1/2 flex justify-center">
                <img
                  src={image}
                  alt={`Slide ${index + 1}`}
                  className="rounded-xl object-cover max-w-full h-[411px]"
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
