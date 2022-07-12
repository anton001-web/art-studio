import React from 'react'
import {section4GalleryImages} from "../utils/section4-galleryImages";


const Section4 = () => {
    return (
        <section className='section4-gallery'>
            <div className='container'>
                <div className='section4-gallery__content'>
                    <h1 className='section4-gallery__title title'>Виды услуг</h1>
                    <div className='section4-grid__block'>
                        {
                            section4GalleryImages.map((item, index) => (
                                <div className='grid_item' data-grid={item.item}>
                                    <img src={item.img} alt="" />
                                    <p className='grid_item--title'>{item.title}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section4