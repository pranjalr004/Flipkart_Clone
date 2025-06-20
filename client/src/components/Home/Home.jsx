import React from 'react'
import Navbar from './Navbar'
import Banner from './Banner'
import { Box, styled } from '@mui/material'
import { useEffect } from 'react'
import { useDispatch, useSelector} from 'react-redux'
import {getProducts} from '../../redux/actions/productAction'
import Slide from './Slide'
import MidSlide from './MidSlide'
import MidSection from './MidSection'

const Component=styled(Box)`
padding:10px;
background:#F2F2F2;`

export default function Home() {
  const {products}=useSelector(state=>state.getProducts)
  const dispatch=useDispatch()

  useEffect(()=>{
    dispatch(getProducts())
  },[dispatch])
  return (
    <>
      <Navbar/>
      <Component>
      <Banner/>
      <MidSlide products={products} title="Deal of the Day" timer={true}/>
      <MidSection/>
      <Slide products={products} title="Discounts For You" timer={false}/>
      <Slide products={products} title="Suggested Items" timer={false}/>
      <Slide products={products} title="Top Selection" timer={false}/>
      <Slide products={products} title="Recommended Items" timer={false}/>
      <Slide products={products} title="Trending Offers" timer={false}/>
      <Slide products={products} title="Season's Top Picks" timer={false}/>
      <Slide products={products} title="Top Deal on Accessories" timer={false}/>
      </Component>
    </>
  
  )
}
