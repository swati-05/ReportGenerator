import { Field, Formik } from 'formik'
import React from 'react'


function SettingComponent() {

    
    return (
        <>
            {/* <div className='ml-64'>
                <div className=''>
                    <span>
                        <label className='  border-gray-500 px-6 py-2 w-64' >
                            <span className=''>Template Code</span>
                            <span><input type="text" className='w-56 ml-2' /></span>
                        </label>
                    </span>
                    <span>
                        <label className='  border-gray-500 px-6 py-2 w-64' >
                            <span className=''>Template Name</span>
                            <span><input type="text" className='w-56 ml-2' /></span>
                        </label>
                    </span>
                </div>
                
                <div className='p-3'>

                    <span>
                        <label className='  border-gray-500 px-3 py-2 w-64' >
                            <span className=''>Footer Height</span>
                            <span><input type="text" className='w-56 ml-4' /></span>
                        </label>
                    </span>
                    <span>
                        <label className='  border-gray-500 px-10 py-2 w-64' >
                            <span className=''>Detail Layout</span>
                            <span><input type="text" className='w-56 ml-5' /></span>
                        </label>
                    </span>
                </div>
                
                <div className='p-3'>

                    <span>
                        <label className='  border-gray-500 px-3 py-1 w-64' >
                            <span className=''>Report Heading</span>
                            <span><input type="text" className='w-56 ml-2' /></span>
                        </label>
                    </span>
                    <span>
                        <label className='  border-gray-500 px-9 py-2 w-64' >
                            <span className=''>Detail Layout</span>
                            <span><input type="text" className='w-56 ml-5' /></span>
                        </label>
                    </span>
                </div>
                <div className='p-3'>

                    <span>
                        <label className='  border-gray-500 px-3 py-2 w-64' >
                            <span className=''>Group Header Distance</span>
                            <span><input type="text" className='w-56 ml-2' /></span>
                        </label>
                    </span>
                    <span>
                        <label className='  border-gray-500 px-6 py-2 w-64' >
                            <span className=''>Header Height Page 2</span>
                            <span><input type="text" className='w-56 ml-2' /></span>
                        </label>
                    </span>
                </div>
                <div className='ml-6'>
                    <span>Header Height</span>
                    <span><input type="text" className='w-24 ml-2' /></span>
                    <span className='ml-6'>Footer Height</span>
                    <span><input type="text" className='w-24 ml-2' /></span>

                    <span className='ml-6'>Line Space</span>
                    <span><input type="number" className='w-24 ml-2' /></span>
                    <span className='ml-6'>Paper Size</span>
                    <span>
                        <select type="text" className='w-24 ml-2'>
                            <option>A4</option>
                            <option>A4</option>
                            <option>A4</option>
                            <option>A4</option>
                        </select>
                    </span>

                </div>
                <div className='p-3'>

                    <span>
                        <label className='  border-gray-500 ' >
                            <span className=''>Compact Footer</span>
                            <span><Field type="checkbox" className=' ml-2' /></span>
                        </label>
                    </span>
                    <span>
                        <label className='  border-gray-500 px-6 py-2 w-64' >
                            <span className=''>Line WR</span>
                            <span><Field type="checkbox" className=' ml-2' /></span>
                        </label>
                    </span>
                    <span>
                        <label className='  border-gray-500 px-6 py-2 w-64' >
                            <span className=''>Render Global Header</span>
                            <span><Field type="checkbox" className='ml-2' /></span>
                        </label>
                    </span>
                    <span>
                        <label className='  border-gray-500 px-6 py-2 w-64' >
                            <span className=''>Page Layout in Other Page</span>
                            <span><Field type="checkbox" className=' ml-2' /></span>
                        </label>
                    </span>
                </div>
               
                <div className='p-3'>

                    <span>
                        <label className='  border-gray-500 ' >
                            <span className=''>Label Row </span>
                            <span><input type="number" className='' /></span>
                        </label>
                    </span>
                    <span>
                        <label className='  border-gray-500 px-6 py-2 w-64' >
                            <span className=''>Label Col</span>
                            <span><input type="number" className='w-56 ml-2' /></span>
                        </label>
                    </span>
                </div>

            </div> */}
             {/* <Form>
          <div id="my-radio-group">Picked</div>
          <div role="group" aria-labelledby="my-radio-group">
            <label>
              <Field type="radio" name="picked" value="One" />
              One
            </label>
            <label>
              <Field type="radio" name="picked" value="Two" />
              Two
            </label>
            <div>Picked: {values.picked}</div>
          </div>

          <button type="submit">Submit</button>
        </Form> */}


            <div>
                <Formik
                    initialValues={{
                        // reportTemplate_id: templateId,
                        groupId: '',
                        templateCode: '',
                        templateName:'',
                        paperSizeEnum: '',
                        detailLayout: '',
                        headerHeight: '',
                        headerHeightPage2: '',
                        footerHeight: '',
                        detailLineSpacing: '',
                        layoutSql: '',
                        detailSql: '',
                        footerSql: '',
                        isDefault: '',
                        isLandscape: '',
                        isGlobalHeader: '',
                        isRenderGlobalHeader: '',
                        isPageLayoutInPager2: '',
                        groupbyExpression: '',
                        isShowGridLine: '',
                        headerDistance: '',
                        screenDisplayString: '',
                        labelRowCount: '',
                        labelColumnCount: '',
                        isDetailWordwrap: '',
                        isCompactFooter: ''

                    }}

                    onSubmit={(values, { setSubmitting }) => {
                        setTimeout(() => {
                            alert(JSON.stringify(values, null, 2));

                            console.log('form component', values);

                            // setAddRecordTable([...addRecordTable, values]);

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
                            <div className='ml-64'>
                                <div className=''>
                                    <span>
                                        <label className='  border-gray-500 px-6 py-2 w-64' >
                                            <span className=''>Template Code</span>
                                            <span>
                                                <input
                                                    className='w-56 ml-2'
                                                    type="text"
                                                    name="caption"
                                                    placeholder='caption'
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.caption}
                                                />
                                            </span>
                                        </label>
                                    </span>
                                    <span>
                                        <label className='  border-gray-500 px-6 py-2 w-64' >
                                            <span className=''>Template Name</span>
                                            <span>
                                                <input
                                                    className='w-56 ml-2'
                                                    type="text"
                                                    name="caption"
                                                    placeholder='caption'
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.caption}
                                                />
                                            </span>
                                        </label>
                                    </span>
                                </div>

                                <div className='p-3'>

                                    <span>
                                        <label className='  border-gray-500 px-3 py-2 w-64' >
                                            <span className=''>Footer Height</span>
                                            <span>
                                                <input
                                                    className='w-56 ml-4'
                                                    type="text"
                                                    name="footerHeight"
                                                    placeholder='footerHeight'
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.footerHeight}
                                                />
                                            </span>
                                        </label>
                                    </span>
                                    <span>
                                        <label className='  border-gray-500 px-10 py-2 w-64' >
                                            <span className=''>Detail Layout</span>
                                            <span>
                                                <input
                                                    className='w-56 ml-5'
                                                    type="text"
                                                    name="detailLayout"
                                                    placeholder='detailLayout'
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.detailLayout}
                                                />
                                            </span>
                                        </label>
                                    </span>
                                </div>

                                <div className='p-3'>

                                    <span>
                                        <label className='  border-gray-500 px-3 py-1 w-64' >
                                            <span className=''>Report Heading</span>
                                            <span>
                                                <input
                                                    className='w-56 ml-2'
                                                    type="text"
                                                    name="caption"
                                                    placeholder='caption'
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.caption}
                                                />
                                            </span>
                                        </label>
                                    </span>
                                    <span>
                                        <label className='  border-gray-500 px-9 py-2 w-64' >
                                            {/* <span className=''>Detail Layout</span>
                                            <span>
                                                <input
                                                    className='w-56 ml-5'
                                                    type="text"
                                                    name="caption"
                                                    placeholder='caption'
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.caption}
                                                />
                                            </span> */}
                                        </label>
                                    </span>
                                </div>
                                <div className='p-3'>

                                    <span>
                                        <label className='  border-gray-500 px-3 py-2 w-64' >
                                            <span className=''>Group Header Distance</span>
                                            <span>
                                                <input
                                                    className='w-56 ml-2'
                                                    type="text"
                                                    name="headerDistance"
                                                    placeholder='headerDistance'
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.headerDistance}
                                                />
                                            </span>
                                        </label>
                                    </span>
                                    <span>
                                        <label className='  border-gray-500 px-6 py-2 w-64' >
                                            <span className=''>Header Height Page 2</span>
                                            <span>
                                                <input
                                                    className='w-56 ml-2'
                                                    type="text"
                                                    name="headerHeightPage2"
                                                    placeholder='headerHeightPage2'
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.headerHeightPage2}
                                                />
                                            </span>
                                        </label>
                                    </span>
                                </div>
                                <div className='ml-6'>
                                    <span>Header Height</span>
                                    <span>
                                        <input
                                            className='w-24 ml-2'
                                            type="text"
                                            name="headerHeight"
                                            placeholder='headerHeight'
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.headerHeight}
                                        />
                                    </span>
                                    {/* <span className='ml-6'>Footer Height</span>
                                    <span>
                                        <input
                                            className='w-24 ml-2'
                                            type="text"
                                            name="caption"
                                            placeholder='caption'
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.caption}
                                        />
                                    </span> */}

                                    <span className='ml-6'>Line Space</span>
                                    <span>
                                        <input
                                            className='w-24 ml-2'
                                            type="number"
                                            name="detailLineSpacing"
                                            placeholder='detailLineSpacing'
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.detailLineSpacing}
                                        />
                                    </span>
                                    <span className='ml-6'>Paper Size</span>
                                    <span>
                                        <Field name= "paperSizeEnum" type="text" className='w-24 ml-2'>
                                            <option>A4</option>
                                            <option>A4</option>
                                            <option>A4</option>
                                            <option>A4</option>
                                        </Field>
                                    </span>

                                </div>
                                <div className='p-3'>

                                    <span>
                                        <label className='  border-gray-500 ' >
                                            <span className=''>Compact Footer</span>
                                            <span><Field type="checkbox" className=' ml-2' name="isCompactFooter" /></span>

                                        </label>
                                    </span>
                                    <span>
                                        <label className='  border-gray-500 px-6 py-2 w-64' >
                                            <span className=''>Line WR</span>
                                            <span><Field type="checkbox" className=' ml-2' name="isUnderline" /></span>
                                        </label>
                                    </span>
                                    <span>
                                        <label className='  border-gray-500 px-6 py-2 w-64' >
                                            <span className=''>Render Global Header</span>
                                            <span><Field type="checkbox" className='ml-2' name="isRenderGlobalHeader" /></span>
                                        </label>
                                    </span>
                                    <span>
                                        <label className='  border-gray-500 px-6 py-2 w-64' >
                                            <span className=''>Page Layout in Other Page</span>
                                            <span><Field type="checkbox" className=' ml-2' name="isPageLayoutInPager2" /></span>
                                        </label>
                                    </span>
                                </div>

                                <div className='p-3'>

                                    <span>
                                        <label className='  border-gray-500 ' >
                                            <span className=''>Label Row </span>
                                            <span>
                                                <input
                                                    className=''
                                                    type="number"
                                                    name="labelRowCount"
                                                    placeholder='labelRowCount'
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.labelRowCount}
                                                />
                                            </span>
                                        </label>
                                    </span>
                                    <span>
                                        <label className='  border-gray-500 px-6 py-2 w-64' >
                                            <span className=''>Label Col</span>
                                            <span>
                                                <input
                                                    className='w-56 ml-2'
                                                    type="number"
                                                    name="labelColumnCount"
                                                    placeholder='labelColumnCount'
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.labelColumnCount}
                                                />
                                            </span>
                                        </label>
                                    </span>
                                </div>

                            </div>
                            <div className='bg-white float-right'>
                                <button type="submit" disabled={isSubmitting} className="bg-green-300 px-5 py-2">
                                    Add Template
                                </button>
                            </div>
                        </form>
                    )}
                </Formik>
            </div>
        </>
    )
}

export default SettingComponent