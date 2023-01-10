//////////////////////////////////////////////////////////////////////////////////////
//    Author - swati sharma
//    Version - 1.0
//    Date - 23-09-2022
//    Revision - 1
//    Project - JUIDCO
//    Component  - CalendarComponent
//    DESCRIPTION - CalendarComponent Component 
//////////////////////////////////////////////////////////////////////////////////////


import React, { useState } from 'react'
import { Calendar } from 'react-calendar'


function CalendarComponent() {

    const [value, onChange] = useState(new Date());
    return (
        <>         
            <div className='w-96 shadow-lg bg-slate-50 text-[#074097] border-2 '>
                <Calendar onChange={onChange} value={value} />
            </div>
        </>
    )
}

export default CalendarComponent

/**
 * Exported to :
 * 1. <Navbar/>
 * 
 */