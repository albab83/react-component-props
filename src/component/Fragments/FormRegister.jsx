import React from 'react'
import InputForm from "../Elements/Input"
import Button from "../Elements/Button"
const FormRegister = () => {

    return (
        <form action=''>
        <InputForm label='Full Name' name='fullname' type='text' placeholder='Insert your fullname' />
        <InputForm label='Email' name='Email' type='email' placeholder='Exasmple@gmail.com' />
        <InputForm label='Password' name='Password' type='password' placeholder='********' />
        <InputForm label='Confirm Password' name='confirmpassword' type='password' placeholder='********' />
        <Button classname='bg-blue-500 text-white w-full hover:bg-blue-400'>Register</Button>
      </form>
    )
}

export default FormRegister