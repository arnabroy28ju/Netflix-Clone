import React, { useEffect, useState } from 'react';
import "./Nav.css"
function Nav() {
    const [show, handleShow] = useState(false);

    useEffect(() =>{
        window.addEventListener("scroll",()=>{
            if(window.scrollY > 100){
                handleShow(true)
            }else handleShow(false);
        });
        return ()=>{
            window.removeEventListener("scroll");
        }
    },[])

    return (
        <div className={`nav ${show && "nav_black"}`} >
            <img className="nav_logo" src="https://static2.cbrimages.com/wordpress/wp-content/uploads/2020/07/Netflix-Logo-Header.jpg" alt="logo"/>
            <img className="nav_avatar" src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="avatar" />
        </div>
    )
}

export default Nav;
