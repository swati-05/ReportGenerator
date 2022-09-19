import React, { useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import TemplateSubmenu from './component/TemplateSubmenu';
import DetailComponent from './component/DetailComponent';
import FooterComponent from './component/FooterComponent';
import SideNav from './component/SideNav';
import Setting from './component/Setting';
import LayoutFormIndex from './component/LayoutFormIndex';
import Home from './component/Home';

function App() {



  return (

    <div>
      <SideNav />
      <div className={`sm:w-10.5/12 transition-all  pl-4 pr-4 md:pl-8 -mt-[36rem] h-screen ml-48 `}>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/pagelayout/:templateId/:groupId/:menuTempName/:menuTempCode" element={<PageLayComponent />} /> */}
          <Route path="/detailPage/:templateId/:groupId/:menuTempName/:menuTempCode" element={<DetailComponent />} />
          <Route path="/footerPage/:templateId/:groupId/:menuTempName/:menuTempCode" element={<FooterComponent />} />
          <Route path="/setting" element={<Setting />} />
          <Route path="/allLayout" element={<LayoutFormIndex />} />
          {/* <Route path="/" element={<SubMenuLevel2 />} /> */}

          <Route path="/templateSubmenu/:menuType/:menuName/:menuCode/:groupId/:menuId" element={<TemplateSubmenu />} />
          {/* <Route path="/detailPage" element={<DetailComponent />} />
          <Route path="/footerPage" element={<FooterComponent />} />
          <Route path="/detailLayout/:layoutId" element={<FooterComponent />} /> */}

        </Routes>
      </div>
    </div>

  );
}

export default App;
