import React from 'react'

const Section1 = () => {
    return (
        <section className='section-first' id='stInfo'>
            <div className='container'>
                <div className='section-first__content'>
                    <h1 className='section-first__title title'>Профессиональная фотосессия в студии</h1>
                    <h2 className='section-first__subTitle'>Наша фотостудия позволит исполнить ваши мечты</h2>
                    <p className='section-first__text'>
                        <span>Фотографии стали неотъемлемой частью нашей жизни. Это теперь не просто памятные снимки в альбомах, ныне фото становиться способом понравиться окружающим, получить восхищение, заявить о себе всему миру.</span> Выбор правильной фотостудии занимает далеко не последнее место в получение фотографий. И мы с точностью заявляем, что нашей фотостудией вы останетесь довольны и еще не раз захотите возвращаться к нам.
                    </p>
                    <button className='section-first__button'>
                        получить консультацию
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Section1