import './App.scss';
import {Routes, Route} from 'react-router-dom'


//Components
//import Header from './components/Header/Header.js'
//import Main from './components/Main/Main.js'

//Pages
import Courses from './pages/Courses/Courses.js';
import Home from './pages/Home/Home.js';
import Course from './pages/Course/Course';
//import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';





function App() {
  return (
   <>
        <Routes>
            
            <Route path='/' element={<Home/>} />
            <Route path='/courses' element={<Courses/>} />
            <Route path='/course/:id' element={<Course/>} />
            <Route path='/register' element={<Register/>} />
            <Route path='/sign-in' element={<Login/>} />
        </Routes>
   </>
  );
}

export default App;
