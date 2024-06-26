import React from 'react'

const Button = (props) => {
   
    const {classname, children, onClick = () => {}, type="button"} = props
    return (
      <div>
        <button
          onClick={() => onClick()}
          type={type}
          className={`inline-block rounded ${classname} px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong `}>
          {children}
        </button>
      </div>
    )
  }

export default Button