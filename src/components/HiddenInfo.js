import React, {forwardRef, useEffect} from 'react'

export const HiddenInfo = React.forwardRef((props, ref) => {
    return (
        <div ref={ref} className='studio-info__content'>
            <div className='studio-info__block'>
                <p className='studio-info__text'>
                    {props.content}
                </p>
            </div>
        </div>
    )
})
