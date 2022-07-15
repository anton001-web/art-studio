import React from 'react'

export const FeedbackForm = () => {
    return (
        <>
            <div className='feedback-form'>
                <div className='name-field__block field-block'>
                    <span className='name-field__title field-title'>Имя</span>
                    <input type="text" className='name-field__input field-input' placeholder='Введите ваше имя'/>
                </div>
                <div className='mail-field__block field-block'>
                    <span className='mail-field__title field-title'>E-mail</span>
                    <input type="text" className='mail-field__input field-input' placeholder='Введите вашу почту'/>
                </div>
                <div className='phone-field__block field-block'>
                    <span className='phone-field__title field-title'>Телефон</span>
                    <input type="text" className='phone-field__input field-input' placeholder='Введите ваш телефон'/>
                </div>
            </div>
            <button className='modal__btn'>
                отправить
            </button>
            <p className='modal__subInfo'>
                Нажимая кнопку «Отправить», вы даете согласие на обработку персональных данных и соглашаетесь с <a href="#">политикой конфиденциальности</a>
            </p>
        </>
    )
}
