import React from 'react'
import FooterComponent from './FooterComponent'
import PageLayComponent from './PageLayComponentOld'
// import DetailComponent from './component/DetailComponent';
// import PageLayComponent from './component/PageLayComponent';
// import PageLayout from './component/PageLayout';
import SideNav from './SideNav'

function PageContent() {
    return (
        <>
            <div className='flex flex-row'>
                <div className='flex'>
                    {/* <SideNav /> */}
                </div>

                <div className=' border  mx-auto text-center pb-8'>
                    <div className='flex justify-between'>
                        <h1>layout</h1>
                        <PageLayComponent />
                        <button className='bg-teal-400 px-2 py-1'>show layout</button>
                    </div>
                    <div className='flex justify-between'>
                        <h1>details</h1>
                        <button className='bg-teal-400 px-2 py-1'>show details</button>
                    </div>
                    <div className='flex justify-between'>
                        <h1>footer</h1>
                        
                        <FooterComponent />
                        <button className='bg-teal-400 px-2 py-1'>show footer</button>
                    </div>
                </div>





            </div>
        </>
    )
}

export default PageContent
