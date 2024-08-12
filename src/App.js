// App.js
import "./styles.css";
import Card from "./cards";
import players from "./playes";
import React from "react";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function App() {
  return (
    <div style={{ backgroundColor: "#2F4F4F" }}>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSlideChange={() => console.log("Slide changed")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {players.map((player) => (
          <SwiperSlide key={player.ImageURL}>
            <div>
              <Card
                imageURL={player.ImageURL}
                name={player.name}
                team={player.team}
                nationality={player.nationality}
                jerseyNumber={player.jerseyNumber}
                age={player.age}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default App;
