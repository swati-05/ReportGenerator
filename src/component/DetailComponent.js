import React, { useEffect, useState } from 'react'
import { Field, Formik } from 'formik';

function DetailComponent() {
    return (
        <>
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
                        underline: '',
                        bold: '',
                        italic: '',
                        hexColor: '',
                        visible: '',
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
                        /* and other goodies */
                    }) => (
                        <form onSubmit={handleSubmit}>


                            <div className=" shadow-md sm:rounded-lg  text-center">
                                <table className=" text-sm text-left text-gray-500 dark:text-gray-400 table-auto w-5/6">
                                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                        <tr>
                                            <th scope="col" className="py-3 px-4">
                                                Field Type
                                            </th>
                                            <th scope="col" className="py-3 px-4">
                                                Caption
                                            </th>
                                            <th scope="col" className="py-3 px-4">
                                                Field Name
                                            </th>
                                            <th scope="col" className="py-3 px-4">
                                                Resource
                                            </th>

                                            <th scope="col" className="py-3 px-4">
                                                Page no.
                                            </th>
                                            <th scope="col" className="py-3 px-4">
                                                X
                                            </th>
                                            <th scope="col" className="py-3 px-4">
                                                Y
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className=" bg-gray-400 border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-500 dark:hover:bg-gray-600">
                                            
                                            <td className="py-4 px-4">
                                                <Field name="fieldType" as="select">
                                                    <option value="box">Box</option>
                                                    <option value="caption">Caption</option>
                                                    <option value="image">Image</option>
                                                    <option value="line">Line</option>
                                                    <option value="param">Param</option>
                                                    <option value="captionWR">CaptionWR</option>
                                                </Field>
                                            </td>
                                            <td className="py-4 px-4">
                                                <input
                                                    type="caption"
                                                    name="caption"
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.caption}
                                                />
                                            </td>
                                            <td className="py-4 px-4">
                                                <input
                                                    type="fieldName"
                                                    name="fieldName"
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.fieldName}
                                                />
                                            </td>
                                            <td className="py-4 px-4">
                                                <input
                                                    type="file"
                                                    name="resource"
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.resource}
                                                />
                                            </td>
                                            <td className="py-4 px-4">
                                                <input
                                                    type="number"
                                                    name="pageNo"
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.pageNo}
                                                />
                                            </td>
                                            <td className="py-4 px-4">
                                                <input
                                                    type="horizontal"
                                                    name="horizontal"
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.horizontal}
                                                />
                                            </td>
                                            <td className="py-4 px-4">
                                                <input
                                                    type="vertical"
                                                    name="vertical"
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.vertical}
                                                />
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <table className='table-auto mx-auto'>
                                    <thead>
                                        <tr>
                                            <th scope="col" className="py-3 px-4">
                                                Width
                                            </th>

                                            <th scope="col" className="py-3 px-4">
                                                Height
                                            </th>
                                            <th scope="col" className="py-3 px-4">
                                                Font Name
                                            </th>
                                            <th scope="col" className="py-3 px-4">
                                                Font Size
                                            </th>
                                            <th scope="col" className="py-3 px-4">
                                                underline
                                            </th>
                                            <th scope="col" className="py-3 px-4">
                                                bold
                                            </th>

                                            <th scope="col" className="py-3 px-4">
                                                italic
                                            </th>
                                            <th scope="col" className="py-3 px-4">
                                                Color
                                            </th>
                                            <th scope="col" className="py-3 px-4">
                                                Alignment
                                            </th>
                                            <th scope="col" className="py-3 px-4">
                                                Visible
                                            </th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="bg-gray-400 border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-500 dark:hover:bg-gray-600">
                                            <td className="py-4 px-4">
                                                <input
                                                    type="width"
                                                    name="width"
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.width}
                                                />
                                            </td>
                                            <td className="py-4 px-4">
                                                <input
                                                    type="height"
                                                    name="height"
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.height}
                                                />
                                            </td>
                                            <td className="py-4 px-4">
                                                <Field name="fontName" as="select">
                                                    <option value="arial">Arial</option>
                                                    <option value="sans">Sans</option>
                                                    <option value="serif">Serif</option>
                                                </Field>
                                            </td>
                                            <td className="py-4 px-4">
                                                {/* <Field name="fontSize" as="select">
                                                    <option value="">Red</option>
                                                    <option value="">Green</option>
                                                    <option value="">Blue</option>
                                                </Field> */}
                                                <input
                                                    type="fontSize"
                                                    name="fontSize"
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.fontSize}
                                                />
                                            </td>
                                            <td className="py-4 px-4">
                                                <label>
                                                    <Field
                                                        name="underline"
                                                        className="mr-2 leading-tight"
                                                        type="checkbox"
                                                    />

                                                </label>
                                            </td>
                                            <td className="py-4 px-4">
                                                <label>
                                                    <Field
                                                        name="bold"
                                                        className="mr-2 leading-tight"
                                                        type="checkbox"
                                                    />

                                                </label>
                                            </td>

                                            <td className="py-4 px-4">
                                                <label>
                                                    <Field
                                                        name="italic"
                                                        className="mr-2 leading-tight"
                                                        type="checkbox"
                                                    />

                                                </label>
                                            </td>
                                            <td className="py-4 px-4">
                                                <input
                                                    type="color"
                                                    name="hexColor"
                                                    id="hexColor"
                                                    onChange={handleChange} />
                                            </td>
                                            <td className="py-4 px-4">

                                                <Field name="alignment" as="select">
                                                    <option value="left">left</option>
                                                    <option value="right">right</option>
                                                    <option value="center">center</option>
                                                </Field>

                                            </td>
                                            <td className="py-4 px-4">
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
        </>
    )
}

export default DetailComponent