import React, {useEffect, useState} from 'react'
import {ServiceModal} from "./ServiceModal";
import {useDispatch, useSelector} from "react-redux";
import {toggleService} from "../store/actions";

export const PhotoshootItem = ({item, updatePrice, index, price, cardType, onePrice, twoPrice, threePrice}) => {
    const serviceModal = React.createRef()
    const dispatch = useDispatch()
    const [modalTitles, setModalTitles] = useState('')
    const [count, setCount] = useState(0)

    const {visible, modalTitle, modalType, priceType} = useSelector(store => {
        const {service} = store
        return service
    })

    const handleService = (modalType) => {
        dispatch(toggleService(modalType))
    }

    useEffect(() => {
        if(visible) {
            setModalTitles(modalTitle)
            serviceModal.current.classList.add('service-modal__active')
        } else {
            serviceModal.current.classList.remove('service-modal__active')
        }
    }, [visible])


    const modalInputHandle = (count, prType) => {
        const cardPrice = count * prType
        updatePrice(cardPrice, modalType)
        dispatch(toggleService({}))
    }



    return (
        <div className='photoshoot-packet' data-packet={item.packetType}>
            <ServiceModal ref={serviceModal} close={handleService} modalTitle={modalTitle} modalType={modalType} inputHandle={modalInputHandle} priceType={priceType}/>
            <h2 className='photoshoot-packet__title'>{item.packetType}</h2>
            <h3 className='photoshoot-packet__price'>{index + 1 === 1 ? onePrice : index + 1 === 2 ? twoPrice : index + 1===3 ? threePrice : 0} &#8381;</h3>
            <span className='photoshoot-packet__location'>/ {item.locationQty}</span>
            <ul className='photoshoot-packet__options-list'>
                <li className='photoshoot-packet__list-item'><img src="./assets/images/check-circle.png"/> Длительность - {item.duration}</li>
                <li className='photoshoot-packet__list-item'><img src="./assets/images/check-circle.png"/>Исходники - До {item.sources} штук</li>
                <li className='photoshoot-packet__list-item'><img src="./assets/images/check-circle.png"/>Ретушь - {item.retouch} фото</li>
                <li className='photoshoot-packet__list-item'><img src="./assets/images/check-circle.png"/>Аренда фотостудии - Бесплатно</li>
                {item.packetType === 'maxi' ? (
                    <>
                        <li className='photoshoot-packet__list-item'><img src="./assets/images/check-circle.png"/>Визажист - Make-up, Укладка</li>
                        <li className='photoshoot-packet__list-item'><img src="./assets/images/check-circle.png"/>Предварительный подбор образов - До 8 образов</li>
                    </>
                ) : <li className='photoshoot-packet__list-item'><img src="./assets/images/check-circle.png"/>Любой образ</li>}
            </ul>
            {item.packetType === 'maxi' ? (
                <>
                    <div className='photoshoot-packet__services'>
                        <h3 className='services__title'>Дополнительные услуги</h3>
                        <div className='services-btns__block'>
                            <button className='services-btn' data-retu onClick={() => handleService({modalTitle: 'Дополнительная ретушь фото', modalType: index + 1, priceType: 250})}>Дополнительная ретушь фото - 1шт/250 &#8381;</button>
                        </div>
                    </div>
                </>
            ) : <div className='photoshoot-packet__services'>
                <h3 className='services__title'>Дополнительные услуги</h3>
                <div className='services-btns__block'>
                    <button className='services-btn' data-poz>Помощь в позиционирование</button>
                    <button className='services-btn' data-viza onClick={() => handleService({modalTitle: 'Визажист', modalType: index + 1, priceType: 2000})}>Визажист - + 2000 &#8381;</button>
                    <button className='services-btn' data-retu onClick={() => handleService({modalTitle: 'Дополнительная ретушь фото', modalType: index + 1, priceType: 250})}>Дополнительная ретушь фото -1шт/250&#8381;</button>
                </div>
            </div>}
            <button className='photoshoot-packet__btn'>
                забронировать
            </button>
        </div>
    )
}