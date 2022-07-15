import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {toggleLetter} from "../store/actions";
import {FeedbackForm} from "./FeedbackForm";

const Section9 = () => {
    const dispatch = useDispatch()
    const letterModal = React.createRef()

    const {visible} = useSelector(store => {
        const {letter} = store
        return letter
    })

    useEffect(() => {
        if(visible) {
            document.body.style.overflow = 'hidden'
            letterModal.current.classList.add('letter-active')
        } else {
            document.body.style.overflow = 'visible'
            letterModal.current.classList.remove('letter-active')
        }
    }, [visible])

    const handleModal = () => {
        dispatch(toggleLetter())
    }

    return (
        <section className='letter-section'>
            <div className='container'>
                <div className='letter-modal' ref={letterModal}>
                    <div className='letter-modal__content'>
                        <button className='letter-modal__close' onClick={() => handleModal()}>&times;</button>
                        <div className='letter-modal-imgBlock'>
                            <img src="./assets/images/letter-modal.png" />
                        </div>
                        <div className='letter-modal__info'>
                            <h1 className='letter-modal__title'>Форма обратной связи</h1>
                            <FeedbackForm />

                        </div>
                    </div>
                </div>
                <div className='letter-section__content'>
                    <h1 className='title letter-section__title'>Подарочный сертификат на фотосессию</h1>
                    <div className='letter-section__body'>
                        <div className='letter-body__info'>
                            <span className="letter-body__info-title">сертификат на фотосессию</span>
                            <h1 className="letter-body__info-subTitle">Это подарок, который западает в душу</h1>
                            <ul className="letter-body__info-list">
                                <li className="letter-body__list-item"><img src="./assets/images/letter-check.png"/>Креативное оформление</li>
                                <li className="letter-body__list-item"><img src="./assets/images/letter-check.png"/>Открытый календарь</li>
                                <li className="letter-body__list-item"><img src="./assets/images/letter-check.png"/>Всё включено</li>
                            </ul>
                        </div>
                        <div className='letter-block'>
                            <img src="./assets/images/letter.png" alt=""/>
                            <span className='letter-title'>Срок действия сертификата: 2 месяца со дня приобретения.</span>
                            <button className='letter-button' onClick={() => handleModal()}>приобрести</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section9;