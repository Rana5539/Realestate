import { Box, Typography } from '@mui/material'
import React from 'react'
import StoreIcon from '@mui/icons-material/Store';
import SellOutlined from '@mui/icons-material/SellOutlined';
function Sells() {
  return (
    <>
    <Box sx={{width:'100%',bgcolor:'lightcyan'}}>
    <Typography sx={{textAlign:'center',mt:4,fontSize:'30px',fontFamily:'Poppins',fontWeight:'500',pt:2}}>Services</Typography>
    <Typography sx={{textAlign:'center',fontSize:'15px',fontFamily:'Inria Sans',fontWeight:'500',color:'grey'}}>These are some services we provide in Real State</Typography>
    <Box sx={{width:'90%',height:'auto',display:'flex',justifyContent:'space-between',alignItems:'center',mt:3,mx:'auto'}}>
      <Box>
      <Box sx={{width:'20vh',height:'20vh',bgcolor:'rgb(133, 212, 238)',borderRadius:'50%',alignItems:'center',justifyContent:'center',display:'flex',transition:'0.4s',cursor:'pointer','&:hover': {
    transform:'scale(1.05)',
   
  },}}>
<SellOutlined sx={{fontSize:'60px',color:"black"}}/>
      </Box>
      <Typography sx={{textAlign:'center',fontSize:'20px',fontFamily:'Poppins',fontWeight:'500'}}>Sell Property</Typography>
      </Box>
    </Box>
    </Box>
    </>
  )
}
export default Sells