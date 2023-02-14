import React from 'react'
import "./styles/UserCard.css"

const UserCard = ({ user, deleteUser, setUpdatingUser, handleClickShowModal }) => {

    const handleClickEdit = () => {
        setUpdatingUser(user)
        handleClickShowModal()
    }

    return (
        <article className='userCard'>
            <h3 className='userCard__name'>{user.first_name} {user.last_name}</h3>
            <hr />
            <ul className='userCard__list'>
                <li className='userCard__item'><span>Email: </span>{user.email}</li>
                <li className='userCard__item'><span>Birthday: </span><i className='bx bx-gift'></i>{user.birthday}</li>
            </ul>
            <hr />
            <footer className='userCard__footer'>
            <button className='userCard__btn1' onClick={() => deleteUser(user.id)}><i className='userCard__btn1-icon bx bxs-trash'></i></button>
            <button className='userCard__btn2' onClick={handleClickEdit}><i className='userCard__btn2-icon bx bxs-edit'></i></button>
            </footer>
        </article>
    )
}

export default UserCard