"use client"

import React from 'react'
import localFont from "next/font/local"
import TermsAndConditions from '../components/TermsAndConditions'
import Header from '../components/Header'

const akagiPro = localFont({
  src : '../fonnts.com-Akagi_Pro_Medium.otf'
})


function page() {
  return (
    <div className={akagiPro.className}>
      <Header/>       
      <TermsAndConditions/>
    </div>
  )
}

export default page
