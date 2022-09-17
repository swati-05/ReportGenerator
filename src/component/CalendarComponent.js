import React, { useState } from 'react'
import { Calendar } from 'react-calendar'


function CalendarComponent() {

    const [value, onChange] = useState(new Date());
    return (
        <>
          
            <div className='w-80 bg-sky-200'>
                <Calendar onChange={onChange} value={value} />
            </div>
        </>
    )
}

export default CalendarComponent