import React from 'react'
import { MdAttachEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

function Footer() {
  return (
    <div style={{height:'400px',backgroundColor:'purple'}} className='text-white d-flex justify-content-center align-items-center flex-column'>
        <h1 className='mb-4'>Contact us</h1>
        <h5><MdAttachEmail />  resumebuilder@gmail.com</h5>
        <h5><FaPhoneAlt /> 1234567890</h5>
        <h4 className='mt-4'>Connect with us</h4>
        <div  className='fs-3'>
            <FaWhatsapp className='mx-2' />
            <FaInstagram className='mx-2' />
            <FaFacebook className='mx-2' />
        </div>
        <p className='my-3'>Designed & build with ❤️ using React</p>
        

    </div>
  )
}

export default Footer