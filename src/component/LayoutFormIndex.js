import React,{useState} from 'react'
import DetailComponent from './DetailComponent'
import FooterComponent from './FooterComponent'
// import PageLayComponent from './TemplateSubmenu'
import PageLayComponentOld from './PageLayComponentOld'
import Setting from './Setting'

function LayoutFormIndex() {

    const [collectAllLayoutData, setCollectAllLayoutData] = useState({})
    const handleAllFormData = (key, formData) => {
        console.log('prev Data', collectAllLayoutData)
        // setAllFormData({...allFormData,formData}) //this is going to replace upcoming data since has same formData key all the time
        setCollectAllLayoutData({ ...collectAllLayoutData, [key]: formData })
    }

    const values = {     
        collectFormDataFun: handleAllFormData,
    }

    return (
        <>
            <div className={``}><Setting  values={values}  /></div>
            <div className={``}><PageLayComponentOld   values={values}/></div>
            <div className={``}><DetailComponent   values={values}/></div>
            <div className={``}><FooterComponent  values={values}/></div>
        </>
    )
}

export default LayoutFormIndex