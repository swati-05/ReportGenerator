//////////////////////////////////////////////////////////////////////////////////////
//    Author - swati sharma
//    Version - 1.0
//    Date - 23-09-2022
//    Revision - 1
//    Project - JUIDCO
//    Component  - Home
//    DESCRIPTION - Home component is landing page of reporting tool   
//////////////////////////////////////////////////////////////////////////////////////

import React from 'react'
import Template from './Template'

function Home() {
  return (
    <div className='mx-auto '>


      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto flex flex-wrap">
          <h2 class="sm:text-xl text-xl text-[#074097] text-center font-medium title-font mb-2 md:w-2/5">

            <img src='https://img.freepik.com/free-vector/site-stats-concept-illustration_114360-1509.jpg?w=740&t=st=1663407789~exp=1663408389~hmac=1dfbb49cbe2afbb6489a4d8ea666e755f174fa478dd6721e6f765adc5d0db7ef' className='h-96' />
          </h2>
          <div class="md:w-3/5 md:pl-6">
            <div className='grid grid-cols-4 gap-4'>
              <div>
                <img src='https://img.freepik.com/free-vector/webinar-flyer-template_23-2148766278.jpg?w=740&t=st=1663408489~exp=1663409089~hmac=bd07dd9c150939afb18ab5ac698a88aee7b7da1360a181867bc66f5455225f5a' />
              </div>
              <div>
                <img src='https://img.freepik.com/free-vector/webinar-flyer-template_23-2148766278.jpg?w=740&t=st=1663408489~exp=1663409089~hmac=bd07dd9c150939afb18ab5ac698a88aee7b7da1360a181867bc66f5455225f5a' />
              </div>
              <div>
                <img src='https://img.freepik.com/free-vector/webinar-flyer-template_23-2148766278.jpg?w=740&t=st=1663408489~exp=1663409089~hmac=bd07dd9c150939afb18ab5ac698a88aee7b7da1360a181867bc66f5455225f5a' />
              </div>
              <div>
                <img src='https://img.freepik.com/free-vector/webinar-flyer-template_23-2148766278.jpg?w=740&t=st=1663408489~exp=1663409089~hmac=bd07dd9c150939afb18ab5ac698a88aee7b7da1360a181867bc66f5455225f5a' />
              </div>
            </div>
            <div class="flex md:mt-4 mt-6">
              <div className='grid grid-cols-4 gap-4'>
                <div>
                  <img src='https://img.freepik.com/free-vector/webinar-flyer-template_23-2148766278.jpg?w=740&t=st=1663408489~exp=1663409089~hmac=bd07dd9c150939afb18ab5ac698a88aee7b7da1360a181867bc66f5455225f5a' />
                </div>
                <button>
                  <div className='bg-gray-200 border w-36 h-36  shadow-lg hover:bg-gray-400 '>
                    <div className='mt-6  w-12 h-12 ml-10'>
                      <Template />
                    </div>
                    <h1 className='text-[#074097] font-sans font-bold hover:text-white text-sm '> CREATE TEMPLATE</h1>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home