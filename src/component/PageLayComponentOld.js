import React, { useEffect, useState } from 'react'
import { Field, Formik, useFormik } from 'formik';
import PageLayoutTable from './PageLayoutTable';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import Setting from './Setting';
import DeleteIcon from '@mui/icons-material/Delete';

function PageLayComponentOld(props) {

    console.log('template id in page...', props.tempMenuId)


    const [inputStyle, setinputStyle] = useState('m-1 px-1  py-1 text-black ')
    const [inputContainerStyleTr, setinputContainerStyleTr] = useState('mx-auto text-xs border-b')
    const [inputContainerStyleTd, setinputContainerStyleTd] = useState('px-1 ')

    // const [layoutSqlValue, setlayoutSqlValue] = useState()
    const [addRecordTable, setAddRecordTable] = useState([]);
    const [editStatus, setEditStatus] = useState(false)
    const [editIndex, setEditIndex] = useState()

    console.log("mulitple form data ", addRecordTable);

    // const SubmitPageRecord = () => {

    //     props.collectAllLayoutDataFun('layout', addRecordTable);
    //     // props.collectAllLayoutDataFun('layout_data', layoutSqlValue);

    //     // console.log("layout sql...", layoutSqlValue)
    //     console.log('data from the form', setAddRecordTable);
    //     axios({
    //         method: "post",
    //         url: "http://192.168.0.237:8000/api/templatePL/save",
    //         data: addRecordTable,
    //     })
    //         .then(function (response) {
    //             console.log("post data", response.data);

    //         });
    // }

    const formik = useFormik({
        initialValues: {
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
        },

        onSubmit: (values, { setSubmitting, resetForm }) => {
            setTimeout(() => {

                if (editStatus) {
                    editOwnerList(values)
                    return
                } else {

                }

                alert(JSON.stringify(values, null, 2));
                console.log('pageLayout component', values);
                resetForm();
                setAddRecordTable([...addRecordTable, values]);
                props.collectAllLayoutDataFun('layout',addRecordTable);
                setSubmitting(false);
            }, 400);
        }
    })

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




    const editOwnerList = () => {
        let tempRecord = [...addRecordTable]  //copying the array
        console.log('edit index is ', editIndex)
        tempRecord[editIndex] = formik.values  //updating value of editindex
        console.log('tmep owner list', tempRecord)
        setAddRecordTable(tempRecord) //setting value in origin ownlist array
        setEditStatus(false) //seting edit status false after successfull edit
    }



    const editRecord = (index) => {

        alert("edit")
        setEditStatus(true)
        setEditIndex(index)
        let tempRecord = [...addRecordTable]
        formik.resetForm()

        formik.initialValues.caption = tempRecord[index].caption
        formik.initialValues.fieldType = tempRecord[index].fieldType
        formik.initialValues.fieldName = tempRecord[index].fieldName
        formik.initialValues.file = tempRecord[index].file
        formik.initialValues.pageNo = tempRecord[index].pageNo
        formik.initialValues.x = tempRecord[index].x
        formik.initialValues.y = tempRecord[index].y
        formik.initialValues.width = tempRecord[index].width
        formik.initialValues.height = tempRecord[index].height
        formik.initialValues.fontName = tempRecord[index].fontName
        formik.initialValues.fontSize = tempRecord[index].fontSize
        formik.initialValues.isUnderline = tempRecord[index].isUnderline
        formik.initialValues.isBold = tempRecord[index].isBold
        formik.initialValues.isItalic = tempRecord[index].isItalic
        formik.initialValues.color = tempRecord[index].color
        formik.initialValues.isVisible = tempRecord[index].isVisible
        formik.initialValues.alignment = tempRecord[index].alignment

    }





    return (
        <>
            <div className='w-full'>
                <div className=' w-full '>
                    <div>
                        <form onSubmit={formik.handleSubmit} >
                            <div className='w-full  text-center '>
                                <table class=" bg-[#1d4ca3] text-black w-full shadow-sm">
                                    <tbody>
                                        <tr className={`${inputContainerStyleTr}`}>
                                            <td className={`${inputContainerStyleTd} `}>
                                                <select {...formik.getFieldProps('fieldType')} className={`${inputStyle} w-32`}>
                                                    <option >Field Type</option>
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
                                                    {...formik.getFieldProps('caption')}
                                                    className={`${inputStyle}`}
                                                    type="text"

                                                    placeholder='caption'
                                                />

                                            </td>
                                            <td className={`${inputContainerStyleTd}border `}>
                                                <input
                                                    {...formik.getFieldProps('fieldName')}
                                                    className={`${inputStyle}`}
                                                    type="text"

                                                    placeholder='Field Name'

                                                />

                                            </td>
                                            <td className={`${inputContainerStyleTd} border`}>
                                                {/* <input id="file" name="file" type="file" onChange={(event) => {
                                                    console.log('files...', event.target.files[0])
                                                    setFieldValue("file", event.target.files[0]);
                                                }} className="form-control" />
                                                <input id="file" name="file" type="file" onChange={
                                                           handleFile
                                                        } className="form-control" /> */}
                                                <input
                                                    className={`${inputStyle} text-white`}
                                                    type="file"
                                                    name="resource"
                                                    placeholder='resource'

                                                />

                                            </td>

                                            <td className={`${inputContainerStyleTd} border`}>
                                                <input type="text" className={`${inputStyle} w-12`} placeholder='X'
                                                    {...formik.getFieldProps('x')}

                                                />

                                                <input type="text" className={`${inputStyle} w-12 ml-6`} placeholder='Y'
                                                    {...formik.getFieldProps('y')}

                                                />

                                            </td>

                                            <td className={`${inputContainerStyleTd} border`}>

                                                <input
                                                    {...formik.getFieldProps('pageNo')}
                                                    className={`${inputStyle} w-10`}
                                                    type="number"
                                                    name="pageNo"

                                                />

                                                <select  {...formik.getFieldProps('fontSize')} className={`${inputStyle} `}>
                                                    <option value="">Font Size</option>
                                                    <option value="5">5</option>
                                                    <option value="10">10</option>

                                                </select>
                                            </td>
                                        </tr>
                                        <tr className={`${inputContainerStyleTr} mL-4`}>
                                            <td className={`${inputContainerStyleTd} border`}>
                                                <input {...formik.getFieldProps('width')} type="text" className={`${inputStyle} w-12`} placeholder='H'

                                                />

                                                <input  {...formik.getFieldProps('height')} type="text" className={`${inputStyle} w-12 ml-6`} placeholder='W'

                                                />

                                            </td>

                                            <td className={`${inputContainerStyleTd} border`}>
                                                <select {...formik.getFieldProps('fontName')} className={`${inputStyle}  w-32`}>
                                                    <option value="arial">Arial</option>
                                                    <option value="sans">Sans</option>
                                                    <option value="serif">Serif</option>

                                                </select>

                                            </td>


                                            <td className={`${inputContainerStyleTd} border`}>
                                                <span className='text-white'>
                                                    <input  {...formik.getFieldProps('isUnderline')}
                                                        className={`${inputStyle} bg-teal-300 `}
                                                        type="checkbox"


                                                    />

                                                    U </span>
                                                <span className='text-white'>
                                                    <input {...formik.getFieldProps('isBold')}
                                                        className={`${inputStyle} bg-teal-300`}
                                                        type="checkbox"

                                                    />

                                                    B </span>
                                                <span className='text-white'>
                                                    <input {...formik.getFieldProps('isItalic')}
                                                        className={`${inputStyle} bg-teal-300`}
                                                        type="checkbox"

                                                    />

                                                    I </span>

                                                <input
                                                    {...formik.getFieldProps('color')}
                                                    className='ml-4'
                                                    type="color"

                                                    id="color"
                                                />

                                            </td>
                                            <td className={`${inputContainerStyleTd} border `}>
                                                <span className='text-white '>Alignment</span>
                                                <span>
                                                    <select  {...formik.getFieldProps('alignment')} className={`${inputStyle}  w-32`}>
                                                        <option value="left">Left</option>
                                                        <option value="right">Right</option>
                                                        <option value="center">Center</option>

                                                    </select>
                                                </span>
                                            </td>
                                            <td className={`${inputContainerStyleTd}border `}>
                                                <div className='flex -ml-12  '>
                                                    <div className='flex-1  '>
                                                        <p className='text-white '>Visibility</p>
                                                    </div>
                                                    <div className='flex-1  w-80 -ml-36 -mt-1 '>
                                                        <span>
                                                            <input
                                                                {...formik.getFieldProps('isVisible')}
                                                                className={`${inputStyle} bg-teal-300`}
                                                                type="checkbox"

                                                            />
                                                        </span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <button type="submit" className="bg-green-400  shadow-xl px-8 py-1  ml-9 ">
                                                    Add
                                                </button>
                                            </td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                        </form>

                        {/* 
                        <div className='w-full'>
                            <textarea className={`h-28 w-full border border-gray-200 shadow-inner shadow-[#99baea] mt-2  `} placeholder='sql query'
                                name="layout_data"
                                value={layoutSqlValue} onChange={(e) => setlayoutSqlValue(e.target.value)}
                            />
                        </div> */}
                    </div>

                </div>


                {/* mapping data field and setting the view */}
                <div className='py-6 '>
                    <div class="flex flex-col justify-center h-full border-b-2">

                        <div class=" bg-white  border-gray-200 border-t">

                            <span class="font-semibold text-gray-500">Page Layout Records</span>
                            <div class="overflow-x-auto p-3">
                                <table class="table-auto w-full">
                                    <thead class="text-xs font-semibold uppercase text-gray-50 bg-[#074097]">
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
                                                                <button type='button' onClick={() => editRecord(index)} >
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

                            {/* <footer class="px-5 py-4 ">
                                <span className='float-right'>
                                    <button type="button" className='bg-[#074097] text-white px-5 py-1 my-2  ' onClick={SubmitPageRecord}>
                                        Save & Next
                                    </button>
                                </span>
                            </footer> */}

                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default PageLayComponentOld