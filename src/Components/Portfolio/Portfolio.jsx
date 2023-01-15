import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import mca_3 from "../../img/mca_sem3.PNG";
import mca_2 from "../../img/mca_sem2.PNG";
import mca_1 from "../../img/mca_sem1.png";
import cs_6 from "../../img/cs_sem6.png";
import cs_5 from "../../img/cs_sem5.PNG";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={mca_3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <a href='http://pradeeprajexpressso.000webhostapp.com/' target="_blank" rel="noopener noreferrer">
          <img src={mca_2} alt="" />
        </a>
        </SwiperSlide>
        <SwiperSlide>
          <img src={mca_1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={cs_6} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={cs_5} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;