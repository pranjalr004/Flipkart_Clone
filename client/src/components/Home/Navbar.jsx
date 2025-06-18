import { Box, styled, Typography } from '@mui/material'
import React from 'react'
import { navData } from '../../constants/Data'

const Container=styled(Box)`
padding:12px 8px;
text-align:center;`

const Text=styled(Typography)`
font-size:14px;
font-weight:600;
font-family:inherit;`

const Component=styled(Box)(({theme})=>({
  display:'flex',
  justifyContent:'space-between',
  margin:'55px 130px 0 130px !important',
  overflowY:'overlay',
  [theme.breakpoints.down('lg')]:{
    margin:'0px !important'
  }
}))

export default function Navbar() {
  return (
    <Component>
      {
        navData.map(temp=>(
          <Container>
            <img src={temp.url} alt='temp' style={{width:64}}/>
            <Text>{temp.text}</Text>
          </Container>
        ))
      }
    </Component>
  )
}
