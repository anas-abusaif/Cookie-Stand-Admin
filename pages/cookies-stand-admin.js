import React from 'react'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import { useState } from 'react'

export default function CookieStandAdmin() {
  let [stands,setStands]=useState([])

  let clickHandler=(e)=>{
    e.preventDefault()
  
    let stand={
      location:e.target.getLocation.value,
      max:e.target.max.value,
      min:e.target.min.value,
      avg:e.target.avg.value
    }
    setStands(stands.concat([stand]))
    console.log(stands)
  }

  return (
    <div>
      <Header/>
      <Main clickHandler={clickHandler} stands={stands}/>
      <Footer stands={stands}/>
    </div>
  )
}

