import React from 'react'
import "./styles/Navbar.css"
const Navbar = ({handleClickShowModal}) => {
    

    return (
        <nav className='navbar'>
            <h1 className='navbar__title'>Users CRUD</h1>
            <button className='navbar__btnyang'><i class='bx bxs-yin-yang'></i></button>
            <button onClick={handleClickShowModal}className='navbar__btn'><i className='bx bx-cross'></i> Create New User</button>
        </nav>
    )
}

export default Navbar