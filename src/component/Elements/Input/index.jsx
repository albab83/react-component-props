import Label from "./Label"
import React from "react"
import Input from "./Input"

const InputForm = (props) => {
    const {label, name, type, placeholder} = props
    return (
        <div className='mb-6'>
            <Label htmlFor={name} id={name}>{label}</Label>
            <Input type={type} name={name}id={name} placeholder={placeholder}/>
        </div>
    )
}

export default InputForm