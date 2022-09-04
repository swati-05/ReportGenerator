import React, { useEffect, useState } from 'react'
import { Field, Formik } from 'formik';
import SideNav from './SideNav';

function FooterComponent() {


    const [inputStyle, setinputStyle] = useState('m-1 px-1  py-1 text-black')
    const [inputContainerStyleTr, setinputContainerStyleTr] = useState('mx-auto text-xs border-b')
    const [inputContainerStyleTd, setinputContainerStyleTd] = useState('px-1 ')
    return (
        <>
   <div className='flex flex-row'>
                
                <div className='flex'>
                    <SideNav />
                </div> 

                <div className='flex w-full'>
                    <div>
                        <Formik
                            initialValues={{
                                caption: '',
                                fieldType: '',
                                fieldName: '',
                                resource: '',
                                // pageNo: '',
                                horizontal: '',
                                vertical: '',
                                width: '',
                                height: '',
                                fontName: '',
                                fontSize: '',
                                underline: false,
                                bold: false,
                                italic: false,
                                hexColor: '',
                                visible: false,
                                alignment: '',

                            }}

                            onSubmit={(values, { setSubmitting }) => {
                                setTimeout(() => {
                                    alert(JSON.stringify(values, null, 2));
                                    console.log('form component', values);
                                    setSubmitting(false);
                                }, 400);
                            }}
                        >
                            {({
                                values,
                                errors,
                                touched,
                                handleChange,
                                handleBlur,
                                handleSubmit,
                                isSubmitting,

                            }) => (
                                <form onSubmit={handleSubmit}>


                                 

                                    <div className='w-full  text-center'>

                                        <table class=" bg-slate-400 text-white w-full ">
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
                                                        <input
                                                            className={`${inputStyle}`}
                                                            type="text"
                                                            name="caption"
                                                            placeholder='caption'
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            value={values.caption}
                                                        />
                                                    </td>
                                                    <td className={`${inputContainerStyleTd}border `}>
                                                        <input
                                                            className={`${inputStyle}`}
                                                            type="text"
                                                            name="fieldName"
                                                            placeholder='Field Name'
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            value={values.fieldName}
                                                        />
                                                    </td>
                                                    <td className={`${inputContainerStyleTd} border`}>
                                                        <input
                                                            className={`${inputStyle}`}
                                                            type="file"
                                                            name="resource"
                                                            placeholder='resource'
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            value={values.resource}
                                                        />
                                                    </td>

                                                    <td className={`${inputContainerStyleTd} border`}>
                                                        <input type="text" className={`${inputStyle} w-12`} placeholder='X' />
                                                        <input type="text" className={`${inputStyle} w-12 ml-6`} placeholder='Y' />
                                                    </td>
                                                    
                                                    <td className={`${inputContainerStyleTd} border`}>

                                                        {/* <input
                                                            className={`${inputStyle} w-16`}
                                                            type="text"
                                                            name="pageNo"
                                                            placeholder='Page No.'
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            value={values.pageNo}
                                                        /> */}
                                                        <select name="fontSize" as="select" className={`${inputStyle} `}>
                                                            <option value="">Font Size</option>
                                                            <option value="">5</option>
                                                            <option value="">10</option>

                                                        </select>
                                                    </td>
                                                </tr>
                                                <tr className={`${inputContainerStyleTr} mL-4`}>
                                                <td className={`${inputContainerStyleTd} border`}>
                                                        <input type="text" className={`${inputStyle} w-12`} placeholder='H' />
                                                        <input type="text" className={`${inputStyle} w-12 ml-6`} placeholder='W' />
                                                    </td>
              
                                                    <td className={`${inputContainerStyleTd} border`}>
                                                        <select name="fontName" as="select" className={`${inputStyle}  w-32`}>
                                                            <option value="arial">Arial</option>
                                                            <option value="sans">Sans</option>
                                                            <option value="serif">Serif</option>

                                                        </select>
                                                    </td>
                                                 

                                                    <td className={`${inputContainerStyleTd} border`}>
                                                        <span>
                                                            <Field
                                                                className={`${inputStyle} bg-teal-300`}
                                                                type="checkbox"
                                                                name="underline"
                                                            />
                                                            U </span>
                                                        <span>
                                                            <Field
                                                                className={`${inputStyle} bg-teal-300`}
                                                                type="checkbox"
                                                                name="bold"
                                                            />
                                                            B </span>
                                                        <span>
                                                            <Field
                                                                className={`${inputStyle} bg-teal-300`}
                                                                type="checkbox"
                                                                name="italic"
                                                            />
                                                            I </span>
                                                   
                                                        <input
                                                            className='ml-4'
                                                            type="color"
                                                            name="hexColor"
                                                            id="hexColor"
                                                            onChange={handleChange} />
                                                    </td>
                                                    <td className={`${inputContainerStyleTd} border `}>
                                              
                                                        <span className='text-amber-300 '>Alignment</span>
                                                       
                                                        <span>
                                                            <Field
                                                                className={`${inputStyle} bg-teal-300`}
                                                                type="checkbox"
                                                                name="left"
                                                            />
                                                            left </span>
                                                        <span>
                                                            <Field
                                                                className={`${inputStyle} bg-teal-300`}
                                                                type="checkbox"
                                                                name="right"
                                                            />
                                                            right </span>
                                                        <span>
                                                            <Field
                                                                className={`${inputStyle} bg-teal-300`}
                                                                type="checkbox"
                                                                name="center"
                                                            />
                                                            center </span>

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
                                    <div className='bg-white float-right'>
                                        <button type="submit" disabled={isSubmitting} className="bg-green-300 px-5 py-2">
                                            Add
                                        </button>
                                    </div>
                                </form>
                            )}
                        </Formik>
                    </div>
                </div>

            </div>

        </>
    )
}

export default FooterComponent