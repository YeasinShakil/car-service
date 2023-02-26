import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';

import Header from '../src/components/shared/header/Header';
import About from './components/pages/about/About';
import Checkout from './components/pages/checkout/checkout';
import Home from './components/pages/home/Home/Home';
import Login from './components/pages/Login/Login/Login';
import Register from './components/pages/Login/Register/Register';
import RequireAuth from './components/pages/Login/requireAuth/RequireAuth';

import ServiceDetail from './components/pages/serviceDetail/ServiceDetail';
import Footer from './components/shared/footer/Footer';
import NotFound from './components/shared/NotFound/NotFound';
import Expert from './components/pages/home/Experts/Experts';

function App() {


  return (
    <div>
      <Header></Header>
      <Routes>

        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/service/:serviceId' element={<ServiceDetail></ServiceDetail>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/expert' element={<Expert></Expert>}></Route>
        <Route path='/checkout' element={
          <RequireAuth>
            <Checkout></Checkout>
          </RequireAuth>
        }></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      
    </div>
  )
}

export default App
