import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage/HomePage';
import ProductPage from './pages/ProductPage/ProductPage';
import CartPage from './pages/CartPage/CartPage';
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import ShippingPage from './pages/ShippingPage/ShippingPage';
import PaymentPage from './pages/PaymentPage/PaymentPage';

const App = () => {
  return (
    <>
      <Header />
      <main className='py-3'>
        <Container>
          <Routes>
            <Route path='/' element={<HomePage />} exact />
            <Route path='/product/:id' element={<ProductPage />} />
            <Route path='/cart/:id?' element={<CartPage />} />
            <Route path='/register' element={<RegisterPage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/profile' element={<ProfilePage />} />
            <Route path='/shipping' element={<ShippingPage />} />
            <Route path='/payment' element={<PaymentPage />} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default App;

// rafce
// npm i react-router-dom react-router-bootstrap (frontend)
// npm i redux react-redux redux-thunk redux-devtools-extension (frontend)
// npm i nodemon concurrently (backend)
// npm i -D nodemon concurrently (backend)
// npm i dotenv (root)
// node --version (root)
// npm i mongoose (root)
// npm i bcryptjs (root)
// npm i express-async-handler (root)
// npm i jsonwebtoken (root)

// npm run data:import
// npm run data:destroy

// "proxy": "http://127.0.0.1:5001",
// https://jwt.io/
// npm start

// npm run dev (root)
