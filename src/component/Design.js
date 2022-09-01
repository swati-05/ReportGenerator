import React, { useState } from 'react'

function Design() {

    const [inputStyle, setinputStyle] = useState('m-1 px-1 py-1 text-black ')
    const [inputContainerStyleTr, setinputContainerStyleTr] = useState('mx-auto text-xs border-b')
    const [inputContainerStyleTd, setinputContainerStyleTd] = useState('px-1')
    return (
        <div className='w-full  bg-gray-700 '>

            <table class=" bg-gray-600 mx-auto text-white w-full ">
                <tbody>
                    <tr className={`${inputContainerStyleTr}`}>
                        <td className={`${inputContainerStyleTd} `}>
                            <select name="fieldType" as="select" className={`${inputStyle} w-32`}>
                                <option value="box">Field Type</option>
                                <option value="box">Box</option>
                                <option value="caption">Caption</option>
                                <option value="image">Image</option>
                                <option value="line">Line</option>
                                <option value="param">Param</option>
                                <option value="captionWR">CaptionWR</option>
                            </select>
                        </td>
                        <td className={`${inputContainerStyleTd} border`}>
                            <input type="text" placeholder='caption' className={`${inputStyle}`} />
                        </td>
                        <td className={`${inputContainerStyleTd}border `}>
                            <input type="text" className={`${inputStyle}`} placeholder='Field Name' />
                        </td>
                        <td className={`${inputContainerStyleTd} border`}>
                            <input type="file" className={`${inputStyle}`} />
                        </td>
                        
                        <td className={`${inputContainerStyleTd} border`}>
                            <input type="text" className={`${inputStyle} w-12`} placeholder='X' />
                            <input type="text" className={`${inputStyle} w-12 ml-6`} placeholder='Y' />
                        </td>
                        <td className={`${inputContainerStyleTd} border`}>
                        <input type="text" className={`${inputStyle} w-12`} placeholder='H' />
                            <input type="text" className={`${inputStyle} w-12 ml-6`} placeholder='W' />
                        </td>
                        <td className={`${inputContainerStyleTd} border`}>
                            <input type="text" className={`${inputStyle} w-16`} placeholder='Page No.' />
                            <select name="fontSize" as="select" className={`${inputStyle} `}>
                                <option value="arial">10</option>
                                <option value="sans">15</option>
                                <option value="serif">20</option>
                                
                            </select>
                        </td>
                    </tr>
                    <tr className={`${inputContainerStyleTr} mL-4`}>
                        {/* <td className={`${inputContainerStyleTd} border`}>
                            <input type="text" className={`${inputStyle} w-12`} placeholder='H' />
                            <input type="text" className={`${inputStyle} w-12 ml-6`} placeholder='W' />
                        </td> */}
                        {/* <td className={`${inputContainerStyleTd} border w-1`}>
                            <input type="text" className={`${inputStyle}`} placeholder='W' />
                        </td> */}
                        <td  className={`${inputContainerStyleTd} border`}>
                        <select name="fontSize" as="select" className={`${inputStyle}  w-32`}>
                                <option value="arial">Arial</option>
                                <option value="sans">Sans</option>
                                <option value="serif">Serif</option>
                                
                            </select>
                        </td>
                        {/* <td className={`${inputContainerStyleTd} border `}>
                            <input type="color" />
                        </td> */}
                       
                        <td className={`${inputContainerStyleTd} border`}>
                            <span><input type="checkbox" className={`${inputStyle} bg-teal-300`} /> U </span>
                            <span><input type="checkbox" className={`${inputStyle} bg-teal-300`} /> B </span>
                            <span><input type="checkbox" className={`${inputStyle} bg-teal-300`} /> I </span>
                            <span> <input type="color" className='ml-4' /> </span>
                        </td>
                        <td className={`${inputContainerStyleTd} border `}>
                            {/* <div className='flex -ml-20 '>
                                <div className='flex-1  '> */}
                                    <span className='text-amber-300 '>Alignment</span>
                                {/* </div> */}
                                {/* <div className='flex-1  w-80 -ml-20 -mt-1'> */}
                                    <span><input type="checkbox" className={`${inputStyle} bg-teal-300`} /> left </span>
                                    <span><input type="checkbox" className={`${inputStyle} bg-teal-300`} /> right </span>
                                    <span><input type="checkbox" className={`${inputStyle} bg-teal-300`} /> center </span>
                                {/* </div> */}
                            {/* </div> */}
                        </td>
                        <td className={`${inputContainerStyleTd}border `}> 
                            <div className='flex -ml-12  '>
                                <div className='flex-1  '>
                                <p className='text-amber-300 '>Visibility</p>
                                </div>
                                <div className='flex-1  w-80 -ml-36 -mt-1 '>
                                <span><input type="checkbox" className={`${inputStyle} bg-teal-300`} />  </span>
                                </div>
                            </div>
                        </td>
                    </tr>

                </tbody>
            </table>
        </div>
    )
}

export default Design