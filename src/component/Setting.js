import React from 'react';
import { Field, useFormik } from 'formik';

function Setting(props) {

    console.log("grp id in setting.....", props.groupId)
    console.log("name id in setting.....", props.menuTempName)
    console.log("code id in setting.....", props.menuTempCode)

    const formik = useFormik({
        initialValues: {
            groupId: props.groupId,
            templateCode: props.menuTempCode,
            templateName: props.menuTempName,
            paperSizeEnum: '',
            detailLayout: '',
            headerHeight: '',
            headerHeightPage2: '',
            footerHeight: '',
            detailLineSpacing: '',
            layoutSql: '',
            detailSql: '',
            footerSql: '',
            isDefault: false,
            isLandscape: false,
            isGlobalHeader: false,
            isRenderGlobalHeader: false,
            isPageLayoutInPager2: false,
            groupbyExpression: '',
            isShowGridLine: false,
            headerDistance: '',
            screenDisplayString: '',
            labelRowCount: '',
            labelColumnCount: '',
            isDetailWordwrap: false,
            isCompactFooter: false
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });
    return (
        <div>
            <form onSubmit={formik.handleSubmit}>

                <div class="grid grid-cols-4  border bg-blue-200">
                    <div class="col-span-2 ">
                        <div className='p-1'>
                            <span>
                                <label className='  border-gray-500 ' >
                                    <span className=''>Template Code</span>
                                    <span>
                                        <input
                                            className='bg-slate-200 ml-1'
                                            type="text"
                                            name="caption"
                                            placeholder='caption'
                                            onChange={formik.handleChange}
                                            value={props.menuTempCode}
                                        />
                                    </span>
                                </label>
                            </span>
                            <span>
                                <label className='  border-gray-500 ml-2' >
                                    <span className=''>Template Name</span>
                                    <span>
                                        <input
                                            className='bg-slate-200 ml-1'
                                            type="text"
                                            name="caption"
                                            placeholder='caption'
                                            onChange={formik.handleChange}
                                            value={props.menuTempName}
                                        />
                                    </span>
                                </label>
                            </span>
                        </div>
                        <div className='p-1'>
                            <span>
                                <label className='  border-gray-500 ' >
                                    <span className=''>Detail Layout</span>
                                    <span>
                                        <input
                                            className='bg-slate-200 ml-4'
                                            type="text"
                                            name="detailLayout"
                                            placeholder='detailLayout'
                                            onChange={formik.handleChange}
                                            value={formik.values.detailLayout}
                                        />
                                    </span>
                                </label>
                            </span>
                            <span>
                                <label className='  border-gray-500 ml-3' >
                                    <span className=''>Header Height</span>
                                    <span>
                                        <input
                                            className='bg-slate-200 ml-2'
                                            type="text"
                                            name="headerHeight"
                                            placeholder='headerHeight'
                                            onChange={formik.handleChange}
                                            value={formik.values.headerHeight}
                                        />
                                    </span>
                                </label>
                            </span>
                        </div>
                        <div className='p-1'>
                            <span>
                                <label className='  border-gray-500 ' >
                                    <span className=''>Header Height Page2</span>
                                    <span>
                                        <input
                                            className='bg-slate-200 ml-2'
                                            type="text"
                                            name="headerHeightPage2"
                                            placeholder='headerHeightPage2'
                                            onChange={formik.handleChange}
                                            value={formik.values.headerHeightPage2}
                                        />
                                    </span>
                                </label>
                            </span>
                            <span>
                                <label className='  border-gray-500 ml-3' >
                                    <span className=''>Footer Height</span>
                                    <span>
                                        <input
                                            className='bg-slate-200 ml-7'
                                            type="text"
                                            name="footerHeight"
                                            placeholder='footerHeight'
                                            onChange={formik.handleChange}
                                            value={formik.values.footerHeight}
                                        />
                                    </span>
                                </label>
                            </span>
                        </div>
                        <div className='p-1'>

                            <span>
                                <label className='  border-gray-500 ' >
                                    <span className=''>Screen Display String</span>
                                    <span>
                                        <input
                                            className='bg-slate-200 ml-2'
                                            type="text"
                                            name="screenDisplayString"
                                            placeholder='screenDisplayString'
                                            onChange={formik.handleChange}
                                            value={formik.values.screenDisplayString}
                                        />
                                    </span>
                                </label>
                            </span>
                            <span>
                                <label className='  border-gray-500  ml-3' >
                                    <span className=''>Group Expression</span>
                                    <span>
                                        <input
                                            className='bg-slate-200 ml-1'
                                            type="text"
                                            name="groupbyExpression"
                                            placeholder='groupbyExpression'
                                            onChange={formik.handleChange}
                                            value={formik.values.groupbyExpression}
                                        />
                                    </span>
                                </label>
                            </span>
                        </div>

                    </div >
                    <div class="col-span-2 ">

                        <div className='p-1'>

                            <span>
                                <label className='  border-gray-500 ' >
                                    <span className=''>Compact Footer</span>
                                    <span>
                                        <input
                                            type="checkbox"
                                            className=' ml-2'
                                            name="isCompactFooter"
                                            onChange={formik.handleChange}
                                            value="isCompactFooter"
                                        />
                                    </span>

                                </label>
                            </span>
                            <span>
                                <label className='  border-gray-500 px-6 py-2 w-64' >
                                    <span className=''>Default</span>
                                    <span>
                                        <input
                                            name="isDefault"
                                            type="checkbox"
                                            onChange={formik.handleChange}
                                            value="isDefault"
                                        />
                                    </span>
                                </label>
                            </span>
                            <span>
                                <label className='  border-gray-500 ' >
                                    <span className=''>Landscape</span>
                                    <span><input
                                        type="checkbox"
                                        className=' ml-2'
                                        name="isLandscape"
                                        onChange={formik.handleChange}
                                        value="isLandscape"
                                    /></span>

                                </label>
                            </span>
                            <span>
                                <label className='  border-gray-500 px-6 py-2 w-64' >
                                    <span className=''>Global Header</span>
                                    <span>
                                        <input
                                            type="checkbox"
                                            className=' ml-2'
                                            name="isGlobalHeader"
                                            onChange={formik.handleChange}
                                            value="isGlobalHeader"
                                        />
                                    </span>
                                </label>
                            </span>

                        </div>
                        <div className='p-1'>
                            <span >
                                <label className='  border-gray-500 ' >
                                    <span className=''>Render Global Header</span>
                                    <span>
                                        <input
                                            type="checkbox"
                                            className='ml-2'
                                            name="isRenderGlobalHeader"
                                            onChange={formik.handleChange}
                                            value="isRenderGlobalHeader"
                                        /></span>
                                </label>
                            </span>
                            <span>
                                <label className='  border-gray-500 ml-8' >
                                    <span className=''>Detail Wordwrap</span>
                                    <span>
                                        <input
                                            type="checkbox"
                                            className=' ml-1'
                                            name="isDetailWordwrap"
                                            onChange={formik.handleChange}
                                            value="isDetailWordwrap"
                                        />
                                    </span>
                                </label>
                            </span>

                            <span>
                                <label className='  border-gray-500  ml-8' >
                                    <span className=''>Label Col</span>
                                    <span>
                                        <input
                                            className='bg-slate-100 w-12 ml-2'
                                            type="number"
                                            name="labelColumnCount"

                                            onChange={formik.handleChange}
                                            value={formik.values.labelColumnCount}
                                        />
                                    </span>
                                </label>
                            </span>

                        </div>
                        <div className='p-1'>

                            <span>
                                <label className='  border-gray-500 ' >
                                    <span className=''>Page Layout in Other Page</span>
                                    <span>
                                        <input
                                            type="checkbox"
                                            className=' ml-2'
                                            name="isPageLayoutInPager2"
                                            onChange={formik.handleChange}
                                            value="isPageLayoutInPager2"
                                        />
                                    </span>
                                </label>
                            </span>
                            <span>

                                <span >
                                    <label className='  border-gray-500 ml-5' >
                                        <span className=''>Show Guideline</span>
                                        <span>
                                            <input
                                                type="checkbox"
                                                className='ml-2'
                                                name="isShowGridLine"
                                                onChange={formik.handleChange}
                                                value="isShowGridLine"
                                            />
                                        </span>
                                    </label>
                                </span>
                                <label className='  border-gray-500 ml-4 ' >
                                    <span className=''>Label Row </span>
                                    <span>
                                        <input
                                            className='bg-slate-100 w-12'
                                            type="number"
                                            name="labelRowCount"
                                            placeholder=''
                                            onChange={formik.handleChange}
                                            value={formik.values.labelRowCount}
                                        />
                                    </span>
                                </label>
                            </span>
                        </div>
                        <div className='p-3'>
                            <span>
                                <label className='  border-gray-500 -ml-2 ' >
                                    <span className=''>Paper Size </span>
                                    <span>
                                        <input
                                            className='bg-slate-100 w-12'
                                            type="number"
                                            name="paperSizeEnum"
                                            placeholder=''
                                            onChange={formik.handleChange}
                                            value={formik.values.paperSizeEnum}
                                        />
                                    </span>
                                </label>
                                <span>
                                    <label className='  border-gray-500  ml-4' >
                                        <span className=''>Detail Line Spacing</span>
                                        <span>
                                            <input
                                                className='bg-slate-100 w-12 ml-1'
                                                type="number"
                                                name="detailLineSpacing"

                                                onChange={formik.handleChange}
                                                value={formik.values.detailLineSpacing}
                                            />
                                        </span>
                                    </label>
                                </span>
                                <span>
                                    <label className='  border-gray-500 ml-4 ' >
                                        <span className=''>Header Distance</span>
                                        <span>
                                            <input
                                                className='bg-slate-100 w-12 ml-2'
                                                type="number"
                                                name="headerDistance"

                                                onChange={formik.handleChange}
                                                value={formik.values.headerDistance}
                                            />
                                        </span>
                                    </label>
                                </span>
                            </span>


                        </div>
                    </div>
                    <div>
                        <span>
                            <label className='  border-gray-500 ml-2 ' >
                                <span className=''>SQL QUERY</span>
                                <span>
                                    <input
                                        className='bg-slate-100 w-96 ml-2 h-32 border border-black'
                                        type="text"
                                        name="labelColumnCount"

                                        onChange={formik.handleChange}
                                        value={formik.values.caption}
                                    />
                                </span>
                            </label>
                        </span>
                    </div>

                    <div className=' px-16 py-16'>
                        <button type="submit" className='bg-green-200 h-8 w-32 ml-24'>Submit</button>
                    </div>
                </div>
            </form >
        </div >
    )
}

export default Setting