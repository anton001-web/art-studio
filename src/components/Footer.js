import React from 'react'

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='container'>
                <div className='footer-content'>
                    <div className='footer-top'>
                        <img src="./assets/images/logo.png" className='logo'/>
                        <ul className='footer-list list-FH'>
                            <li className='footer-list__item list-item__FH' data-gap><a href="#portf" className='footer-anchor anchor-FH'>Портфолио</a></li>
                            <li className='footer-list__item list-item__FH' data-gap><a href="#workKinds" className='footer-anchor anchor-FH'>Виды работ</a></li>
                            <li className='footer-list__item list-item__FH' data-gap><a href="#stInfo" className='footer-anchor anchor-FH'>О фотостудии</a></li>
                            <li className='footer-list__item list-item__FH' data-gap><a href="#services" className='footer-anchor anchor-FH'>Услуги и цены</a></li>
                            <li className='footer-list__item list-item__FH'><a href="#contacts" className='footer-anchor anchor-FH'>Контакты</a></li>
                        </ul>
                    </div>
                    <div className='footer-bottom'>
                        <div className='footer-social'>
                            <small className='footer-social__title'>Наши социальные сети:</small>
                            <div className='social-list'>
                                <img src="./assets/images/inst.png" className='social-ico'/>
                                <img src="./assets/images/fbook.png" className='social-ico'/>
                                <img src="./assets/images/twitter.png" className='social-ico'/>
                                <img src="./assets/images/tg.png" className='social-ico'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;