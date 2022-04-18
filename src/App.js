import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Shared/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Pages/Home/Home';
import About from './Components/Pages/About/About';
import Checkout from './Components/Pages/Checkout/Checkout';
import { useApi } from './hooks/useApi';
import Footer from './Components/Shared/Footer/Footer';
import Login from './Components/Pages/Auth/Login/Login';
import Register from './Components/Pages/Auth/Register/Register';
import RequireAuth from './Components/Pages/Auth/RequireAuth/RequireAuth';


function App() {
  const url = "service.json";
  const [data] = useApi(url);
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home data={data}></Home>}></Route>
        {/* <Route path='/home' element={<Home></Home>}></Route> */}
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/checkout/:serviceId' element={

          <RequireAuth>
            <Checkout data={data}></Checkout>
          </RequireAuth>

        }></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
