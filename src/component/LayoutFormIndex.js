// import React,{useState} from 'react'
// import DetailComponent from './DetailComponent'
// import FooterComponent from './FooterComponent'
// // import PageLayComponent from './TemplateSubmenu'
// import PageLayComponentOld from './PageLayComponentOld'
// import Setting from './Setting'

// function LayoutFormIndex() {

//     const [submitStatus, setSubmitStatus] = useState(false)
//     const [allLayoutData, setAllLayoutData] = useState({})


//     const collectAllLayoutData = (key, formData) => {
//         console.log('prev Data', allLayoutData)     
//         setAllLayoutData({ ...allLayoutData, [key]: formData })
//     }

//     const submitButtonToggle = () => {
//         setSubmitStatus(true)
//     }

  

//     return (
//         <>
//             <div className={``}><Setting  collectAllLayoutDataFun={collectAllLayoutData} submitFun={submitButtonToggle}/></div>
//             <div className={``}><PageLayComponentOld  collectAllLayoutDataFun={collectAllLayoutData} submitFun={submitButtonToggle} /></div>
//             {/* <div className={``}><DetailComponent  /></div>
//             <div className={``}><FooterComponent  /></div> */}


//             {submitStatus && <div  className="flex items-center justify-center"><button type="submit" className="absolute bottom-40 mx-auto px-6 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-xl hover:bg-blue-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out">Submit Form </button></div>}

//         </>
//     )
// }

// export default LayoutFormIndex