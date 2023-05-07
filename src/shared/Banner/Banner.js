import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "./Banner.css";
import slider from '../../images/banner.jpg';
import logo from '../../images/logo.png';

// Import Swiper styles
import "swiper/css";

// import required modules
import { Autoplay, EffectFade } from "swiper";

const Banner = () => {
    return (
        <div className='container mx-auto relative -z-0 bg-white'>
            <div className='px-10'>
                <Swiper
                    effect={"fade"}
                    centeredSlides={true}
                    autoplay={{
                        delay: 5000,
                    }}
                    modules={[EffectFade, Autoplay]}
                    className="mySwiper">
                    <SwiperSlide><img src={slider} alt="slide" /></SwiperSlide>
                    <SwiperSlide><img src={slider} alt="slide" /></SwiperSlide>
                    <SwiperSlide><img src={slider} alt="slide" /></SwiperSlide>
                </Swiper>
            </div>

            <div className='flex gap-3 items-center absolute z-10 bottom-28 left-20'>
                <img src={logo} alt="logo" />
                <div className='text-white'>
                    <h1 className='text-2xl mb-3'>বাংলাদেশ কারিগরি শিক্ষা বোর্ড</h1>
                    <p className='text-lg'>গণপ্রজাতন্ত্রী বাংলাদেশ সরকার</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;