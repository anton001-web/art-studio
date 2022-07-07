import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {toggleBurger} from "../store/actions";

const Header = () => {
    const dispatch = useDispatch()
    const burgerRef = React.createRef()

    const {visible} = useSelector(store => {
        const {burger} = store
        return burger
    })

    useEffect(() => {
        if(visible) {
            document.body.style.overflow = 'hidden'
            burgerRef.current.style.left = '0%'
        } else {
            document.body.style.overflow = 'visible'
            burgerRef.current.style.left = '-120%'
        }
    }, [visible])

    const burgerHandle = () => {
        dispatch(toggleBurger())
    }

    return (
        <header className='header'>
            <div className="container">
                <div className='header-content'>
                    <img src="./assets/images/logo.png" className='header-logo'/>
                    <div className='header-list__block' ref={burgerRef}>
                        <ul className='header-list'>
                            <li className='header-list__item' data-gap><a href="#"
                                                                          className='header-anchor'>Портфолио</a></li>
                            <li className='header-list__item' data-gap><a href="#" className='header-anchor'>Виды
                                работ</a></li>
                            <li className='header-list__item' data-gap><a href="#" className='header-anchor'>О
                                фотостудии</a></li>
                            <li className='header-list__item' data-gap><a href="#" className='header-anchor'>Услуги и
                                цены</a></li>
                            <li className='header-list__item'><a href="#" className='header-anchor'>Контакты</a></li>
                        </ul>
                    </div>
                    <button className='header-callback-btn'>
                        обратный звонок
                    </button>
                    <a className='header-phone__btn'>
                        +7 (499) 344 60 91
                    </a>
                    <div className='header-btns_hidden'>
                        <a href="#"><img src="./assets/images/header-phone-ico.png" className='header-phone-ico'/></a>
                        <button className='burger-toggle' onClick={burgerHandle}>
                            <span className='bar'></span>
                            <span className='bar'></span>
                            <span className='bar'></span>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header