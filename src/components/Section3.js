import React, {useState, useRef} from 'react'
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination, EffectCoverflow} from "swiper";
import {section3SliderData} from "../utils/section3-sliderData";
import useMatchMedia from "use-match-media-hook";

const queries = [
    '(max-width: 767px)'
]

const Section3 = () => {
    const [tablet] = useMatchMedia(queries)
    const [slidesView, setSlidesView] = useState(1)
    const [swiperRef, setSwiperRef] = useState(null);
    const block = React.createRef()

    let currentSlide;

    const handleGallery = (e) => {
        if(e.target.dataset.opengal) {
            if(!block.current.classList.contains('secondSwiper-gallery_block--active')) {
                swiperRef.slideToLoop(e.target.dataset.ind - 2, 100)
                block.current.classList.add('secondSwiper-gallery_block--active')
                setSlidesView(-1)
            } else {
                if(e.target.dataset.closegal) {
                    swiperRef.slideToLoop(0, 100)
                    setSlidesView(tablet ? -1 : 1)
                    block.current.classList.remove('secondSwiper-gallery_block--active')
                }
            }
        }
    }

    const slideChange = (sw) => {
        currentSlide = sw.realIndex
    }

    return (
        <section className='secondSwiper-section'>
            <div className='container'>
                <h1 className='secondSwiper-section__title title'>Наши локации</h1>
                <div className='secondSwiper-gallery_block' ref={block} data-closegal data-opengal onClick={handleGallery}>
                    <Swiper
                        effect={'coverflow'}
                        coverflowEffect={{
                            rotate: 45,
                            depth: 200
                        }}
                        modules={[Navigation, Pagination, EffectCoverflow]}
                        slidesPerView={tablet ? 1 : slidesView + 2}
                        centeredSlides={true}
                        centeredSlidesBounds={true}
                        loop={true}
                        navigation
                        spaceBetween={40}
                        className='section3-swiper'
                        onSwiper={setSwiperRef}
                        onSlideChange={slideChange}
                    >
                        {
                            section3SliderData.map((item, index) => (
                                <SwiperSlide key={index} className='section3-swiper__slide'>
                                    <img src={item.img} className='section2-swiper_img' onClick={() => handleGallery} data-opengal data-ind={index}/>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>
                <button className='secondSwiper-section__button'>
                    выбрать локацию
                </button>
            </div>
        </section>
    )
}

export default Section3