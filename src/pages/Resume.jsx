import React from 'react'
import { Link } from 'react-router-dom'
import { FaFileAlt } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";
function Resume() {
  return (
    <div className='my-5'>
      <h1 className='text-center'>Create a job winning Resume in Minutes</h1>
      <div className="container my-5">
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-4 p-5 rounded shadow text-center ">
            <FaFileAlt  className='fs-3 mb-2 text-primary'/>
            <h5>Add your information</h5>
            <p>Add prewritten examples to each section</p>
            <h5>Step 1</h5>

          </div>
          <div className="col-md-2"></div>
          <div className="col-md-4 p-5 rounded shadow text-center ">
            <FaDownload  className='fs-3 mb-2 text-danger'/>
            <h5>Download your Resume</h5>
            <p>Download and start applying</p>
            <h5>Step 2</h5>

          </div>
        </div>
      </div>
      <div className='text-center'><Link to={'/form'} className='btn text-light' style={{ backgroundColor: 'purple' }}>LET'S START</Link></div>
    </div>
  )
}

export default Resume