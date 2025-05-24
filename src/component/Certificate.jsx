import React from 'react';
import Slider from 'react-slick';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Certificate = () => {

    const SampleNextArrow = (props) => {
        const { onClick } = props;
        return (
            <div className="arrow next" onClick={onClick}>
                <ArrowForwardIos style={{ color: '#000', fontSize: '30px' }} />
            </div>
        );
    };

    const SamplePrevArrow = (props) => {
        const { onClick } = props;
        return (
            <div className="arrow prev" onClick={onClick}>
                <ArrowBackIos style={{ color: '#000', fontSize: '30px' }} />
            </div>
        );
    };

    // Carousel Settings
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };


    const certificates = [
        {
            id: 1,
            title: "Brc ms certificate",
            image: "img/certificate.jpg"
        },
        {
            id: 2,
            title: "NON GMO MS certificate ",
            image: "img/NON GMO Ms.jpg"
        },
        {
            id: 3,
            title: "HALAL MS certificate",
            image: "img/Halal.jpg"
        },
        {
            id: 4,
            title: "KISHOR MS certificate",
            image: "img/kisore ms.jpg"
        },
        {
            id: 5,
            title: "UDYAM certificate",
            image: "img/udyam.jpg"
        },


    ];

    return (
        <div className="certificate-carousel">
            <h2 style={{ textAlign: 'center', margin: '30px 0' }}>Company Certificate</h2>
            <Slider {...settings}>
                {certificates.map((cert) => (
                    <div key={cert.id} className="certificate-item">
                        <img
                            src={cert.image}
                            alt={cert.title}
                            style={{
                                width: '90%',
                                height: '500px',
                                borderRadius: '10px',
                                objectFit: 'cover',
                                margin: '0 auto'
                            }}
                        />
                        <h3 style={{ textAlign: 'center', marginTop: '15px' }}>{cert.title}</h3>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Certificate;