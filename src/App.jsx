import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './Component/LoginPage';
import UploadImage from './Component/UploadImage';
import AddUser from './Component/AddUser';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage/>} />
         <Route path="/uploadimage"  element={<UploadImage/>}/>
         <Route path="adduser"  element={<AddUser/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
