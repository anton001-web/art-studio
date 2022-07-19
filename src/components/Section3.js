import React, {useState, useRef, useEffect} from 'react'
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination, EffectCoverflow} from "swiper";
import {section3SliderData} from "../utils/section3-sliderData";
import useMatchMedia from "use-match-media-hook";
import PhotoSwipeLightbox from "photoswipe/lightbox";


const Section3 = () => {
    const [swiperRef, setSwiperRef] = useState(null);
    const swiperRefTwo = React.createRef()
    const block = React.createRef()

    useEffect(() => {
        swiperRefTwo.current.children[0].id = 'swiper-list-for-gallery-two'

        let lightbox = new PhotoSwipeLightbox({
            gallery: '#swiper-list-for-gallery-two',
            children: 'a',
            pswpModule: () => import('photoswipe'),
        });
        lightbox.init();

    }, []);

    return (
        <section className='secondSwiper-section'>
            <div className='container'>
                <h1 className='secondSwiper-section__title title'>Наши локации</h1>
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
                    className='section3-swiper'
                    onSwiper={setSwiperRef}
                    ref={swiperRefTwo}
                    breakpoints={{
                        767: {
                            slidesPerView: 3
                        }
                    }}
                >
                    {
                        section3SliderData.map((item, index) => (
                            <SwiperSlide key={index} className='section3-swiper__slide'>
                                <a
                                    href={item.img}
                                    data-pswp-width={600}
                                    data-pswp-height={700}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <img src={item.img} className='section2-swiper_img'/>
                                </a>
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