import React from 'react'
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination, EffectCoverflow} from "swiper";
import {section3SliderData} from "../utils/section3-sliderData";


const Section3 = () => {
    return (
        <section className='secondSwiper-section'>
            <div className='container'>
                <h1 className='secondSwiper-section__title'>Наши локации</h1>
                <Swiper
                    effect={'coverflow'}
                    coverflowEffect={{
                        rotate: 45,
                        depth: 200
                    }}
                    modules={[Navigation, Pagination, EffectCoverflow]}
                    slidesPerView={1}
                    centeredSlides={true}
                    centeredSlidesBounds={true}
                    loop={true}
                    navigation
                    spaceBetween={40}
                    breakpoints={{
                        767: {
                            slidesPerView: 3
                        }
                    }}
                    className='section3-swiper'
                >
                    {
                        section3SliderData.map((item, index) => (
                            <SwiperSlide key={index} className='section3-swiper__slide'>
                                <img src={item.img} className='section2-swiper_img'/>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
                <button className='secondSwiper-section__button'>
                    выбрать локацию
                </button>
            </div>
        </section>
    )
}

export default Section3