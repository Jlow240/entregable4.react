import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import "./styles/ModalForm.css"

const defaultValues = {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    birthday: "",
};

const ModalForm = ({ isShowModal, handleClickShowModal, createUser, updatingUser, updateUser, setUpdatingUser }) => {

    const { register, handleSubmit, reset } = useForm()

    const submit = (data) => {
        if (updatingUser) {
            updateUser(data, updatingUser.id)
        } else
            createUser(data)
        reset(defaultValues)
    };

    const handleClickClose = () => {
        handleClickShowModal()
        reset(defaultValues)
        setUpdatingUser()

    }

    useEffect(() => {
        if (updatingUser) {
            reset(updatingUser);
        }
    }, [updatingUser])


    return (
        <section className={`modalForm ${isShowModal ? "activeForm" : ""}`}>
            <form onSubmit={handleSubmit(submit)} className='modalForm__form'>
                <h3 className='modalForm__form-title'>{updatingUser ? "Edit User" : "New User"}</h3>
                <i onClick={handleClickClose} className='modalForm__x bx bx-x'></i>
                <div className='modalForm__div'>
                    <label className='modalForm__label'>First Name</label>
                    <input className='modalForm__input' type="text" {...register("first_name")} placeholder=":D"/>
                </div>
                <div className='modalForm__div'>
                    <label className='modalForm__label'>Last Name</label>
                    <input className='modalForm__input' type="text" {...register("last_name")}  placeholder=":0"/>
                </div>
                <div className='modalForm__div'>
                    <label className='modalForm__label'>Email</label>
                    <input className='modalForm__input' type="email" {...register("email")} placeholder=":$"/>
                </div>
                <div className='modalForm__div'>
                    <label className='modalForm__label'>Password</label>
                    <input className='modalForm__input' type="password" {...register("password")} placeholder="~.~"/>
                </div>
                <div className='modalForm__div'>
                    <label className='modalForm__label'>Birthday</label>
                    <input className='modalForm__input' type="date" {...register("birthday")} placeholder="Birth"/>
                </div>
                <button className='modalForm__btn' >{updatingUser ? "Save Changes" : "Create User"}</button>
            </form>
        </section>
    )
}

export default ModalForm