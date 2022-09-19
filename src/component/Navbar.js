import React, { useState } from 'react'
import CalendarComponent from './CalendarComponent'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import TimeComponent from './TimeComponent';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalculateIcon from '@mui/icons-material/Calculate';


function Navbar() {

   const [viewCalendar, setviewCalendar] = useState('hidden')

   const showCalendar = () => {
      viewCalendar == 'hidden' ? setviewCalendar('') : setviewCalendar('hidden')
   }


   return (
      <div className=''>



         <nav class="px-2  border-gray-500 dark:bg-gray-900 dark:border-gray-700 w-full h-10 bg-white shadow-md ">
            <div class="container flex flex-wrap justify-between items-center mx-auto">
               <span class="p-1 ml-4 text-xl text-[#074097] font-semibold">GENERATE REPORT</span>

               <div>
                  <p class="flex flex-col p-1 mt-1 bg-white rounded-lg border border-gray-100 md:flex-row md:space-x-8 md: md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">

                     <span className=''>
                        <TimeComponent />
                     </span>
                     <span onClick={showCalendar} className=''>
                        <CalendarMonthIcon className='text-[#074097]' />
                     </span>
                     <span className='text-yellow-400'>
                        <EventNoteIcon />
                     </span>
                     <span>
                        <CalculateIcon className='text-[#074097]'/>
                     </span>
                    
                  </p>
               </div>

            </div>
         </nav>
         <div className={`${viewCalendar} absolute`}>
            <CalendarComponent />
         </div>

      </div>
   )
}

export default Navbar