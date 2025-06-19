import React from 'react'
import Navbar from './Navbar'
import Banner from './Banner'
import { Box, styled } from '@mui/material'
import { useEffect } from 'react'
import { useDispatch, useSelector} from 'react-redux'
import {getProducts} from '../../redux/actions/productAction'
const Component=styled(Box)`
padding:10px;
background:#F2F2F2;`

export default function Home() {
  const getProducts=useSelector(state=>state.getProducts)
  const {products,error}=getProducts
  const dispatch=useDispatch()

  useEffect(()=>{
    dispatch(getProducts())
  },[dispatch])
  return (
    <>
      <Navbar/>
      <Component>
      <Banner/>
      </Component>
    </>
  
  )
}
