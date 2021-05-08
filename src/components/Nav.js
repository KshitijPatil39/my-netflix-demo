import React, {useEffect, useState} from 'react';
import '../css/Nav.css';


function Nav() {

    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100){
                handleShow(true);
            } else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll", 0);
        };
    }, [])

    return (
        <div className={`nav ${show && "nav__black"}`}>
            <img 
            className="nav_logo"
            src = "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1198px-Netflix_2015_logo.svg.png"
            alt ="Netflix logo"/>

            <img 
            className="nav__avatar"
            src = "https://ih1.redbubble.net/image.618427277.3222/flat,800x800,075,f.u2.jpg"
            alt = "User logo"/>
        </div>
    )
}

export default Nav;
