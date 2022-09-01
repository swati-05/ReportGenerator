import React from 'react'
import MenuComponent from './MenuComponent'
import SideMenu from './SideMenu'

function SideNav() {
  return (
    <>
      <div className='h-screen w-48 bg-gray-300'>
        {/* <MenuComponent /> */}
        <SideMenu/>
      </div>
    </>
  )
}

export default SideNav
