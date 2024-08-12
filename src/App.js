// Importing necessary modules and components
import "./styles.css"; // Importing the CSS file for styling
import Card from "./cards"; // Importing the Card component from the cards file
import players from "./playes"; // Importing an array of player objects from the playes file (might be a typo; consider renaming to "players")
import React from "react"; // Importing React library

// Importing Swiper modules for carousel functionality
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react"; 
import "swiper/css"; // Importing basic Swiper CSS
import "swiper/css/navigation"; // Importing navigation CSS for Swiper
import "swiper/css/pagination"; // Importing pagination CSS for Swiper
import "swiper/css/scrollbar"; // Importing scrollbar CSS for Swiper

function App() {
  return (
    <div style={{ backgroundColor: "#2F4F4F" }}> {/* Setting background color for the entire container */}
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]} // Enabling various Swiper modules
        spaceBetween={50} // Space between slides
        slidesPerView={3} // Number of slides visible at the same time
        navigation // Enabling navigation buttons
        pagination={{ clickable: true }} // Enabling pagination and making it clickable
        scrollbar={{ draggable: true }} // Enabling a draggable scrollbar
        onSlideChange={() => console.log("Slide changed")} // Callback function for slide change
        onSwiper={(swiper) => console.log(swiper)} // Callback function when Swiper is initialized
      >
        {/* Mapping through players array to create a SwiperSlide for each player */}
        {players.map((player) => (
          <SwiperSlide key={player.ImageURL}> {/* Setting a unique key for each slide using the player's ImageURL */}
            <div>
              <Card
                imageURL={player.ImageURL} // Passing player image URL to the Card component
                name={player.name} // Passing player name to the Card component
                team={player.team} // Passing player team to the Card component
                nationality={player.nationality} // Passing player nationality to the Card component
                jerseyNumber={player.jerseyNumber} // Passing player jersey number to the Card component
                age={player.age} // Passing player age to the Card component
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default App; // Exporting the App component as the default export
