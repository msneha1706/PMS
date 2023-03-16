import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Registration from './Registration';
import Nav from './Nav';
import Footer from './Footer';
import Issue from './Issue';
import Detail from './Detail';
import Home from './Home';

function App() {
  return (
    <div className="App">
      {/* <Login/> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Login />} />
          <Route path="/reg" exact element={<Registration />} />
          <Route path="/home" exact element={<Home />} >
            <Route path='issue' element={<Issue />} />
            <Route path='detail' element={<Detail />} />
          </Route>
     
        </Routes>
      </BrowserRouter>
      {/* <Login/> */}
      {/* <Registration/> */}
      {/* <Nav/> */}
      {/* <Footer/> */}
      {/* <Issue/> */}
      {/* <Detail/> */}
    </div>
  );
}

export default App;
