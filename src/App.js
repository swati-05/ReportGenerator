import React, { useState } from 'react';
import './App.css';
import Design from './component/Design';
import { Route, Routes } from 'react-router-dom';
import PageContent from './component/PageContent';
import TemplateSubmenu from './component/TemplateSubmenu';
import DetailComponent from './component/DetailComponent';
import GroupComponent from './component/GroupComponent';
import FooterComponent from './component/FooterComponent';
import PageLayoutTable from './component/PageLayoutTable';
import SideMenu from './component/SideMenu';
import SideNav from './component/SideNav';
import Side from './component/Tessting/Side';
import Setting from './component/Setting';
import SubMenuLevel2 from './component/SubMenuLevel2';
import LayoutFormIndex from './component/LayoutFormIndex';
import Hello from './component/Hello';
import Home from './component/Home';

function App() {



  return (

    <div>
      <SideNav />
      <div className={`sm:w-10.5/12 transition-all pl-4 pr-4 md:pl-8 -mt-[36rem] h-screen ml-48 `}>
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
