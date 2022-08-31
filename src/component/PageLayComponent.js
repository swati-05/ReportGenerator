import React, { useEffect, useState } from 'react'
import ColorPicker from "elevate-ui/ColorPicker";
import { Field, Formik } from 'formik';
import { ChromePicker } from 'react-color';
import ColorPick from './ColorPick';
import SideNav from './SideNav';
import Design from './Design';
// import { ToggleButton } from '@mui/material';
// import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
// import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
// import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';

function PageLayComponent() {
    const [underlineCheckValue, setunderlineCheckValue] = useState(false)
    const [boldCheckValue, setboldCheckValue] = useState(false)
    const [italicCheckValue, setitalicCheckValue] = useState(false)
    const [visibilityCheckValue, setvisibilityCheckValue] = useState(false)

    return (
        <>
            <div>
                <Design />
            </div>
            {/* <div className='flex flex-row'>
                <div className='flex'>
                    <SideNav />
                </div>
                <div className='flex'>

                    <div>
                        <Formik
                            initialValues={{
                                caption: '',
                                fieldType: '',
                                fieldName: '',
                                resource: '',
                                pageNo: '',
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


                                    <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
                                        <table className="w-5/12 text-sm text-left text-gray-500 dark:text-gray-400">
                                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                                <tr>
                                                    <th scope="col" className="py-3 px-6">
                                                        Field Type
                                                    </th>
                                                    <th scope="col" className="py-3 px-6">
                                                        Caption
                                                    </th>
                                                    <th scope="col" className="py-3 px-6">
                                                        Field Name
                                                    </th>
                                                    <th scope="col" className="py-3 px-6">
                                                        Resource
                                                    </th>

                                                    <th scope="col" className="py-3 px-6">
                                                        Page no.
                                                    </th>
                                                    <th scope="col" className="py-3 px-6">
                                                        X
                                                    </th>
                                                    <th scope="col" className="py-3 px-6">
                                                        Y
                                                    </th>
                                                    <th scope="col" className="py-3 px-6">
                                                        Width
                                                    </th>

                                                    <th scope="col" className="py-3 px-6">
                                                        Height
                                                    </th>
                                                    <th scope="col" className="py-3 px-6">
                                                        Font Name
                                                    </th>
                                                    <th scope="col" className="py-3 px-6">
                                                        Font Size
                                                    </th>
                                                    <th scope="col" className="py-3 px-6">
                                                        underline
                                                    </th>
                                                    <th scope="col" className="py-3 px-6">
                                                        bold
                                                    </th>

                                                    <th scope="col" className="py-3 px-6">
                                                        italic
                                                    </th>
                                                    <th scope="col" className="py-3 px-6">
                                                        Color
                                                    </th>
                                                    <th scope="col" className="py-3 px-6">
                                                        Alignment
                                                    </th>
                                                    <th scope="col" className="py-3 px-6">
                                                        Visible
                                                    </th>

                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr className="bg-gray-400 border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                                    
                                                    <td className="py-4 px-6">
                                                        <Field name="fieldType" as="select">
                                                            <option value="box">Box</option>
                                                            <option value="caption">Caption</option>
                                                            <option value="image">Image</option>
                                                            <option value="line">Line</option>
                                                            <option value="param">Param</option>
                                                            <option value="captionWR">CaptionWR</option>
                                                        </Field>
                                                    </td>
                                                    <td className="py-4 px-6">
                                                        <input
                                                            type="caption"
                                                            name="caption"
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            value={values.caption}
                                                        />
                                                    </td>
                                                    <td className="py-4 px-6">
                                                        <input
                                                            type="fieldName"
                                                            name="fieldName"
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            value={values.fieldName}
                                                        />
                                                    </td>
                                                    <td className="py-4 px-6">
                                                        <input
                                                            type="file"
                                                            name="resource"
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            value={values.resource}
                                                        />
                                                    </td>
                                                    <td className="py-4 px-6">
                                                        <input
                                                            type="number"
                                                            name="pageNo"
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            value={values.pageNo}
                                                        />
                                                    </td>
                                                    <td className="py-4 px-6">
                                                        <input
                                                            type="horizontal"
                                                            name="horizontal"
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            value={values.horizontal}
                                                        />
                                                    </td>
                                                    <td className="py-4 px-6">
                                                        <input
                                                            type="vertical"
                                                            name="vertical"
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            value={values.vertical}
                                                        />
                                                    </td>
                                                    <td className="py-4 px-6">
                                                        <input
                                                            type="width"
                                                            name="width"
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            value={values.width}
                                                        />
                                                    </td>
                                                    <td className="py-4 px-6">
                                                        <input
                                                            type="height"
                                                            name="height"
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            value={values.height}
                                                        />
                                                    </td>
                                                    <td className="py-4 px-6">
                                                        <Field name="fontName" as="select">
                                                            <option value="arial">Arial</option>
                                                            <option value="sans">Sans</option>
                                                            <option value="serif">Serif</option>
                                                        </Field>
                                                    </td>
                                                    <td className="py-4 px-6">
                                                      
                                                        <input
                                                            type="fontSize"
                                                            name="fontSize"
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            value={values.fontSize}
                                                        />
                                                    </td>
                                                    <td className="py-4 px-6">
                                                        <label>
                                                            <Field
                                                                name="underline"
                                                                className="mr-2 leading-tight"
                                                                type="checkbox"
                                                            />

                                                        </label>
                                                    </td>
                                                    <td className="py-4 px-6">
                                                        <label>
                                                            <Field
                                                                name="bold"
                                                                className="mr-2 leading-tight"
                                                                type="checkbox"
                                                            />

                                                        </label>
                                                    </td>

                                                    <td className="py-4 px-6">
                                                        <label>
                                                            <Field
                                                                name="italic"
                                                                className="mr-2 leading-tight"
                                                                type="checkbox"
                                                            />

                                                        </label>
                                                    </td>
                                                    <td className="py-4 px-6">
                                                        <input
                                                            type="color"
                                                            name="hexColor"
                                                            id="hexColor"
                                                            onChange={handleChange} />
                                                    </td>
                                                    <td className="py-4 px-6">

                                                        <Field name="alignment" as="select">
                                                            <option value="left">left</option>
                                                            <option value="right">right</option>
                                                            <option value="center">center</option>
                                                        </Field>

                                                    </td>
                                                    <td className="py-4 px-6">
                                                        <label>
                                                            <Field
                                                                name="visible"
                                                                className="mr-2 leading-tight"
                                                                type="checkbox"
                                                            />

                                                        </label>
                                                    </td>


                                                </tr>
                                                <button type="submit" disabled={isSubmitting} className="bg-green-300 px-5 py-2">
                                                    Submit
                                                </button>

                                            </tbody>
                                        </table>
                                    </div>

                                </form>
                            )}
                        </Formik>
                    </div>
                </div>

            </div> */}

        </>
    )
}

export default PageLayComponent