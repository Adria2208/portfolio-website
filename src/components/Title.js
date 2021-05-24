import React from 'react'
import Tilt from 'react-tilt'
import Placeholder from '../assets/imgs/placeholder.png'
import Technologies from '../assets/imgs/technologies.png'

import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

export default function Title() {
    return (
        <div data-aos='fade-down' className='l-title'>
            <div className='c-title'>
                <h1 className='c-title__text'>Title</h1>
            </div>
            <Tilt className="Tilt w-75 pt-5 pb-5 g--center" options={{ max: 15, reverse: true, scale: 1 }}>
                <div className="Tilt-inner">
                    <img className='c-tilt' src={Technologies}></img>
                </div>
            </Tilt>
        </div>
    )
}
