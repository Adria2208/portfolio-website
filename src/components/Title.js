import React from 'react'
import Tilt from 'react-tilt'
import Placeholder from '../assets/imgs/placeholder.png'


export default function Title() {
    return (
        <div className='l-title g--fadeInRight'>
            <div className='c-title'>
                <h1 className='c-title__text'>Title</h1>
            </div>
            <Tilt className="Tilt w-75 pt-5 pb-5 g--center" options={{ max: 15, reverse: true, scale: 1 }}>
                <div className="Tilt-inner">
                    <img className='c-tilt' src={Placeholder}></img>
                </div>
            </Tilt>
        </div>
    )
}
