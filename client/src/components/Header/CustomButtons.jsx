import { Box,Button, styled, Typography } from '@mui/material'
import {ShoppingCart} from "@mui/icons-material"
import React, { useState,useContext } from 'react'
import LoginDialog from '../Login/LoginDialog'
import  { LoginContext } from '../../context/ContextProvider'
import Profile from './Profile'

const Wrapper=styled(Box)`
display:flex;
margin:0 3% 0 auto;
& > button, & > p, & > div{
margin-right:40px;
font-size:16px;
align-items:center;
}`

const Container=styled(Box)`
display:flex;`

const LoginButton=styled(Button)`
color:#2874F0;
background:#FFFFFF;
text-transform:none;
padding:5px 40px;
border-radius:2px;
box-shadow:none;
font-weight:600;
height:32px;
`
export default function CustomButtons() {
  const [open,SetOpen]=useState(false);
  const {account,setAccount}=useContext(LoginContext)
  const openDialog=()=>{
    SetOpen(true)
  }
  return (
    <Wrapper>
      {
        account ? <Profile account={account} setAccount={setAccount}/> :
        <LoginButton variant='contained' onClick={()=>openDialog()}>Login</LoginButton>
      }
      <Typography style={{marginTop:3,width:135}}>Become a Seller</Typography>
      <Typography style={{marginTop:3}}>More</Typography>

      <Container>
        <ShoppingCart/>
        <Typography>Cart</Typography>
      </Container>
      <LoginDialog open={open} setOpen={SetOpen}/>
    </Wrapper>
  )
}
