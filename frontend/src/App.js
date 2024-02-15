import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomeScreen from './screens/HomeScreen/HomeScreen';
import ProductScreen from './screens/ProductScreen/ProductScreen';

const App = () => {
  return (
    <>
      <Header />
      <main className='py-3'>
        <Container>
          <Routes>
            <Route path='/' element={<HomeScreen />} exact />
            <Route path='/product/:id' element={<ProductScreen />} />
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
// npm i nodemon concurrently (backend)
// npm i -D nodemon concurrently (backend)
// npm i dotenv
// node --version
// npm i mongoose
// npm i bcryptjs
// npm i redux react-redux redux-thunk redux-devtools-extension (frontend)

// npm run data:import
// npm run data:destroy

//   "proxy": "http://127.0.0.1:5001",
// npm start

// npm run dev
