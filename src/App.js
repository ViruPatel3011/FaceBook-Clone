import './App.css';
import { BrowserRouter as Router, Route ,Routes } from 'react-router-dom';
import NavbarAdmin from './components/NavbarAdmin/NavbarAdmin';
import LoginPage from './components/LoginPage/LoginPage';
import ForgotPassword from './components/ForgotPassword';
// import Navbar from './components/NavbarUser/Navbar';


// import UserList from './components/UserList';


function App() {
  return (
  //   <div className="App">
  //   {/* <LoginPage/> */}
  // {/* <Navbar/> */}
  //  <NavbarAdmin/>
  //    {/* <UserList/> */}
  //   </div>

  <Router>
  <Routes>
    <Route path="/navbarAdmin" element={<NavbarAdmin />} />
    <Route path="/" element={<LoginPage />} />
    <Route path="/forgot" element={<ForgotPassword />} />
    
  </Routes>
</Router>

  );
}

export default App;
