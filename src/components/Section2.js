import React, {useState} from 'react'
import {section1SliderData} from "../utils/section1-sliderData";
import { Swiper, SwiperSlide } from 'swiper/react';
import {Navigation} from "swiper";
import useMatchMedia from 'use-match-media-hook'

import 'swiper/scss'

const queries = [
    '(max-width: 767px)'
]

const Section2 = () => {
    const [slidesView, setSlidesView] = useState(1)
    const [activeSlide, setActiveSlide] = useState(0);
    const [tablet] = useMatchMedia(queries)
    const galleryBg = React.createRef()

    const handleGallery = (e) => {
        if(e.target.dataset.openga) {
            if(!galleryBg.current.classList.contains('swiper-gallery')) {
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
                    modules={[Navigation]}
                    slidesPerView={slidesView}
                    centeredSlides={true}
                    centeredSlidesBounds={true}
                    navigation
                    loop={true}
                    spaceBetween={-83}
                    breakpoints={{
                        767: {
                            slidesPerView: slidesView === 1 ? 3 : 1
                        }
                    }}
                >
                    {
                        section1SliderData.map((item, index) => (
                            <SwiperSlide key={index} >
                                <img src={item.img} onClick={() => handleGallery} data-openga/>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </section>
    )
}

export default Section2;