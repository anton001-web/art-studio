import React from 'react'
import {FeedbackForm} from "./FeedbackForm";

const Section11 = () => {
    return (
        <section className='map-section'>
            <div className='container'>
                <div className='map-section__content'>
                    <div className='map-section__imgBlock'>
                        <img src="./assets/images/studio-map.png"/>
                    </div>
                    <div className='map-section__info'>
                        <div>
                            <h1 className='map-section__info-title title'>Форма Обратной связи</h1>
                            <FeedbackForm />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section11;