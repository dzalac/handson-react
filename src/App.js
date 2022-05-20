import './App.scss';
import {Routes, Route} from 'react-router-dom'
import Courses from './pages/Courses/Courses.js';
import Home from './pages/Home/Home.js';
import Course from './pages/Course/Course';

function App() {
  return (
   <>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/courses' element={<Courses/>} />
            <Route path='/course' element={<Course/>} />
        </Routes>
   </>
  );
}

export default App;
