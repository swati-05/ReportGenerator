import React, { useState } from 'react';
import './App.css';
import Design from './component/Design';
import { Route, Routes } from 'react-router-dom';
import PageContent from './component/PageContent';
import PageLayComponent from './component/PageLayComponent';
import DetailComponent from './component/DetailComponent';
import GroupComponent from './component/GroupComponent';
import FooterComponent from './component/FooterComponent';
import PageLayoutTable from './component/PageLayoutTable';
import SideMenu from './component/SideMenu';
import SettingComponent from './component/SettingComponent';
import SideNav from './component/SideNav';
import Side from './component/Tessting/Side';
import Setting from './component/Setting';
import SubMenuLevel2 from './component/SubMenuLevel2';

function App() {



  return (

    <div>
      {/* <Setting /> */}
      {/* <Side /> */}
      <div className='w-full h-10  bg-white shadow-lg'>
        <span>
          <button className='bg-red-300 h-8 mt-1  w-16  p-2 rounded-r-full'  > menu </button>
        </span>
        <span className='px-28 '>
          <span className="text-gray-500">Group Name > </span>
          <span className="text-gray-500">Template Name > </span>
          <span className="text-gray-500">Page Layout </span>
        </span>
      </div>
      <div className='border grid grid-cols-6 '>
        <div className=' col-span-1 '>
          <SideNav />
        </div>
        <div className=' col-span-5 '>
          <Routes>
            {/* <Route path="/" element={<PageContent />} /> */}
            <Route path="/pagelayout/:templateId/:groupId/:menuTempName/:menuTempCode" element={<PageLayComponent />} />
            <Route path="/detailPage/:templateId/:groupId/:menuTempName/:menuTempCode" element={<DetailComponent />} />
            <Route path="/footerPage/:templateId/:groupId/:menuTempName/:menuTempCode" element={<FooterComponent />} />
            <Route path="/setting" element={<Setting />} />
            <Route path="/subMenu" element={<SubMenuLevel2 />} />


            {/* <Route path="/pagelayout" element={<PageLayComponent />} />
          <Route path="/detailPage" element={<DetailComponent />} />
          <Route path="/footerPage" element={<FooterComponent />} />
          <Route path="/detailLayout/:layoutId" element={<FooterComponent />} /> */}

          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
