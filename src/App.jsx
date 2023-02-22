import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';

import Header from '../src/components/shared/header/Header';
import Home from './components/pages/home/Home/Home';
import Login from './components/pages/Login/Login/Login';
import Register from './components/pages/Login/Register/Register';
import Footer from './components/shared/footer/Footer';

function App() {


  return (
    <div>
      <Header></Header>
      <Routes>

        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  )
}

export default App
