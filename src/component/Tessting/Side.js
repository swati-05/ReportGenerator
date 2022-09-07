import { Block } from '@mui/icons-material'
import React, { useState } from 'react'

function Side() {

    const [menuList, setmenuList] = useState('hidden')
    const menuClick = () => {
        menuList == 'hidden' ? setmenuList('w-44') : setmenuList('hidden')

    }
    const [navWidth, setNavWidth] = useState('h-full')
    const toggleNav = () => {
        navWidth == 'h-full' ? setNavWidth('h-0') : setNavWidth('h-full')
    }
    return (
        <>
            <div className='w-full h-10  bg-white shadow-lg'>
                <span>
                    <button className='bg-red-300 h-8 mt-1  w-16  p-2 rounded-r-full' onClick={toggleNav} >menu</button>
                </span>
                <span className='px-28 '>
                    <span className="text-gray-500">Group Name </span>
                    <span className="text-gray-500">Template Name  </span>
                    <span className="text-gray-500">Page Layout </span>
                </span>
            </div>


            <div className={`${navWidth} w-44  overflow-hidden h-screen bg-white transition-all duration-1000 shadow-xl rounded-r-xl`}>
                <ul className='relative p-6'>
                    <li className='relative text-gray-500'>
                        Default Template
                    </li>
                    <li>
                        <button className=' mt-1  text-left rounded-full' onClick={menuClick}>Group1</button>

                    </li>
                </ul>
            </div>

            <div className={`${menuList} h-auto p-4  -mt-[41rem] bg-gray-200 transition-all duration-1000 ml-44 drop-shadow-md  overflow-hidden  `}>
                <li>rdtfygu</li>
                <li>fghjk</li>
                <li>rdtfygu</li>
                <li>fghjk</li>
            </div>


        </>
    )
}

export default Side