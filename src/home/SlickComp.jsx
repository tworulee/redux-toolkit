import React from "react";
import Slider from "react-slick";

const SlickComp = () => {
  const settings = {
    // dots: true,
    infinite: true,
    autoplay:true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <Slider {...settings}>
        <div className="!flex items-center bg-gray-100 px-6">
          <div>
            <div className="text-6xl font-bold">Kaliteli Ayakkabılar</div>
            <div className="text-lg my-4">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione,
              eveniet.
            </div>
            <div className="border rounded-full cursor-pointer text-2xl w-[200px] h-16 flex items-center justify-center bg-gray-200">
              İncele
            </div>
          </div>
          <img
            src="https://static.wixstatic.com/media/0ea1fd_577153f734734a479be24da36f2a8af3~mv2.png/v1/fill/w_740,h_400,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/0ea1fd_577153f734734a479be24da36f2a8af3~mv2.png"
            alt=""
          />
        </div>
        <div className="!flex items-center bg-gray-100 px-6">
          <div>
            <div className="text-6xl font-bold">Kaliteli Ayakkabılar</div>
            <div className="text-lg my-4">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione,
              eveniet.
            </div>
            <div className="border rounded-full cursor-pointer text-2xl w-[200px] h-16 flex items-center justify-center bg-gray-200">
              İncele
            </div>
          </div>
          <img
            src="https://hausandhues.com/cdn/shop/products/MichaelTheOffice12x16.png?v=1657231714&width=300"
            alt=""
          />
        </div>
      </Slider>
    </div>
  );
};

export default SlickComp;
