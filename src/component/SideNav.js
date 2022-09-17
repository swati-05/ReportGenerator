import React from 'react'
import MenuComponent from './MenuComponent'
import Navbar from './Navbar'
import SideMenu from './SideMenu'

function SideNav() {
  return (
    <>
    

      <div className='flex flex-row'>
        <div className=''>
        <SideMenu />
        </div>
        <div className='w-full'>
          <Navbar />
        </div>
      </div>
    </>
  )
}

export default SideNav
