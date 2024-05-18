import React from 'react'
import InputForm from "../Elements/Input"
import Button from "../Elements/Button"


const FormLogin = () => {
  
  const hendleLogin = (event) => {
    event.preventDefault()
    localStorage.setItem("email", event.target.email.value)
    localStorage.setItem("password", event.target.password.value)
    window.location.href = "/products"}
  return (

    <form onSubmit={hendleLogin}>
        <InputForm label='Email' name='email' type='email' placeholder='Exasmple@gmail.com' />
        <InputForm label='Password' name='password' type='password' placeholder='********' />
        <Button type='submit' classname='bg-blue-500 text-white w-full hover:bg-blue-400'>Login</Button>
    </form>
  )
}

export default FormLogin