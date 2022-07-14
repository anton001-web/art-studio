import React from 'react'
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper";
import {section10SliderData} from "../utils/section10-sliderData";

const Section10 = () => {

    return (
        <section className='review-section'>
            <div className='container'>
                <div className='review-section__content'>
                    <h1 className='title review-section__title'>Отзывы</h1>
                    <Swiper
                        modules={[Navigation]}
                        navigation
                        slidesPerView={1}
                        loop={true}
                        centeredSlides={true}
                        centeredSlidesBounds={true}
                        className='sec10-slider'
                        spaceBetween={40}
                        breakpoints={{
                            767: {
                                centeredSlides: false,
                                slidesPerView: 2
                            },
                            1024: {
                                centeredSlides: true,
                                slidesPerView: 3
                            }
                        }}
                    >
                        {
                            section10SliderData.map((item, index) => (
                                <SwiperSlide key={index} className='sec10-swiper__slide'>
                                    <div className='sec10-swiper__slide-imgBlock'>
                                        <img src={item.img} className='sec10-swiper__img'/>
                                    </div>
                                    <div className='sec10-swiper__slide-info'>
                                        <h1 className='sec10-swiper__slide-title'>{item.name}</h1>
                                        <p className='sec10-slide__review'>{item.review}</p>
                                        <button className='sec10-slide__button'>
                                            Показать ещё
                                        </button>
                                    </div>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                    <button className='sec10__add-review'>добавить отзыв</button>
                </div>
            </div>
        </section>
    )
}

export default Section10