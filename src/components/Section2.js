import React, {useEffect, useState} from 'react'
import {section1SliderData} from "../utils/section1-sliderData";
import { Swiper, SwiperSlide } from 'swiper/react';
import {Navigation, Pagination} from "swiper";
import useMatchMedia from 'use-match-media-hook'
import PhotoSwipeLightbox from "photoswipe/lightbox";

import "photoswipe/dist/photoswipe.css";
import 'swiper/scss'


const Section2 = () => {
    const [activeSlide, setActiveSlide] = useState(0);
    const [swiperRef, setSwiperRef] = useState(null);
    const secondSwRef = React.createRef()

    useEffect(() => {
        secondSwRef.current.children[0].id = 'swiper-list-for-gallery'

        let lightbox = new PhotoSwipeLightbox({
            gallery: '#swiper-list-for-gallery',
            children: 'a',
            pswpModule: () => import('photoswipe'),
        });
        lightbox.init();

    }, []);

    return (
        <section className='firstSwiper-section' id='portf'>
            <h1 className='firstSwiper-section__title title'>Наши роботы</h1>
            <Swiper
                modules={[Navigation, Pagination]}
                slidesPerView={3}
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
                ref={secondSwRef}
                onSwiper={setSwiperRef}
            >
                {
                    section1SliderData.map((item, index) => (
                        <SwiperSlide key={index} className='section2-swiper__slide'>
                            <a
                                href={item.img}
                                data-pswp-width={600}
                                data-pswp-height={700}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img src={item.img}
                                     className='section2-swiper__slide-img'
                                />
                            </a>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </section>
    )
}

export default Section2;