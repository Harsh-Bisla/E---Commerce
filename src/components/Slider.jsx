import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "./Slider.css"
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import { useSelector } from 'react-redux';
import hero1 from "../assets/hero1.webp"
import hero2 from "../assets/hero2.webp"
import hero3 from "../assets/hero3.webp"
import hero4 from "../assets/hero4.webp"

function Slider() {
    return (
        <Swiper
            pagination={{
                type: 'fraction',
            }}
            navigation={true}
            autoplay={{
                delay: 2000,
                disableOnInteraction: false,
            }}
            modules={[Pagination, Navigation, Autoplay]}
            className="mySwiper">

            <SwiperSlide swiper-slide>
                <img width={100} src={hero1} alt='hero' />
            </SwiperSlide>
            <SwiperSlide swiper-slide>
                <img width={100} src={hero2} alt='hero' />
            </SwiperSlide>
            <SwiperSlide swiper-slide>
                <img width={100} src={hero3} alt='hero' />
            </SwiperSlide>
            <SwiperSlide swiper-slide>
                <img width={100} src={hero4} alt='hero' />
            </SwiperSlide>
        </Swiper>

    )
}

export default Slider