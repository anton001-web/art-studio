import React, {useState} from 'react'
import {section1SliderData} from "../utils/section1-sliderData";
import { Swiper, SwiperSlide } from 'swiper/react';
import {Navigation} from "swiper";

import 'swiper/scss'
import {act} from "react-dom/test-utils";


const Section2 = () => {
    const [activeSlide, setActiveSlide] = useState(0);

    return (
        <section className='firstSwiper-section'>
            <Swiper
                modules={[Navigation]}
                slidesPerView={1}
                centeredSlides={true}
                centeredSlidesBounds={true}
                navigation
                loop={true}
                spaceBetween={-65}
                breakpoints={{
                    767: {
                        slidesPerView: 3
                    }
                }}
            >
                {
                    section1SliderData.map((item, index) => (
                        <SwiperSlide key={index}>
                            <img src={item.img}/>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </section>
    )
}

export default Section2;