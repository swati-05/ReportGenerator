import React, { useState } from 'react'
import CalendarComponent from './CalendarComponent'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';


function Navbar() {

   const [viewCalendar, setviewCalendar] = useState('hidden')

   const showCalendar = () => {
      viewCalendar == 'hidden' ? setviewCalendar('') : setviewCalendar('hidden')
   }


   return (
      <div className=''>
         {/* <nav class="">
            <span>
               <p className=' '></p>
               <button onClick={showCalendar}>
                  calendar
               </button>
            </span>
            <span>

            </span>
            <div className={`${viewCalendar}`}>
               <CalendarComponent />
            </div>

         </nav> */}


         <nav class="px-2  border-gray-500 dark:bg-gray-900 dark:border-gray-700 w-full h-10 bg-white shadow-md ">
            <div class="container flex flex-wrap justify-between items-center mx-auto">
               <span class="p-1 ml-4 text-xl text-[#074097] font-semibold">GENERATE REPORT</span>

               <div>
                  <ul class="flex flex-col p-1 mt-1 bg-white rounded-lg border border-gray-100 md:flex-row md:space-x-8 md: md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">

                     <li>
                     10:15:34
                     </li>
                     <li onClick={showCalendar} className='-mt-1'>
                        <CalendarMonthIcon className='text-red-400' />
                     </li>

                  </ul>
               </div>

            </div>
         </nav>
         <div className={`${viewCalendar} z-50`}>
            <CalendarComponent />
         </div>

      </div>
   )
}

export default Navbar