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

function App() {
  return (

    <div className="App">
      <SettingComponent/>
      <SideMenu/>

      {/* <PageLayoutTable/> */}
       {/* <GroupComponent /> */}
       {/* <DetailComponent />
       <FooterComponent/>
      <PageLayComponent /> */}
     
      <Routes>
        <Route path="/" element={<PageContent />} />
        <Route path="/pagelayot" element={<PageLayComponent />} />
        <Route path="/detailPage" element={<DetailComponent />} />

      </Routes>
    </div>
  );
}

export default App;
