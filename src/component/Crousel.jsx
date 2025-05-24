import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// import '../../public/css/corausle.css';

const carouselStyle = {
    width: "100%",
    margin: "auto",
};

const imageStyle = {
    width: "100%",
    height: "auto",
    objectFit: "cover",
    borderRadius: "5px",
};

const Crousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 800,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        responsive: [
            {
                breakpoint: 768, // mobile
                settings: {
                    arrows: false,
                },
            },
        ],
    };

    const images = [
        "img/banner.png",
        "img/banner2.png",
        "img/banner3.png",
    ];
    return (
        <div style={carouselStyle}>
            <Slider {...settings}>
                {images.map((src, i) => (
                    <div key={i}>
                        <img src={src} alt={`Slide ${i + 1}`} style={imageStyle} />
                    </div>
                ))}
            </Slider>
        </div>
    )
}

export default Crousel
