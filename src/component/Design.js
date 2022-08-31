import React from 'react'

function Design() {
    return (
        <div className='bg-gray-600 w-full h-12'>
            <table className=' w-full p-2'>
                <th>
                    <td className='border text-black  text-xs '>
                        <select name="fieldType" as="select">
                        <option value="box">Field Type</option>
                            <option value="box">Box</option>
                            <option value="caption">Caption</option>
                            <option value="image">Image</option>
                            <option value="line">Line</option>
                            <option value="param">Param</option>
                            <option value="captionWR">CaptionWR</option>
                        </select>
                    </td>
                    <td className='border text-black w-8 text-sm'>
                      <input type="text" className='bg-white w-28' placeholder='caption'/>
                    </td>
                    <td className='border text-white w-8 text-sm'>
                    <input type="text" className='bg-white w-28' placeholder='Field Name'/>
                    </td>
                    <td className='border text-white w-8 text-sm'>
                    <input type="file" className='bg-white w-28'/>
                    </td>
                    <td className='border text-white w-8 text-sm'>
                    <input type="text" className='bg-white w-28' placeholder='Page No.'/>
                    </td>
                    <td className='border text-white w-8 font-serif'>
                        U
                    </td>
                    <td className='border text-white w-8 font-bold'>
                        b
                    </td>
                    <td className='border text-white w-8 font-serif'>
                        I
                    </td>
                    <td className='border text-white w-8 font-serif'>
                        T
                    </td>
                    <td className='border text-white w-8 font-serif '>
                        <button className='peer px-5 py-2 bg-green-600 hover:bg-green-700 text-white'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 ">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                            </svg>
                        </button>
                        <div class="hidden peer-hover:flex hover:flex
                             w-[200px]
                            flex-col bg-white drop-shadow-lg">
                            <a class="px-5 py-3 hover:bg-gray-200" href="#">About Us</a>
                            <a class="px-5 py-3 hover:bg-gray-200" href="#">Contact Us</a>
                            <a class="px-5 py-3 hover:bg-gray-200" href="#">Privacy Policy</a>
                        </div>
                    </td>
                </th>
            </table>

        </div>
    )
}

export default Design