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