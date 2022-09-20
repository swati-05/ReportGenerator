import React, { useState } from 'react';
import { Field, useFormik } from 'formik';
import { useParams } from 'react-router-dom';

function Setting(props) {


    console.log("template name in setting", props.tempMenuName)
    console.log("template code  in setting", props.tempMenuCode)
    console.log("template type  in setting", props.tempLayoutType)
    console.log("group id in setting", props.groupId)



    // const [layoutQuery, setlayoutQuery] = useState('hidden')
    // layoutQuery == 'hidden' ? setlayoutQuery('') : setlayoutQuery('hidden')


    const [footerSqlValue, setfooterSqlValue] = useState()
    const [detailSqlValue, setdetailSqlValue] = useState()
    const [layoutSqlValue, setlayoutSqlValue] = useState()
    const [templateLayout, setTemplateLayout] = useState([])
    // console.log('collective form values : ', templateLayout);

    const formik = useFormik({
        initialValues: {
            groupId: props.groupId,
            templateCode: props.tempMenuCode,
            templateName: props.tempMenuName,
            paperSizeEnum: '',
            detailLayout: props.tempLayoutType,
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
            console.log("setting data..", values)
            props.collectAllLayoutDataFun('setting', values)

        },
    });
    const inputStyle = "border px-2 py-1 rounded-sm shadow-sm";
    const labelStyle = "text-sm px-2  text-gray-600";
    return (



        <div className='w-full p-5 text-sm text-gray-500 bg-[#e2e9f4]  shadow-[#99baea] hover:shadow-inner'>
            <form onSubmit={formik.handleSubmit}>

                {/* first grid */}
                <div class="grid grid-cols-3 z-20 font-bold mb-3">

                    <div>
                        <span className={`${labelStyle}`}>Template Code</span>
                        <input
                            className={`${inputStyle} ml-1`}
                            type="text"
                            name="tempCode"
                            placeholder=''
                            value={props.tempMenuCode}
                        />
                    </div>

                    <div>
                        <span className={`${labelStyle}`}>Header Height</span>
                        <input
                            className={`${inputStyle} ml-5`}
                            type="text"
                            name="headerHeight"
                            placeholder=''
                            onChange={formik.handleChange}
                            value={formik.values.headerHeight}
                        />
                    </div>
                    <div>
                        <span className={`${labelStyle}`}>Screen Display String</span>
                        <input
                            className={`${inputStyle} `}
                            type="text"
                            name="screenDisplayString"
                            placeholder=''
                            onChange={formik.handleChange}
                            value={formik.values.screenDisplayString}
                        />
                    </div>


                </div>
                {/* second grid */}
                <div class="grid grid-cols-3 z-20 font-bold mb-3">


                    <div>
                        <span className={`${labelStyle}`}>Template Name</span>
                        <input
                            className={`${inputStyle} `}
                            type="text"
                            name="tempName"
                            placeholder=''
                            value={props.tempMenuName}
                        />
                    </div>
                    <div>
                        <span className={`${labelStyle}`}>Footer Height</span>
                        <input
                            className={`${inputStyle} ml-6`}
                            type="text"
                            name="footerHeight"
                            placeholder=''
                            onChange={formik.handleChange}
                            value={formik.values.footerHeight}
                        />
                    </div>
                    <div>
                        <span className={`${labelStyle}`}>Header Height Page2</span>
                        <input
                            className={`${inputStyle}`}
                            type="text"
                            name="headerHeightPage2"
                            placeholder=''
                            onChange={formik.handleChange}
                            value={formik.values.headerHeightPage2}
                        />
                    </div>


                </div>
                {/* third grid */}
                <div class="grid grid-cols-3 z-20 font-bold mb-3">
                    <div>
                        <span className={`${labelStyle} `}>Detail Layout</span>
                        <input
                            className={`${inputStyle} ml-4`}
                            type="text"
                            name="detailLayout"
                            placeholder=''
                            value={props.tempLayoutType}
                        />
                    </div>
                    <div>
                        <span className={`${labelStyle}`}>Group Expression</span>
                        <input
                            className={`${inputStyle}`}
                            type="text"
                            name="groupbyExpression"
                            placeholder=''
                            onChange={formik.handleChange}
                            value={formik.values.groupbyExpression}
                        />
                    </div>
                    <div>
                        <span className={`${labelStyle}`}>Header Distance</span>
                        <input
                            className={`${labelStyle} ml-8 border`}
                            type="number"
                            name="headerDistance"

                            onChange={formik.handleChange}
                            value={formik.values.headerDistance}
                        />
                    </div>

                </div>
                {/*Fourth grid */}
                <div class="grid grid-cols-3 z-20 font-bold mb-4">
                    <div>
                        <span className={`${labelStyle}`}>Label Row</span>
                        <input
                            className={`${labelStyle} ml-8 border`}
                            type="number"
                            name="labelRowCount"
                            placeholder=''
                            onChange={formik.handleChange}
                            value={formik.values.labelRowCount}
                        />
                    </div>
                    <div>
                        <span className={`${labelStyle}`}>Label Col</span>
                        <input
                            className={`${labelStyle} ml-12 border`}
                            type="number"
                            name="labelColumnCount"

                            onChange={formik.handleChange}
                            value={formik.values.labelColumnCount}
                        />
                    </div>
                    <div>
                        <span className={`${labelStyle} `}>Detail Line Space</span>
                        <input
                            className={`${labelStyle} ml-7 border`}
                            type="number"
                            name="detailLineSpacing"

                            onChange={formik.handleChange}
                            value={formik.values.detailLineSpacing}
                        />
                    </div>
                </div>

                {/* Fifth grid */}
                <div class="grid grid-cols-4 z-20 font-bold mb-4">
                    <div>
                        <span className={`${labelStyle}`}>Render Global Header</span>
                        <input
                            type="checkbox"
                            className={`${labelStyle}`}
                            name="isRenderGlobalHeader"
                            onChange={formik.handleChange}
                            value="isRenderGlobalHeader"
                        />
                    </div>


                    <div>
                        <span className={`${labelStyle}`}>Show Grid Line</span>
                        <input
                            type="checkbox"
                            className={`${labelStyle} border`}
                            name="isShowGridLine"
                            onChange={formik.handleChange}
                            value="isShowGridLine"
                        />
                    </div>
                    <div>
                        <span className={`${labelStyle}`}>Page Layout 2</span>
                        <input
                            type="checkbox"
                            className={`${labelStyle}`}
                            name="isPageLayoutInPager2"
                            onChange={formik.handleChange}
                            value="isPageLayoutInPager2"
                        />
                    </div>
                    <div>
                        <div>
                            <span className={`${labelStyle}`}>Paper Size</span>

                            <select {...formik.getFieldProps('paperSizeEnum')} className={`${labelStyle} border`}   >
                                <option value="594,841"> A1</option>
                                <option value="420,594"> A2</option>
                                <option value="297,420"> A3</option>
                                <option value="210,297"> A4</option>
                                <option value="148,210"> A5</option>
                                <option value="105,148"> A6</option>
                                <option value="105,148"> A7</option>
                                <option value="52,74"> A8</option>
                            </select>

                        </div>
                    </div>


                </div>
                {/* Sixth grid */}
                <div class="grid grid-cols-4 z-20 font-bold mb-3">

                    <div>
                        <span className={`${labelStyle}`}>Compact Footer</span>
                        <input
                            className={`${labelStyle}`}
                            type="checkbox"
                            name="isCompactFooter"
                            onChange={formik.handleChange}
                            value="isCompactFooter"
                        />
                    </div>
                    <div>
                        <span className={`${labelStyle}`}>Default</span>
                        <input
                            className={`${labelStyle}`}
                            name="isDefault"
                            type="checkbox"
                            onChange={formik.handleChange}
                            value="isDefault"
                        />
                    </div>
                    <div>
                        <span className={`${labelStyle}`}>Landscape</span>
                        <input
                            type="checkbox"
                            className={`${labelStyle}`}
                            name="isLandscape"
                            onChange={formik.handleChange}
                            value="isLandscape"
                        />
                    </div>


                    <div>
                        <span className={`${labelStyle}`}>Detail Wordwrap</span>
                        <input
                            type="checkbox"
                            className={`${labelStyle}`}
                            name="isDetailWordwrap"
                            onChange={formik.handleChange}
                            value="isDetailWordwrap"
                        />
                    </div>
                </div>
                <div>
                    <button type='submit' className='bg-[#074097] px-8 mt-6  py-2 float-right  border text-white font-bold'>Add</button>
                </div>
                <div>
                    <button type='buttonsubmit' className='bg-[#074097] px-8 mt-6  py-2   border text-white '>Layout Query</button>
                    <button type='buttonsubmit' className='bg-[#074097] px-8 mt-6  py-2   border text-white '>Detail Query</button>
                    <button type='buttonsubmit' className='bg-[#074097] px-8 mt-6  py-2   border text-white '>Footer Query</button>
                </div>
                <div className={` w-full`}>
                    <textarea className={` h-28 w-full border border-gray-200 shadow-inner shadow-[#99baea] mt-2  `} placeholder='sql query'
                        name="layout_data"
                        value={layoutSqlValue} onChange={(e) => setlayoutSqlValue(e.target.value)}
                    />
                </div>
                <div className='w-full'>
                    <textarea className={`h-28 w-full border border-gray-200 mt-2 shadow-inner shadow-[#99baea]`} placeholder='sql query'
                        name="detail_data"
                        value={detailSqlValue} onChange={(e) => setdetailSqlValue(e.target.value)}

                    />
                </div>
                <div className='w-full shadow-sm '>
                    <textarea className={`h-28 w-full  border-gray-200 mt-2 shadow-inner shadow-[#99baea]`} placeholder='sql query'
                        name="detail_data"
                        value={footerSqlValue} onChange={(e) => setfooterSqlValue(e.target.value)}

                    />
                </div>
            </form >
        </div >
    )
}

export default Setting