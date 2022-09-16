import React, { useEffect, useState } from 'react'
import { Field, Formik } from 'formik';
import SideNav from './SideNav';
import Design from './Design';
import PageLayoutTable from './PageLayoutTable';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import Setting from './Setting';
import DeleteIcon from '@mui/icons-material/Delete';

function PageLayComponentOld(props) {




    // const reportTemplate_id = templateId

    console.log('template id in page...', props.tempMenuId)


    const [inputStyle, setinputStyle] = useState('m-1 px-1  py-1 text-black')
    const [inputContainerStyleTr, setinputContainerStyleTr] = useState('mx-auto text-xs border-b')
    const [inputContainerStyleTd, setinputContainerStyleTd] = useState('px-1 ')

    const [layoutSqlValue, setlayoutSqlValue] = useState()
    const [addRecordTable, setAddRecordTable] = useState([]);
    const [updateRecord, setupdateRecord] = useState()

    console.log("mulitple form data ", addRecordTable);

    const SubmitPageRecord = () => {

        props.collectAllLayoutDataFun('layout', addRecordTable);
        // props.collectAllLayoutDataFun('layout_data', layoutSqlValue);

        console.log("layout sql...", layoutSqlValue)
        console.log('data from the form', setAddRecordTable);
        axios({
            method: "post",
            url: "http://192.168.0.237:8000/api/templatePL/save",
            data: addRecordTable,
        })
            .then(function (response) {
                console.log("post data", response.data);

            });
    }


    const handleRemove = (index) => {
        alert('Confirm ?');
        console.log('key ', index);
        setAddRecordTable(current =>
            current.filter(record => {
                if (current.indexOf(record) == index) {
                    console.log('value matched at ', index)
                } else {
                    // alert('current index of ct ',current.indexOf(ct))
                    return record
                }
            }),
        );
    }

    const handleUpdateValue = (index) => {
        alert(" ready update")
        console.log('key ', index);
      
    }


    return (
        <>
            <div className='w-full'>
                <div className=' w-full '>
                    <div>
                        <Formik
                            initialValues={{
                                reportTemplate_id: props.tempMenuId,
                                caption: '',
                                fieldType: '',
                                fieldName: '',
                                file: null,
                                pageNo: '',
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

                            onSubmit={(values, { setSubmitting, resetForm }) => {
                                setTimeout(() => {
                                    alert(JSON.stringify(values, null, 2));
                                    console.log('pageLayout component', values);
                                    resetForm();
                                    setAddRecordTable([...addRecordTable, values]);
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
                                setFieldValue,

                            }) => (

                                <form onSubmit={handleSubmit}>
                                    <div className='w-full  text-center '>
                                        <table class=" bg-[#8bb3ee] text-black w-full shadow-sm">
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
                                                        <input id="file" name="file" type="file" onChange={(event) => {
                                                            console.log('files...', event.target.files[0])
                                                            setFieldValue("file", event.target.files[0]);
                                                        }} className="form-control" />
                                                        {/* <input id="file" name="file" type="file" onChange={
                                                           handleFile
                                                        } className="form-control" /> */}
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

                                                        <input
                                                            className={`${inputStyle} w-16`}
                                                            type="text"
                                                            name="pageNo"
                                                            placeholder='Page No.'
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            value={values.pageNo}
                                                        />

                                                        <Field name="fontSize" as="select" className={`${inputStyle} `}>
                                                            <option value="">Font Size</option>
                                                            <option value="5">5</option>
                                                            <option value="10">10</option>

                                                        </Field>
                                                    </td>
                                                </tr>
                                                <tr className={`${inputContainerStyleTr} mL-4`}>
                                                    <td className={`${inputContainerStyleTd} border`}>
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
                                                                <span>
                                                                    <Field
                                                                        className={`${inputStyle} bg-teal-300`}
                                                                        type="checkbox"
                                                                        name="isVisible"
                                                                    />
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <button type="submit" disabled={isSubmitting} className="bg-red-500 rounded-lg shadow-xl px-8 py-1  ml-9 ">
                                                            Add
                                                        </button>
                                                    </td>
                                                </tr>

                                            </tbody>
                                        </table>
                                    </div>
                                </form>
                            )}
                        </Formik>
                        <div className='w-full'>
                            <textarea className={`h-28 w-full border border-gray-200 mt-2 `} placeholder='sql query'
                                name="layout_data"
                                value={layoutSqlValue} onChange={(e) => setlayoutSqlValue(e.target.value)}
                            />
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
                                            <th></th>
                                            <th class="p-2">
                                                <div class="font-semibold text-center"></div>
                                            </th>
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
                                                <div class="font-semibold text-left">Image</div>
                                            </th>
                                            <th class="p-2">
                                                <div class="font-semibold text-left">X</div>
                                            </th>
                                            <th class="p-2">
                                                <div class="font-semibold text-left">Y</div>
                                            </th>
                                            <th class="p-2">
                                                <div class="font-semibold text-left">Page no.</div>
                                            </th>
                                            <th class="p-2">
                                                <div class="font-semibold text-left">Font Size</div>
                                            </th>
                                            <th class="p-2">
                                                <div class="font-semibold text-left">Height</div>
                                            </th>
                                            <th class="p-2">
                                                <div class="font-semibold text-left">Width</div>
                                            </th>
                                            <th class="p-2">
                                                <div class="font-semibold text-left">Font </div>
                                            </th>
                                            <th class="p-2">
                                                <div class="font-semibold text-left">isBold</div>
                                            </th>
                                            <th class="p-2">
                                                <div class="font-semibold text-left">isUnderline</div>
                                            </th>
                                            <th class="p-2">
                                                <div class="font-semibold text-left">color </div>
                                            </th>
                                            <th class="p-2">
                                                <div class="font-semibold text-left">IsItalic </div>
                                            </th>
                                            <th class="p-2">
                                                <div class="font-semibold text-left">Alignment</div>
                                            </th>
                                            <th class="p-2">
                                                <div class="font-semibold text-left">Visibility</div>
                                            </th>


                                        </tr>
                                    </thead>

                                    <tbody class="text-sm divide-y divide-gray-100">
                                        {
                                            addRecordTable.map((item, index) => (
                                                <>
                                                  
                                                        <tr>
                                                            <td class="p-2">
                                                                {index}
                                                            </td>
                                                            <td class="">
                                                                <div class="flex justify-center">
                                                                    <button type='button' onClick={() => handleUpdateValue(index)} >
                                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4 text-green-500 rounded-md  hover:text-green-700">
                                                                            <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z" />
                                                                        </svg>
                                                                    </button>
                                                                </div>
                                                            </td>
                                                            <td class="">
                                                                <div class="flex justify-center">
                                                                    <button type='button' onClick={() => handleRemove(index)}>
                                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4 text-red-500 hover:text-red-700">
                                                                            <path fill-rule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z" clip-rule="evenodd" />
                                                                        </svg>
                                                                    </button>
                                                                </div>
                                                            </td>
                                                            <td class="p-2">
                                                                <div class="font-medium text-gray-800 text-left text-xs">
                                                                    {item?.fieldType}
                                                                </div>
                                                            </td>
                                                            <td class="p-2">
                                                                <div class="text-left">
                                                                    {item?.caption}
                                                                </div>
                                                            </td>
                                                            <td class="p-2">
                                                                <div class="text-left font-medium text-green-500 text-xs">
                                                                    {item?.fieldName}
                                                                </div>
                                                            </td>
                                                            <td class="p-2">
                                                                <div class="font-medium text-gray-800 text-left text-xs">
                                                                    {/* {item?.file} */}
                                                                </div>
                                                            </td>
                                                            <td class="p-2">
                                                                <div class="text-left text-xs">
                                                                    {item?.x}
                                                                </div>
                                                            </td>
                                                            <td class="p-2">
                                                                <div class="text-left font-medium text-green-500 text-xs">
                                                                    {item?.y}
                                                                </div>
                                                            </td>
                                                            <td class="p-2">
                                                                <div class="font-medium text-gray-800 text-left text-xs">
                                                                    {item?.pageNo}
                                                                </div>
                                                            </td>
                                                            <td class="p-2">
                                                                <div class="text-left">
                                                                    {item?.fontSize}
                                                                </div>
                                                            </td>
                                                            <td class="p-2">
                                                                <div class="text-left font-medium text-green-500 text-xs">
                                                                    {item?.height}
                                                                </div>
                                                            </td>
                                                            <td class="p-2">
                                                                <div class="font-medium text-gray-800 text-left text-xs">
                                                                    {item?.width}
                                                                </div>
                                                            </td>
                                                            <td class="p-2">
                                                                <div class="text-left text-xs">
                                                                    {item?.fontName}
                                                                </div>
                                                            </td>
                                                            <td class="p-2">
                                                                <div class="text-left font-medium text-green-500 text-xs">
                                                                    {item?.isBold == true ? 'yes' : 'no'}
                                                                </div>
                                                            </td>
                                                            <td class="p-2">
                                                                <div class="font-medium text-gray-800 text-left text-xs">
                                                                    {item?.isUnderline == true ? 'yes' : 'no'}
                                                                </div>
                                                            </td>
                                                            <td class="p-2">
                                                                <div class="text-left text-xs">
                                                                    {item?.color}
                                                                </div>
                                                            </td>
                                                            <td class="p-2">
                                                                <div class="font-medium text-gray-800 text-left text-xs">
                                                                    {item?.isItalic == true ? 'yes' : 'no'}
                                                                </div>
                                                            </td>
                                                            <td class="p-2">
                                                                <div class="text-left text-xs">
                                                                    {item?.alignment}
                                                                </div>
                                                            </td>
                                                            <td class="p-2">
                                                                <div class="text-left font-medium text-green-500 text-xs">
                                                                    {item?.isVisible == true ? 'yes' : 'no'}
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
                                    <button type="button" className='bg-indigo-500 text-white px-5 py-1 my-2 rounded-lg' onClick={SubmitPageRecord}>
                                        Save
                                    </button>
                                </span>
                            </footer>

                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default PageLayComponentOld