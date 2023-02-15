import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import Footer from './components/Footer'
import ModalForm from './components/ModalForm'
import Navbar from './components/Navbar'
import UsersList from './components/UsersList'

const BASE_URL = "https://users-crud.academlo.tech/"

function App() {
  const [users, setUsers] = useState([])
  const [isShowModal, setIsShowModal] = useState(false)
  const [updatingUser, setUpdatingUser] = useState()
  const [theme, setTheme] = useState("dark")

  const handleClickShowModal = () => {
    setIsShowModal((isShowModal) => !isShowModal)
  }

  const changeTheme = () => setTheme(theme === "dark" ? "light" : "dark")

  const createUser = (data) => {
    axios
      .post(`${BASE_URL}users/`, data)
      .then(() => {
        getAllUsers()
        handleClickShowModal()
      })
      .catch((err) => console.log(err));
  }

  const getAllUsers = () => {
    axios
      .get(`${BASE_URL}users/`)
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err))
  }

  const deleteUser = (id) => {
    axios
      .delete(`${BASE_URL}users/${id}/`)
      .then((res) => getAllUsers(res.data))
      .catch((err) => console.log(err));
  }

  const updateUser = (data, id) => {
    axios
      .patch(`${BASE_URL}users/${id}/`, data)
      .then(() => {
        getAllUsers()
        handleClickShowModal()
      })
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    getAllUsers()
  }, [])


  return (
    <div className="App" id={theme}> 
      <Navbar theme={theme} changeTheme={changeTheme} handleClickShowModal={handleClickShowModal} />
      <ModalForm
        handleClickShowModal={handleClickShowModal}
        isShowModal={isShowModal}
        createUser={createUser}
        updatingUser={updatingUser}
        updateUser={updateUser}
        setUpdatingUser={setUpdatingUser}
      />
      <UsersList
        deleteUser={deleteUser}
        users={users}
        setUpdatingUser={setUpdatingUser}
        handleClickShowModal={handleClickShowModal}
      />
      <Footer/>
    </div>
  )
}

export default App
