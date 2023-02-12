import React from 'react'

const Button = ({style}) => {
  return (
    <button className={`py-4 px-6 rounded-lg bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none ${style}`}>Get Started</button>
  )
}

export default Button