import React, { useState } from 'react';
import { Field, useFormik } from 'formik';

function Setting(props) {
    // const {collectAllLayoutDataFun} = props.values;


    // console.log("grp id in setting.....", props.groupId)
    // console.log("name id in setting.....", props.menuTempName)
    // console.log("code id in setting.....", props.menuTempCode)
    console.log("layout....", props.Layout)
    console.log("detail....", props.Detail)
    console.log("footer....", props.Footer)


    const [templateLayout, setTemplateLayout] = useState([])
    // console.log('collective form values : ', templateLayout);

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
            console.log("setting data..",values)
           props.collectAllLayoutDataFun('setting',values)
            // setTemplateLayout(values);
            // setTemplateLayout({ ...templateLayout, values, ['layout']: props.Layout });
            // setTemplateLayout({ ...templateLayout, values, ['Detail']: props.Detail });
            // setTemplateLayout({ ...templateLayout, values, ['footer']: props.Footer });
        },
    });
    const inputStyle = "border px-2 py-1 rounded-lg";
    const labelStyle = "text-sm px-2";
    return (



        <div className='w-full  border p-2 bg-sky-100 text-gray-800'>
            <form onSubmit={formik.handleSubmit}>

                {/* first grid */}
                <div class="grid grid-cols-3 z-20 font-bold mb-3">

                    <div>
                        <span className={`${labelStyle}`}>Template Code</span>
                        <input
                            className={`${inputStyle}`}
                            type="text"
                            name="tempCode"
                            placeholder=''
                            onChange={formik.handleChange}
                            value={props.menuTempCode}
                        />
                    </div>
                    <div>
                        <span className={`${labelStyle}`}>Template Name</span>
                        <input
                            className={`${inputStyle}`}
                            type="text"
                            name="tempName"
                            placeholder=''
                            onChange={formik.handleChange}
                            value={props.menuTempName}
                        />
                    </div>
                    <div>
                        <span className={`${labelStyle}`}>Detail Layout</span>
                        <input
                            className={`${inputStyle}`}
                            type="text"
                            name="detailLayout"
                            placeholder=''
                            onChange={formik.handleChange}
                            value={formik.values.detailLayout}
                        />
                    </div>
                </div>
                {/* second grid */}
                <div class="grid grid-cols-3 z-20 font-bold mb-3">

                    <div>
                        <span className={`${labelStyle}`}>Header Height</span>
                        <input
                            className={`${inputStyle}`}
                            type="text"
                            name="headerHeight"
                            placeholder=''
                            onChange={formik.handleChange}
                            value={formik.values.headerHeight}
                        />
                    </div>
                    <div>
                        <span className={`${labelStyle}`}>Footer Height</span>
                        <input
                            className={`${inputStyle}`}
                            type="text"
                            name="footerHeight"
                            placeholder=''
                            onChange={formik.handleChange}
                            value={formik.values.footerHeight}
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
                </div>
                {/* third grid */}
                <div class="grid grid-cols-3 z-20 font-bold mb-3">

                    <div>
                        <span className={`${labelStyle}`}>Screen Display String</span>
                        <input
                            className={`${inputStyle}`}
                            type="text"
                            name="screenDisplayString"
                            placeholder=''
                            onChange={formik.handleChange}
                            value={formik.values.screenDisplayString}
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
                    <div>
                        <div>
                            <span className={`${labelStyle}`}>Paper Size</span>

                            {/* <Field as="select" className={`${labelStyle} border`} name="paperSizeEnum"  >
                                <option value="A4"> A4</option>
                               
                            </Field> */}

                        </div>
                    </div>
                </div>

                {/* Fourth grid */}
                <div class="grid grid-cols-5 z-20 font-bold mb-3">

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

                {/* Fifth grid */}
                <div class="grid grid-cols-3 z-20 font-bold mb-4">
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
                        <span className={`${labelStyle}`}>Header Distance</span>
                        <input
                            className={`${labelStyle} border`}
                            type="number"
                            name="headerDistance"

                            onChange={formik.handleChange}
                            value={formik.values.headerDistance}
                        />
                    </div>
                </div>

                {/* Sixth grid */}
                <div class="grid grid-cols-3 z-20 font-bold mb-4">
                    <div>
                        <span className={`${labelStyle}`}>Label Row</span>
                        <input
                            className={`${labelStyle} border`}
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
                            className={`${labelStyle} border`}
                            type="number"
                            name="labelColumnCount"

                            onChange={formik.handleChange}
                            value={formik.values.labelColumnCount}
                        />
                    </div>
                    <div>
                        <span className={`${labelStyle} `}>Detail Line Space</span>
                        <input
                            className={`${labelStyle} border`}
                            type="number"
                            name="detailLineSpacing"

                            onChange={formik.handleChange}
                            value={formik.values.detailLineSpacing}
                        />
                    </div>
                </div>
                <div>
                    <button type='buttonsubmit' className='bg-green-300 px-16 rounded-lg  py-1 float-right hover:bg-green-500 border-green-500 border text-gray-500 font-bold'>Submit</button>
                </div>
            </form >
        </div >
    )
}

export default Setting