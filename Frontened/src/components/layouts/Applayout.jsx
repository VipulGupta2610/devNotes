import React from 'react'
import Header from '../pages/Header'
import Footer from '../pages/Footer'
import { Outlet } from 'react-router-dom'

function Applayout() {
  return <>

    <Header />
    <div className='min-h-[90vh] mx-auto  dark:bg-slate-900'><Outlet /></div>
    <Footer />
  </>
}

export default Applayout
