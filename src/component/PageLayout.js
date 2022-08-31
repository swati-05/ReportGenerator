import React,{useState} from 'react'
import { useFormik, Field } from 'formik'

function PageLayout() {

    const [underlineCheckValue, setunderlineCheckValue] = useState(false)
    const [boldCheckValue, setboldCheckValue] = useState(false)
    const [italicCheckValue, setitalicCheckValue] = useState(false)
    const [visibilityCheckValue, setvisibilityCheckValue] = useState(false)

    const formik = useFormik({
        initialValues: {
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

        },


        onSubmit: (values, resetForm) => {
            alert("save")
            console.log('data ', values)


        }

    })

    const handleChange = (e) => {
        let name = e.target.name
        let checkValue = e.target.checked
        // let value = e.target.value

        { name === 'underline' && (checkValue === true ? setunderlineCheckValue(true) : setunderlineCheckValue(false)) }
        { name === 'bold' && (checkValue === true ? setboldCheckValue(true) : setboldCheckValue(false)) }
        { name === 'italic' && (checkValue === true ? setitalicCheckValue(true) : setitalicCheckValue(false)) }
        { name === 'visibility' && (checkValue === true ? setvisibilityCheckValue(true) : setvisibilityCheckValue(false)) }
    }

    
    return (
        <>
            <form onSubmit={formik.handleSubmit} onChange={handleChange}>


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
                                {/* <th scope="row" className=" font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                              
                                          </th> */}
                                <td className="py-4 px-6">
                                    <select  {...formik.getFieldProps('fieldType')} name="fieldType" as="select">
                                        <option value="box">Box</option>
                                        <option value="caption">Caption</option>
                                        <option value="image">Image</option>
                                        <option value="line">Line</option>
                                        <option value="param">Param</option>
                                        <option value="captionWR">CaptionWR</option>
                                    </select>
                                </td>
                                <td className="py-4 px-6">
                                    <input {...formik.getFieldProps('caption')}
                                        type="text"
                                        name="caption"
                                        // onChange={handleChange}
                                        // onBlur={handleBlur}
                                        // value={values.caption}
                                    />
                                </td>
                                <td className="py-4 px-6">
                                    <input {...formik.getFieldProps('fieldName')}
                                        type="text"
                                        name="fieldName"
                                        // onChange={handleChange}
                                        // onBlur={handleBlur}
                                        // value={values.fieldName}
                                    />
                                </td>
                                <td className="py-4 px-6">
                                    <input {...formik.getFieldProps('resource')}
                                        type="file"
                                        name="resource"
                                        // onChange={handleChange}
                                        // onBlur={handleBlur}
                                        // value={values.resource}
                                    />
                                </td>
                                <td className="py-4 px-6">
                                    <input  {...formik.getFieldProps('pageNo')}
                                        type="number"
                                        name="pageNo"
                                        // onChange={handleChange}
                                        // onBlur={handleBlur}
                                        // value={values.pageNo}
                                    />
                                </td>
                                <td className="py-4 px-6">
                                    <input {...formik.getFieldProps('horizontal')}
                                        type="horizontal"
                                        name="horizontal"
                                        // onChange={handleChange}
                                        // onBlur={handleBlur}
                                        // value={values.horizontal}
                                    />
                                </td>
                                <td className="py-4 px-6">
                                    <input {...formik.getFieldProps('vertical')}
                                        type="vertical"
                                        name="vertical"
                                        // onChange={handleChange}
                                        // onBlur={handleBlur}
                                        // value={values.vertical}
                                    />
                                </td>
                                <td className="py-4 px-6">
                                    <input  {...formik.getFieldProps('width')}
                                        type="width"
                                        name="width"
                                        // onChange={handleChange}
                                        // onBlur={handleBlur}
                                        // value={values.width}
                                    />
                                </td>
                                <td className="py-4 px-6">
                                    <input  {...formik.getFieldProps('height')}
                                        type="height"
                                        name="height"
                                        // onChange={handleChange}
                                        // onBlur={handleBlur}
                                        // value={values.height}
                                    />
                                </td>
                                <td className="py-4 px-6">
                                    <select  {...formik.getFieldProps('fontName')} name="fontName" as="select">
                                        <option value="arial">Arial</option>
                                        <option value="sans">Sans</option>
                                        <option value="serif">Serif</option>
                                    </select>
                                </td>
                                <td className="py-4 px-6">
                                    {/* <Field name="fontSize" as="select">
                                                  <option value="">Red</option>
                                                  <option value="">Green</option>
                                                  <option value="">Blue</option>
                                              </Field> */}
                                    <input  {...formik.getFieldProps('fontSize')}
                                        type="fontSize"
                                        name="fontSize"
                                        // onChange={handleChange}
                                        // onBlur={handleBlur}
                                        // value={values.fontSize}
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
                                        // onChange={handleChange}
                                         />
                                </td>
                                <td className="py-4 px-6">

                                    <select  {...formik.getFieldProps('alignment')} name="alignment" as="select">
                                        <option value="left">left</option>
                                        <option value="right">right</option>
                                        <option value="center">center</option>
                                    </select>

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
                            <button type="submit" className="bg-green-300 px-5 py-2">
                                Submit
                            </button>

                        </tbody>
                    </table>
                </div>

            </form>
        </>
    )
}

export default PageLayout