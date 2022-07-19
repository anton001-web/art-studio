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
            document.documentElement.classList.add('active')
            burgerRef.current.classList.add('burger-active')
        } else {
            document.documentElement.classList.remove('active')
            burgerRef.current.classList.remove('burger-active')
        }
    }, [visible])

    const burgerHandle = () => {
        dispatch(toggleBurger())
    }


    return (
        <header className='header'>
            <div className="container">
                <div className='header-content'>
                    <img src="./assets/images/logo.png" className='logo'/>
                    <div className='header-list__block' ref={burgerRef}>
                        <ul className='header-list list-FH'>
                            <li className='header-list__item list-item__FH' data-gap><a href="#portf" className='header-anchor anchor-FH'>Портфолио</a></li>
                            <li className='header-list__item list-item__FH' data-gap><a href="#workKinds" className='header-anchor anchor-FH'>Виды работ</a></li>
                            <li className='header-list__item list-item__FH' data-gap><a href="#stInfo" className='header-anchor anchor-FH'>О фотостудии</a></li>
                            <li className='header-list__item list-item__FH' data-gap><a href="#services" className='header-anchor anchor-FH'>Услуги и цены</a></li>
                            <li className='header-list__item list-item__FH'><a href="#contacts" className='header-anchor anchor-FH'>Контакты</a></li>
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