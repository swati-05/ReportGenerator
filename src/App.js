import logo from './logo.svg';
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

function App() {
  return (

    <div>

      <SideNav />
      {/* <PageLayComponent /> */}

      {/* <PageLayoutTable />
      <GroupComponent />
      <DetailComponent />
      <FooterComponent/>
      <SettingComponent/>
      <SideMenu/> */}

      <div className='border'>
        <Routes>
          <Route path="/" element={<PageContent />} />
          <Route path="/pagelayout/:templateId" element={<PageLayComponent />} />
          <Route path="/detailPage" element={<DetailComponent />} />
          <Route path="/footerPage" element={<FooterComponent />} />
          {/* <Route path="/detailLayout/:layoutId" element={<FooterComponent />} /> */}

        </Routes>
      </div>
    </div>
  );
}

export default App;
