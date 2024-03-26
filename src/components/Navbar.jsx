import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className='flex gap-12 justify-center items-center p-5'>
            <div className="nav-logo">

                <Link to={'/'}>
                    <img src="" alt="Logo" />
                </Link>
            </div>

            <div className="nav-url">
                <ul className='flex gap-4'>
                    <li><Link to={"/"}>Home</Link></li>
                    <li><Link to={"/"}>About</Link></li>
                    <li><Link to={"/"}>Contact</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar