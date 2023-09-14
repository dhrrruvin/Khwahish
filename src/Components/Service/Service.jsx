import React from "react";
import "./Service.css"
import seoImage from "../../assets/seo.png"
import designImage from "../../assets/ui_ux_design.png"
import webImage from "../../assets/web_development.png"
import appImage from "../../assets/app_development.png"
import marketingImage from "../../assets/digital_marketing.png"
import gameImage from "../../assets/game_development.png"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Service = () => {

  const service_details = [
    {
      id: 1,
      title: "Web Development",
      description: "A complete and sophisticated solution. Attractive and warmer designs to convert and attract leads that can enhance visibility cum profitability of business.",
      img: webImage
    },
    {
      id: 2,
      title: "App Development",
      description: "We provide Tiny, Massive, Cute, Sweet, Sober, every kind of Android/IOS Apps that client asks for. Our Inbound creative army can take your vision to the next level.",
      img: appImage
    },
    {
      id: 3,
      title: "Game Development",
      description: "We develop addictive, attractive, mass appealed games that can run on the highways of smart phones, laptops, pads, TVs, and smart watches.",
      img: gameImage
    },
    {
      id: 4,
      title: "UI/UX Design",
      description: "An eye catchy template, Great combinations of colors, user friendly simpler yet superior designs that make your vision capable to impress the market potentials.",
      img: designImage
    },
    {
      id: 5,
      title: "SEO / ASO",
      description: "In order to cater larger potentials and audiences, SEO is one of the most useful tricks available here. Trust our searching mechanism and cover the mass part of target customers.",
      img: seoImage
    },
    {
      id: 6,
      title: "Digital Marketing",
      description: "Let's make your visibility in the high tide of digital ocean. Tell your customers and subscribers about your presence with skyrocketing platinum strategies. Buy it and try it.",
      img: marketingImage
    },
  ]

  const settings = {
    dots: true,
    prevArrow: null,
    nextArrow: null,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 1500,
    lazyLoad: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <section className="service" id="service">
      <div className="container">

        <div className="service-content-div">

          <div className="service-heading">
            <h3 className="service-subtitle">Our Service</h3>
          </div>

          <div className="service-title-div">
            <h1 className="service-title">What We Do</h1>
            <p className="service-content">
              We support leaders like you to evolve your organization. By partnering with Khwahish Infotech, you can improve your decision making process, answer essential business questions, and enhance your roadmap to success.
            </p>
          </div>

        </div>

        <div className="service-image-div">
          <Slider {...settings}>
            {service_details.map(item => (
              <div className="card">
                <div className="card-top">
                  <figure className="service-figure">
                    <img src={item.img} alt={item.title} className='img-cover'/>
                  </figure>
                </div>
                <div className="card-bottom">
                  <h1 className="card-service-title">{item.title}</h1>
                  <p className="card-service-content">{item.description}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>

      </div>
    </section>
  );
};

export default Service;
