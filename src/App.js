import logo from './logo.svg';
import './App.css';
import Design from './component/Design';
import { Route, Routes } from 'react-router-dom';
import PageContent from './component/PageContent';
import PageLayComponent from './component/PageLayComponent';
import DetailComponent from './component/DetailComponent';
import GroupComponent from './component/GroupComponent';

function App() {
  return (

    <div className="App">
       <GroupComponent />
      <PageLayComponent />
     
      <Routes>
        <Route path="/" element={<PageContent />} />
        <Route path="/pagelayot" element={<PageLayComponent />} />
        <Route path="/detailPage" element={<DetailComponent />} />

      </Routes>
    </div>
  );
}

export default App;
