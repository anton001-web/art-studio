import React, {useState} from 'react'
import {section1SliderData} from "../utils/section1-sliderData";
import { Swiper, SwiperSlide } from 'swiper/react';
import {Navigation} from "swiper";

import 'swiper/scss'


const Section2 = () => {
    const [slidesView, setSlidesView] = useState(3 )
    const [activeSlide, setActiveSlide] = useState(0);
    const galleryBg = React.createRef()

    const handleGallery = (e) => {
        if(e.target.dataset.openga) {
            if(!galleryBg.current.classList.contains('swiper-gallery')) {
                setSlidesView(1)
                console.log(setSlidesView)
                galleryBg.current.classList.add('swiper-gallery')
            } else {
                if(e.target.dataset.closega) {
                    galleryBg.current.classList.remove('swiper-gallery')
                    setSlidesView(3)
                }
            }
        }
    }

    const slidesPerView = () => {
        return slidesView
    }

    return (
        <section className='firstSwiper-section'>
            <div className='gallery-wrap' ref={galleryBg} data-openga data-closega onClick={handleGallery}>
                <Swiper
                    modules={[Navigation]}
                    slidesPerView={slidesPerView()}
                    centeredSlides={true}
                    centeredSlidesBounds={true}
                    navigation
                    loop={true}
                    spaceBetween={-65}
                    breakpoints={{
                        767: {
                            slidesPerView: slidesPerView()
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