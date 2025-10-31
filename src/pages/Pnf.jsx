import React from 'react'
import { Link } from 'react-router-dom'
import { FaLongArrowAltLeft } from "react-icons/fa";

function Pnf() {
  return (
    <div className='d-flex justify-content-center align-items-center flex-column p-5'>
      <h1>404!</h1>
      <img width={'250px'} height={'250px'} src="https://i.pinimg.com/originals/a8/12/1a/a8121abee959e18cbad25ad4046f76d8.gif" alt="page not found" />
      <h3>Page Not Found</h3>
      <p>Sorry we could'nt find the page you're looking for.</p>
      <Link to={'/'} className='text-success'> <FaLongArrowAltLeft />Back to Home</Link>

    </div>
  )
}

export default Pnf