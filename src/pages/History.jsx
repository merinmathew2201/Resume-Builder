import { Stack } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { MdDelete } from "react-icons/md";
import { FaLongArrowAltLeft } from "react-icons/fa";


function History() {
  return (
    <div>
      <h1 className="text-center my-5">Downloaded Resume History</h1>
      <Link to={'/form'} className='float-end mx-5' style={{marginTop:'-80px'}}><FaLongArrowAltLeft /> Back</Link>
      <Stack direction={'row'} sx={{flexWrap:'wrap',gap:'10px',m:5}}>
        {/* duplicated div */}
            <div className="shadow p-5">
              <div className="d-flex align-items-center mb-2">
                <h5>Review At: date & time</h5>
                <button className='btn text-danger fs-4'><MdDelete /></button>
              </div>
              <img width={'250px'} height={'250px'} src="https://marketplace.canva.com/EAGmJ13p8zE/1/0/1131w/canva-black-and-white-minimalist-professional-resume-a4-X9UHTVTOsqQ.jpg" alt="resume" />
            </div>
          </Stack>
    </div>
  )
}

export default History