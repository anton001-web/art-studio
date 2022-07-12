import React from 'react'

const stages = [
    {title: 'Заявка', subTitle: 'Съешь еще этих мягких французских булок, да выпей чаю. Съешь еще этих мягких. ', st: 'one'},
    {title: 'Бронь', subTitle: 'Съешь еще этих мягких французских булок, да выпей чаю. Съешь еще этих мягких. ', st: 'two'},
    {title: 'Сьёмка', subTitle: 'Съешь еще этих мягких французских булок, да выпей чаю. Съешь еще этих мягких. ', st: 'four'},
    {title: 'Состаавление Технического задания', subTitle: 'Съешь еще этих мягких французских булок, да выпей чаю. Съешь еще этих мягких. ', st: 'three'},
    {title: 'Готовые фото', subTitle: 'Съешь еще этих мягких французских булок, да выпей чаю. Съешь еще этих мягких. ', st: 'five'},
]

const Section5 = () => {
    return (
        <section className='section-stages'>
            <div className='container'>
                <div className='section-stages__content'>
                    <h1 className='section-stages__title title'>Этапы работ</h1>
                    <div className='stages-block'>
                        {
                            stages && stages.map((item, index) => (
                                <div className='stage' data-st={item.st}>
                                    <h2 className='stage_title' >{item.title}</h2>
                                    <p className='stage-subTitle'>
                                        {item.subTitle}
                                    </p>
                                    <span className='stage-number'>{index + 1}</span>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section5