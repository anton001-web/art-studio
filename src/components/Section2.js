import React, {useEffect, useState} from 'react'
import {section1SliderData} from "../utils/section1-sliderData";
import { Swiper, SwiperSlide } from 'swiper/react';
import {Navigation, Pagination} from "swiper";
import useMatchMedia from 'use-match-media-hook'

import 'swiper/scss'

const queries = [
    '(max-width: 767px)'
]

const Section2 = () => {
    const [slidesView, setSlidesView] = useState(3)
    const [activeSlide, setActiveSlide] = useState(0);
    const [initialSlide, setInitialSlide] = useState(0)
    const [tablet] = useMatchMedia(queries)
    const galleryBg = React.createRef()
    const slider = React.createRef()


    const handleGallery = (e) => {
        if(e.target.dataset.openga) {
            if(!galleryBg.current.classList.contains('swiper-gallery')) {
                setInitialSlide(e.target.dataset.ind)
                setSlidesView(1)
                galleryBg.current.classList.add('swiper-gallery')
            } else {
                if(e.target.dataset.closega) {
                    galleryBg.current.classList.remove('swiper-gallery')
                    setSlidesView(tablet ? 1 : 3)
                }
            }
        }
    }


    return (
        <section className='firstSwiper-section'>
            <h1 className='firstSwiper-section__title'>Наши роботы</h1>
            <div className='gallery-wrap' ref={galleryBg} data-openga data-closega onClick={handleGallery}>
                <Swiper
                    modules={[Navigation, Pagination]}
                    initialSlide={initialSlide}
                    slidesPerView={slidesView}
                    dots={true}
                    centeredSlides={true}
                    centeredSlidesBounds={true}
                    navigation
                    pagination={{
                        clickable: true
                    }}
                    loop={true}
                    className='section2-swiper'
                    spaceBetween={-160}
                    ref={slider}
                >
                    {
                        section1SliderData.map((item, index) => (
                            <SwiperSlide key={index} className='section2-swiper__slide'>
                                <img src={item.img} onClick={() => handleGallery} data-openga data-ind={index} className='section2-swiper__slide-img'/>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </section>
    )
}

export default Section2;