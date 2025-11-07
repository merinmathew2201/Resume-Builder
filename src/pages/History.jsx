import { Stack } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { MdDelete } from "react-icons/md";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { removeHistoryAPI, viewHistoryAPI } from '../services/allAPI';


function History() {
  const [allHistory,setAllHistoryDetails] = useState([])

  console.log(allHistory);
  
  useEffect(()=>{
    getHistoryDetails()
  },[])

  const getHistoryDetails = async ()=>{
    try{
      const result = await viewHistoryAPI()
      // console.log(result);
      if(result.status==200){
        setAllHistoryDetails(result.data)
      }
    }catch(err){
      console.log(err);
    }
  }

  const handleDeleteHistory = async (id)=>{
    try{
      await removeHistoryAPI(id)
      getHistoryDetails()
    }catch(err){
      console.log(err);
      
    }
  }

  return (
    <div>
      <h1 className="text-center my-5">Downloaded Resume History</h1>
      <Link to={'/form'} className='float-end mx-5' style={{marginTop:'-80px'}}><FaLongArrowAltLeft /> Back</Link>
      <Stack direction={'row'} sx={{flexWrap:'wrap',gap:'10px',m:5}}>
        {/* duplicated div */}
            {
              allHistory?.length>0?
              allHistory.map(item=>(
                <div key={item?.id} className="shadow p-5">
                <div className="d-flex align-items-center mb-2">
                  <h5>Review At: {item?.timeStamp}</h5>
                  <button onClick={()=>handleDeleteHistory(item?.id)} className='btn text-danger fs-4'><MdDelete /></button>
                </div>
                <img width={'250px'} height={'250px'} src={item?.imgURL} alt="resume" />
              </div>
              ))
              :
              <p>No History is available</p>
            }
          </Stack>
    </div>
  )
}

export default History