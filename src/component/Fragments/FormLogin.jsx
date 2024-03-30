import InputForm from "../Elements/Input"
import Button from "../Elements/Button"
const FormLogin = () => {

    return (
        <form action=''>
        <InputForm label='Email' name='Email' type='email' placeholder='Exasmple@gmail.com' />
        <InputForm label='Password' name='Password' type='password' placeholder='********' />
        <Button classname='bg-blue-500 text-white w-full hover:bg-blue-400'>Login</Button>
      </form>
    )
}

export default FormLogin