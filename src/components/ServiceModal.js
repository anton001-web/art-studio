import React, {forwardRef} from 'react'

export const ServiceModal = forwardRef((props, ref) => {
    const inputRef = React.createRef()

    const handleSubmit = () => {
        props.inputHandle(inputRef.current.value, props.priceType)
        inputRef.current.value = ''
    }

    return (
        <div className='service-modal' ref={ref}>
            <div className='service-modal__content' data-type={props.modalType}>
                <button className='service-modal__close' onClick={props.close}>&times;</button>
                <h1 className='service-modal__title'>{props.modalTitle}</h1>
                <div className='input-service-block'>
                    <p className='input-service__title'>Количество</p>
                    <input type="text" placeholder='Введите количество' ref={inputRef}/>
                    <button className='service-modal__submit' onClick={handleSubmit}>
                        сохранить
                    </button>
                </div>
            </div>
        </div>
    )
})

