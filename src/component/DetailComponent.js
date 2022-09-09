import React, { useEffect, useState } from 'react'
import { Field, Formik } from 'formik';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Setting from './Setting';


function DetailComponent() {

    let { templateId, groupId, menuTempName, menuTempCode } = useParams();



    // let { templateId } = useParams();
    const reportTemplate_id = templateId

    const [inputStyle, setinputStyle] = useState('m-1 px-1  py-1 text-black')
    const [inputContainerStyleTr, setinputContainerStyleTr] = useState('mx-auto text-xs border-b')
    const [inputContainerStyleTd, setinputContainerStyleTd] = useState('px-1 ')


    const [addDetailRecordTable, setAddDetailRecordTable] = useState([]);
    console.log("detail form data ", addDetailRecordTable);




    const SubmitPageRecord = () => {


        console.log('data from detail', addDetailRecordTable);

        axios({
            method: "post",
            url: "http://192.168.0.237:8000/api/templateDtl/save",
            data: addDetailRecordTable,
        })
            .then(function (response) {
                console.log("post data", response.data);


            });
    }


    return (
        <>
            <div className='w-full'>

                <div className=' w-full '>
                    <div className='bg-white float-right'>
                        {/* <button className="bg-yellow-200 px-8 py-1 drop-shadow-lg ">Preview</button> */}

                        <button className="bg-purple-300 px-6 py-1 -ml-6 drop-shadow-lg hidden" >Setting</button>


                    </div>
                    <div>
                        <Formik
                            initialValues={{
                                reportTemplate_id: templateId,
                                caption: '',
                                fieldType: '',
                                fieldName: '',

                                isBoxed: false,
                                x: '',
                                y: '',
                                width: '',
                                height: '',
                                fontName: '',
                                fontSize: '',
                                isUnderline: false,
                                isBold: false,
                                isItalic: false,
                                color: '',
                                isVisible: false,
                                alignment: '',

                            }}

                            onSubmit={(values, { setSubmitting }) => {
                                setTimeout(() => {
                                    alert(JSON.stringify(values, null, 2));
                                    console.log('form component', values);
                                    setAddDetailRecordTable([...addDetailRecordTable, values]);

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
                                        {/* <h1 className='text-teal-400'>Details component</h1> */}
                                        <table class=" bg-teal-300 text-black w-full ">
                                            <tbody>
                                                <tr className={`${inputContainerStyleTr}`}>
                                                    <td className={`${inputContainerStyleTd} `}>
                                                        <Field name="fieldType" as="select" className={`${inputStyle} w-32`}>
                                                            <option >Field Type</option>
                                                            <option value="box">Box</option>
                                                            <option value="caption">Caption</option>
                                                            <option value="image">Image</option>
                                                            <option value="line">Line</option>
                                                            <option value="param">Param</option>
                                                            <option value="captionWR">CaptionWR</option>
                                                        </Field>
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
                                                        {/* <input
                                                            className={`${inputStyle}`}
                                                            type="file"
                                                            name="resource"
                                                            placeholder='resource'
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            value={values.resource}
                                                        /> */}
                                                    </td>

                                                    <td className={`${inputContainerStyleTd} border`}>

                                                        <input type="text" className={`${inputStyle} w-12`} placeholder='X'
                                                            name="x"
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            value={values.x}
                                                        />
                                                        <input type="text" className={`${inputStyle} w-12 ml-6`} placeholder='Y'
                                                            name="y"
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            value={values.y}
                                                        />

                                                    </td>

                                                    <td className={`${inputContainerStyleTd} border`}>

                                                        <span>
                                                            <Field
                                                                className={`${inputStyle} bg-teal-300`}
                                                                type="checkbox"
                                                                name="isBoxed"
                                                            />
                                                            Box </span>
                                                        <Field name="fontSize" as="select" className={`${inputStyle} `}>
                                                            <option value="">Font Size</option>
                                                            <option value="5">5</option>
                                                            <option value="10">10</option>

                                                        </Field>
                                                    </td>
                                                </tr>
                                                <tr className={`${inputContainerStyleTr} mL-4`}>

                                                    <td className={`${inputContainerStyleTd} `}>
                                                        <input type="text" className={`${inputStyle} w-12`} placeholder='H'
                                                            name="width"
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            value={values.width}
                                                        />
                                                        <input type="text" className={`${inputStyle} w-12 ml-6`} placeholder='W'
                                                            name="height"
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            value={values.height}
                                                        />
                                                    </td>

                                                    <td className={`${inputContainerStyleTd} border`}>
                                                        <Field name="fontName" as="select" className={`${inputStyle}  w-32`}>
                                                            <option value="arial">Arial</option>
                                                            <option value="sans">Sans</option>
                                                            <option value="serif">Serif</option>

                                                        </Field>
                                                    </td>


                                                    <td className={`${inputContainerStyleTd} border`}>
                                                        <span>
                                                            <Field
                                                                className={`${inputStyle} bg-teal-300`}
                                                                type="checkbox"
                                                                name="isUnderline"
                                                            />
                                                            U </span>
                                                        <span>
                                                            <Field
                                                                className={`${inputStyle} bg-teal-300`}
                                                                type="checkbox"
                                                                name="isBold"
                                                            />
                                                            B </span>
                                                        <span>
                                                            <Field
                                                                className={`${inputStyle} bg-teal-300`}
                                                                type="checkbox"
                                                                name="isItalic"
                                                            />
                                                            I </span>

                                                        <input
                                                            className='ml-4'
                                                            type="color"
                                                            name="color"
                                                            id="color"
                                                            onChange={handleChange} />
                                                    </td>
                                                    <td className={`${inputContainerStyleTd} border `}>

                                                        <span className='text-amber-300 '>Alignment</span>

                                                        <span>
                                                            <Field name="alignment" as="select" className={`${inputStyle}  w-32`}>
                                                                <option value="left">Left</option>
                                                                <option value="right">Right</option>
                                                                <option value="center">Center</option>

                                                            </Field>

                                                        </span>

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
                                                    <td>
                                                        <button type="submit" disabled={isSubmitting} className="bg-slate-100 px-8 py-1  ml-9 ">
                                                            Add
                                                        </button>
                                                    </td>
                                                </tr>

                                            </tbody>
                                        </table>
                                    </div>
                                    <div className='w-full'>

                                        <textarea className={`h-28 w-full border border-gray-200 mt-2 `} placeholder='sql query'
                                            name="width"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.width}
                                        />

                                    </div>
                                </form>
                            )}
                        </Formik>
                    </div>
                </div>

            </div>
            {/* mapping data field and setting the view */}
            <div className='py-6'>
                <div class="flex flex-col justify-center h-full border-b-2">

                    <div class=" bg-white  border-gray-200 border-t">

                        <span class="font-semibold text-gray-800">Page Layout Records</span>
                        <div class="overflow-x-auto p-3">
                            <table class="table-auto w-full">
                                <thead class="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                                    <tr>
                                        <th></th>
                                        <th class="p-2">
                                            <div class="font-semibold text-left">Field Type</div>
                                        </th>
                                        <th class="p-2">
                                            <div class="font-semibold text-left">Caption</div>
                                        </th>
                                        <th class="p-2">
                                            <div class="font-semibold text-left">Field Name</div>
                                        </th>
                                        <th class="p-2">
                                            <div class="font-semibold text-center"></div>
                                        </th>

                                    </tr>
                                </thead>

                                <tbody class="text-sm divide-y divide-gray-100">
                                    {
                                        addDetailRecordTable.map((item) => (
                                            <>
                                                <tr>
                                                    <td class="p-2">

                                                    </td>
                                                    <td class="p-2">
                                                        <div class="font-medium text-gray-800 text-left">
                                                            {item?.fieldType}
                                                        </div>
                                                    </td>
                                                    <td class="p-2">
                                                        <div class="text-left">
                                                            {item?.caption}
                                                        </div>
                                                    </td>
                                                    <td class="p-2">
                                                        <div class="text-left font-medium text-green-500">
                                                            {item?.fieldName}
                                                        </div>
                                                    </td>
                                                    <td class="p-2">
                                                        <div class="flex justify-center">
                                                            <button>
                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                                                                    <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                                                                    <path fill-rule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z" clip-rule="evenodd" />
                                                                </svg>

                                                            </button>
                                                        </div>
                                                    </td>
                                                </tr>

                                            </>
                                        ))

                                    }



                                </tbody>

                            </table>
                        </div>

                        <footer class="px-5 py-4 ">
                            <span className='float-right'>
                                <button className='bg-indigo-500 text-white px-5 py-1 my-2 rounded-lg' onClick={SubmitPageRecord}>
                                    Submit All
                                </button>
                            </span>
                        </footer>

                    </div>

                </div>
            </div>

            {/*this component is kept hidden */}
            <div className="hidden">
                <Setting Detail={addDetailRecordTable} />
            </div>
        </>
    )
}

export default DetailComponent