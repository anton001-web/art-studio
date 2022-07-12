import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {toggleInfoTwo} from "../store/actions";
import {HiddenInfo} from "./HiddenInfo";

const sec8infoContent =
    <>
        <span className='studio-info__abz'>
            Воплотите мечту с нашей фотостудией и приобретите красивые, уникальные, качественные фотографии, выбрав один из наших залов. А их, -на секундочку, -аж семь штук.
        </span>
        <br/>
        <span className='studio-info__abz'>
            Каждый наш зал оборудован интерьером и профессиональным оборудованием, и подойдет для любой фотоссесии, а мы хотим рассказать вам о все подробнее.
        </span>
        <span className='studio-info__abz'>
            Какие идеи можно вополтить?
        </span>
        <span className='studio-info__abz'>
            - Фотосессия Love Story
        </span>
        <span className='studio-info__abz'>
            Мечтаете показать всему миру вашу историю создания любви или хранить снимки в памятном альбоме, то это фотоссесия отлично подойдет вам. Расскажите вашу историю с любимым человеком в фотографиях в необычном месте.
        </span>
        <span className='studio-info__abz'>
            - Семейная фотосессия
        </span>
        <span className='studio-info__abz'>
            Семья — это самое главное в жизни любого человека. Хотите повесить фотографии в вашем уютном доме, смотреть на них и испытывать прилив нежности, значит семейная фотоссесия в нашей фотостудии станет отличным вариантом.
        </span>
        <span className='studio-info__abz'>
            - Фотосессия для беременных девушек
        </span>
        <span className='studio-info__abz'>
            Желаете сохранить воспоминания о прекрасном времени в жизни каждой женщины? Наши локации помогут вам организовать и воссоздать в фотографиях любовь матери и еще не родившегося ребенка.
        </span>
        <span className='studio-info__abz'>
            - Фотосессия "Деловой стиль"
        </span>
        <span className='studio-info__abz'>
            Вы не из тех, кто любит яркие чувства, эмоции и считаете себя сдержанным. Вам нужны фотографии, где вы раскроетесь как профессионал, произведете впечатление как деловой человек. Эта фотоссесия станет вашим правильным решением.
        </span>
        <span className='studio-info__abz'>
            - Фотосессия для девушек и парней
        </span>
        <span className='studio-info__abz'>
            Хочешь стать кем-то другим? Или, наоборот, показать свое «я»? Фотоссесия для девушек или парней поможет воплотить любые идеи.
        </span>
        <span className='studio-info__abz'>
            Помимо вышеперечисленного есть и другие стили фотоссесий. Вы самостоятельно выбираете, а наши фотозалы помогают вам и вдохновляют.
        </span>
        <span className='studio-info__abz'>
            Кстати, о них
        </span>
        <span className='studio-info__abz'>
            Все семь фото локаций уникальные в своем роде. Мы пытались воссоздать непохожесть на другие фотостудии не только в городе, но и во всей стране. Каждый зал отличается от других по дизайнерскому решению и интерьеру. И каждый зал пропитан своим духом, стилем и видится для каждого нашего посетителя по-разному. Светлые помещения помогут получить более качественные, яркие фотоснимки. Трендовая мебель и другие предметы интерьера можно двигать и активно использовать в фотосъемках. Локации подойдут для любых людей и задач: блогеров и медийных личностей, обычных и счастливых семей, предпринимателей и подростков. Что еще нужно знать о нас?
        </span>
        <span className='studio-info__abz'>
            Оборудование. Неотъемлемая часть любой фотостудии и нередко владельцы фотостудий экономят на этой важной части. Мы используем все оборудование только от профессиональных продавцов, которые уже не один год предлагают свои товары на мировом рынке. Вы найдете все что нужно и необходимо для работы фотографов, для создания образов и света. Ведь именно от оборудования часто зависит качество получающихся фотоснимков.
        </span>
    </>



const Section8 = () => {
    const dispatch = useDispatch()
    const sec8Href = React.createRef()
    const sec8Arrow = React.createRef()

    const {visibleTwo} = useSelector(store => {
        const {info} = store
        return info
    })

    useEffect(() => {
        if(visibleTwo) {
            sec8Arrow.current.style.transform = 'rotate(0deg)'
            sec8Href.current.classList.add('active')
        } else {
            sec8Arrow.current.style.transform = 'rotate(180deg)'
            sec8Href.current.classList.remove('active')
        }
    }, [visibleTwo])


    const handleInfo = () => {
        dispatch(toggleInfoTwo())
    }

    return (
        <section className='studio-info__section'>
            <div className='container'>
                <div className='studio-info__section-content'>
                    <h1 className='studio-info__section-title title'>Фотоисскуство в тренде. Любая фотосессия ваша история</h1>
                    <HiddenInfo ref={sec8Href} content={sec8infoContent}/>
                    <button className='toggle-info' onClick={handleInfo}>
                        {visibleTwo === 'sec8' ? 'Скрыть' : 'Показать'} <img src="./assets/images/Rectangle521.png" className='studio-info__arrow' ref={sec8Arrow}/>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Section8;