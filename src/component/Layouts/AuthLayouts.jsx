import React from 'react'
import { Link } from "react-router-dom"
const AuthLayouts = (props) => {
    const {children, title, type} = props
  
      return (
        <div className="flex justify-center min-h-screen items-center gap-3">
            <div className='w-full max-w-xs'>
                <h1 className='text-3xl font-bold mb-2  text-blue-500 '>{title}</h1>
                <p className='font-medium text-slate-500 mb-8 '>
                    Welcome, please enter your details 
                </p>
                {children}
                <p className="text-sm py-3 text-left w-full">
                    {type === "login" ? "Dont have an account?" : "Already have an account?"}
                    <Link className="font-bold text-blue-600" to={type === "login" ? "/register" : "/login"}>{type === "login" ? "  Sign Up" : "  Login"}
                    </Link>
                </p>
            </div>
        </div>
      )
  }
  
  export default AuthLayouts