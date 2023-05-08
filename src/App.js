import { Route, Routes } from "react-router-dom";
// components
import Banner from "./shared/Banner/Banner";
import Navbar from "./shared/Navbar";
import Home from "./pages/Home/Home";
import History from "./pages/AboutUs/History";
import Infrastructure from "./pages/AboutUs/Infrastructure";
import Activities from "./pages/AboutUs/Activities";
import Form from "./pages/DownloadAll/Form/Form";
import Rule from "./pages/DownloadAll/Rule/Rule";
import Textbook from "./pages/DownloadAll/Textbook";
import Officers from "./pages/AboutUs/Officers";

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
        <Route path='/form' element={<Form />}></Route>
        <Route path='/rules' element={<Rule />}></Route>
        <Route path='/textBook' element={<Textbook />}></Route>
        <Route path='/officers' element={<Officers />}></Route>
      </Routes>
    </div>
  );
}

export default App;
