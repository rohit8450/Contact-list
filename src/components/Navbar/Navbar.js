import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className='navbar navbar-expand-lg navbar-dark bg-dark py-2'>
            <div>
                <Link><img src="./contact-list.png" id='contact-icon' style={{margin: "0 20px", padding: "10px 0"}}  /></Link>
                <Link to='/' className='navbar-brand ml-5' style={{fontSize: "30px"}}>Contact List App</Link>
            </div>
        </nav >
    )
}

export default Navbar