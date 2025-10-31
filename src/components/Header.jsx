import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Tooltip } from '@mui/material';
import { Link } from 'react-router-dom';

function Header() {
    const aboutUs = "Our Resume Builder website helps job seekers create professional, ATS-friendly resumes quickly and easily. With ready-made templates, smart formatting, and simple editing tools, anyone can build a polished resume in minutes. Whether you’re a fresher or an experienced professional, our goal is to help you stand out and land your dream job faster."
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{backgroundColor:'purple'}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <img width={'50px'} src="https://cdn-icons-png.flaticon.com/256/942/942799.png" alt="logo" />
          </IconButton>
          <Typography variant="" component="" sx={{ flexGrow: 1 }}>
            <Link to={'/'} className='text-light text-decoration-none'>rBuilder</Link>
          </Typography>
          <Tooltip title={aboutUs}><Button color="inherit">ABOUT US</Button></Tooltip>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header