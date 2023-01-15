import React from "react";
import "./certificate.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";


import { Pagination } from "swiper";
import "swiper/css/pagination";
import cert_img from "../../img/nptel.png";

const Certificate = () => {

  const clients = [
    {
      title:"Data Analytics with Python",
      img: cert_img,
      text: "Percentage: 75 / 100",
      review:
        "This course includes examples of analytics in a wide variety of industries, and students will learn how they can use analytics in their career.",
    },
    // {
    //   title:"Book Sharing Application",
    //   img: mca_2,
    //   review:
    //     "Book Sharing is an Android Application that has been created to provide a solution to the students who want to borrow books from other students either from their batch or from a senior batch. The application allows students to post images along with the title of the book they are willing to lend and other students can comment to request the book.",
    // },
    // {
    //   title:"Placement Adda",
    //   img: mca_1,
    //   review:
    //     "A Placement Management System, which allows placement cell to add companies which are hiring and allows students to apply to those companies.",
    // },
    // {
    //   title:"Expressso E-Commerce Website",
    //   img: cs_6,
    //   review:
    //     "‘Expressso’ project is about doing the business of shopping over the internet which is an E-Commerce website. The objective of this project is to setup a virtual store on the internet  i.e an E-Commerce store where products like groceries, clothes, gadgets can be bought easily.",
    // },
    // {
    //   title:"Computerized Society",
    //   img: cs_5,
    //   review:
    //     "Computerized Society is a web-based application. Computerized Society tried to computerize several things that occur within the society and provides a user-friendly interface to all people who are residing in the society and also the Employees, Secretary who are working under a society. ",
    // },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="f-heading">
        <span>My </span>
        <span> Online Certification </span>
        <span>Courses</span>
      <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>


      </div>
      
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <span>{client.title}</span>
                <img src={client.img} alt="" />
                <span class= "percentage">{client.text}</span>
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>    
  );
};

export default Certificate;