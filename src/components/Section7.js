import React, {useState} from 'react'
import {section7CardsData} from "../utils/section7-cardsData";
import {PhotoshootItem} from "./PhotoshootItem";

const Section7 = () => {
    const [price, setPrice] = useState(0)
    const [cardType, setCardType] = useState('')
    const [onePrice, setOnePrice] = useState(2500)
    const [twoPrice, setTwoPrice] = useState(5000)
    const [threePrice, setThreePrice] = useState(7500)

    const updatePrice = (price, modalType) => {
        if(modalType === 1) {
            setOnePrice(onePrice + price)
        } else if (modalType === 2) {
            setTwoPrice(twoPrice + price)
        } else if (modalType===3) {
            setThreePrice(threePrice + price)
        }
    }

    return (
        <section className='photoshoot-price__section'>
            <div className='container'>
                <div className='photoshoot-price__content'>
                    <h1 className='photoshoot-price__title'>Стоимость фотосессии</h1>
                    <div className='photoshoot-cards__block'>
                        {
                            section7CardsData.map((item, index) => (
                                <PhotoshootItem
                                    item={item}
                                    key={index}
                                    updatePrice={updatePrice}
                                    index={index}
                                    price={price}
                                    cardType={cardType}
                                    onePrice={onePrice}
                                    twoPrice={twoPrice}
                                    threePrice={threePrice}
                                />
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section7