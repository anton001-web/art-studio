import React, {useEffect} from 'react'
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper";
import {section10SliderData} from "../utils/section10-sliderData";
import {useDispatch, useSelector} from "react-redux";
import {toggleReview} from "../store/actions";

const Section10 = () => {
    const dispatch = useDispatch()
    const modalRef = React.createRef()

    const {visible} = useSelector(store => {
        const {review} = store
        return review
    })

    useEffect(() => {
        if(visible) {
            document.body.style.overflow = 'hidden'
            modalRef.current.classList.add('review-active')
        } else {
            document.body.style.overflow = 'visible'
            modalRef.current.classList.remove('review-active')
        }
    }, [visible])

    const handleModal = () => {
        dispatch(toggleReview())
    }

    return (
        <section className='review-section'>
            <div className='container'>
                <div className='review-section__content'>
                    <div className='review-modal' ref={modalRef}>
                        <div className='review-modal__content'>
                            <button className='letter-modal__close' onClick={() => handleModal()}>&times;</button>
                            <div className='review-modal__info'>
                                <h1 className='review-modal__title'>Форма обратной связи</h1>
                                <div className='review-modal__form'>
                                    <div className='name-field__block field-block'>
                                        <span className='name-field__title field-title'>Имя</span>
                                        <input type="text" className='name-field__input field-input' placeholder='Введите ваше имя'/>
                                    </div>
                                    <div className='mail-field__block field-block'>
                                        <span className='mail-field__title field-title'>E-mail</span>
                                        <input type="text" className='mail-field__input field-input' placeholder='Введите вашу почту'/>
                                    </div>
                                    <div className='review-field__block field-block'>
                                        <span className='review-field__title field-title'>Отзыв</span>
                                        <div className='review-input-block'>
                                            <input type="text" className='review-field__input field-input' placeholder='Введите ваш отзыв'/>
                                            <img src="./assets/images/review-add.png" className='review-add__img'/>
                                        </div>
                                    </div>
                                </div>
                                <button className='review-modal__btn'>
                                    отправить
                                </button>
                                <p className='review-modal__subInfo'>
                                    Нажимая кнопку «Отправить», вы даете согласие на обработку персональных данных и соглашаетесь с <a href="#">политикой конфиденциальности</a>
                                </p>
                            </div>
                            <div className='review-modal__imgBlock'>
                                <img src="./assets/images/review-modal.png"/>
                            </div>
                        </div>
                    </div>
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
                    <button className='sec10__add-review' onClick={() => handleModal()}>добавить отзыв</button>
                </div>
            </div>
        </section>
    )
}

export default Section10