import React from 'react'
import Tilt from 'react-tilt'
import Placeholder from '../assets/imgs/placeholder.png'


export default function Title() {
    return (
        <div className='l-title'>
            <div className='c-title'>
                <h1 className='c-title__text'>Title</h1>
            </div>
            <Tilt className="Tilt" options={{ max: 15, reverse: true, scale: 1 }}>
                <div className="Tilt-inner">
                    <img className='c-tilt' src={Placeholder}></img>
                </div>
            </Tilt>
        </div>
    )
}
