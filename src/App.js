import { Route, Routes } from "react-router-dom";
// components
import Banner from "./shared/Banner/Banner";
import Navbar from "./shared/Navbar";
import Home from "./pages/Home/Home";
import History from "./pages/AboutUs/History";
import Infrastructure from "./pages/AboutUs/Infrastructure";
import Activities from "./pages/AboutUs/Activities";
import Officers from "./pages/AboutUs/Officers";
import Employees from "./pages/AboutUs/Employees";
import Curriculum from "./pages/Curriculum/Curriculum";
import Syllabus from "./pages/DownloadAll/Syllabus";
import Form from "./pages/DownloadAll/Form/Form";
import Calender from "./pages/DownloadAll/Calender/Calender";
import Rule from "./pages/DownloadAll/Rule/Rule";
import Textbook from "./pages/DownloadAll/Textbook";

function App() {

  return (
    <div>
      <Banner />
      <Navbar />
      {/* routes */}
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/history' element={<History />}></Route>
        <Route path='/infrastructure' element={<Infrastructure />}></Route>
        <Route path='/activities' element={<Activities />}></Route>
        <Route path='/officers' element={<Officers />}></Route>
        <Route path='/employees' element={<Employees />}></Route>
        <Route path='/curriculum' element={<Curriculum />}></Route>
        <Route path='/syllabus' element={<Syllabus />}></Route>
        <Route path='/form' element={<Form />}></Route>
        <Route path='/calender' element={<Calender />}></Route>
        <Route path='/rules' element={<Rule />}></Route>
        <Route path='/textBook' element={<Textbook />}></Route>
      </Routes>
    </div>
  );
}

export default App;
