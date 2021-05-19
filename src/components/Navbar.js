import React from 'react'

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-custom c-navbar g--fadeInTop">
            <div className="container-fluid">

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <a className="c-brand__phone" href="#">Navbar</a>
                <div className="collapse navbar-collapse" id="navbarNav">
                <a className="c-brand__desktop" href="#">Navbar</a>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active g--underline" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active g--underline" aria-current="page" href="#">Contact</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active g--underline" aria-current="page" href="#">About</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
