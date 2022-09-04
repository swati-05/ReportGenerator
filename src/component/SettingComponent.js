import React from 'react'

function SettingComponent() {
    return (
        <>
            <div className=''>
                <div className=''>
                    <span>
                        <label className=' border border-gray-500 px-6 py-2 w-64' >
                            <span className=''>Template Code</span>
                            <span><input type="text" className='w-56 ml-2' /></span>
                        </label>
                    </span>
                    <span>
                        <label className=' border border-gray-500 px-6 py-2 w-64' >
                            <span className=''>Template Name</span>
                            <span><input type="text" className='w-56 ml-2' /></span>
                        </label>
                    </span>
                </div>
                <div className='p-3'>

                    <span>
                        <label className=' border border-gray-500 px-6 py-2 w-64' >
                            <span className=''>Template Code</span>
                            <span><input type="text" className='w-56 ml-2' /></span>
                        </label>
                    </span>
                    <span>
                        <label className=' border border-gray-500 px-6 py-2 w-64' >
                            <span className=''>Template Name</span>
                            <span><input type="text" className='w-56 ml-2' /></span>
                        </label>
                    </span>
                </div>
                <div className='p-3'>

                    <span>
                        <label className=' border border-gray-500 px-6 py-2 w-64' >
                            <span className=''>Template Code</span>
                            <span><input type="text" className='w-56 ml-2' /></span>
                        </label>
                    </span>
                    <span>
                        <label className=' border border-gray-500 px-6 py-2 w-64' >
                            <span className=''>Template Name</span>
                            <span><input type="text" className='w-56 ml-2' /></span>
                        </label>
                    </span>
                </div>
                <div className='p-1'>
                    <span>Header Height</span>
                    <span><input type="text" className='w-24 ml-2' /></span>
                    <span className=''>Footer Height</span>
                    <span><input type="text" className='w-24 ml-2' /></span>

                    <span>Line Space</span>
                    <span><input type="number" className='w-24 ml-2' /></span>
                    <span className=''>Paper Size</span>
                    <span>
                        <select type="text" className='w-24 ml-2'>
                            <option>A4</option>
                            <option>A4</option>
                            <option>A4</option>
                            <option>A4</option>
                        </select>
                    </span>

                </div>

            </div>
        </>
    )
}

export default SettingComponent