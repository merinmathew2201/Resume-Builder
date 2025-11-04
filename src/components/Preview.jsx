import React from 'react'
import {Box,Divider,Paper, Stack,Button} from '@mui/material';


function Preview({resumeDetails}) {
  return (
    <>
      <Box component="section">
        <Paper elevation={3} className='m-5 text-center p-5'>
          <h2>{resumeDetails?.fullName}</h2>
          <h5>{resumeDetails?.jobTitle}</h5>
          <p><span>{resumeDetails?.location}</span> | <span>{resumeDetails?.email}</span> | <span>{resumeDetails?.phone}</span></p>
          <p>
            <a href={resumeDetails?.github} target='_blank' className='me-1'>{resumeDetails?.github}</a> |
            <a href={resumeDetails?.linkedin} target='_blank' className='mx-1'>{resumeDetails?.linkedin}</a> |
            <a href={resumeDetails?.porfolio} target='_blank' className='ms-1'>{resumeDetails?.porfolio}</a>
          </p>
          <Divider sx={{fontSize:'25px'}}>Summary</Divider>
          <p style={{textAlign:'justify'}}>{resumeDetails?.summary}</p>
          <Divider sx={{fontSize:'25px'}}>Education</Divider>
          <h5>{resumeDetails?.course}</h5>
          <p><span>{resumeDetails?.college}</span> | <span>{resumeDetails?.university}</span> | <span>{resumeDetails?.passoutYear}</span></p>
          <Divider sx={{fontSize:'25px'}}>Work Experience</Divider>
          <h5>{resumeDetails?.jobType}</h5>
          <p><span>{resumeDetails?.company}</span> | <span>{resumeDetails?.cLocation}</span> | <span>{resumeDetails?.duration}</span></p>
          <Divider sx={{fontSize:'25px'}}>Skills</Divider>
          <Stack direction={'row'} justifyContent={'space-evenly'} sx={{flexWrap:'wrap',gap:'10px',my:2}}>
            {/* duplicated */}
            {
              resumeDetails?.skills?.map(item=>(
                <Button key={item} variant="contained">{item}</Button>
              ))
            }
            
          </Stack>



          </Paper>
      </Box>
    </>
  )
}

export default Preview