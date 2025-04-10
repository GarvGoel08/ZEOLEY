"use client"

import React from 'react'
import localFont from "next/font/local"
import Header from '../components/Header'
import PrivacyPolicy from '../components/PrivacyPolicy'


const akagiPro = localFont({
  src : '../fonnts.com-Akagi_Pro_Medium.otf'
})


function page() {
  return (
    <div className={akagiPro.className}>
      <Header/>
      <PrivacyPolicy/>
    </div>
  )
}

export default page
