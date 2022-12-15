import Navbar from "./components/Navbar";
import React  from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import MyManga from './pages/MyManga';
import Settings from "./pages/Settings";
import './App.css'
import LoginPage from "./pages/LoginPage";
import Page from "./pages/Page";
import SearchPage from "./pages/SearchPage";
function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} exact />
        <Route path='/mymanga' element={<MyManga/>}  />
        <Route path='/settings' element={<Settings/>}  />
        <Route path='/loginpage' element={<LoginPage/>}  />
        <Route path={`/manga/:id`} element={<Page/>} exact  />
        <Route path={`/search/:query`} element={<SearchPage/>} exact  />
      </Routes>
    </Router>
    </>
  );
}

export default App;
