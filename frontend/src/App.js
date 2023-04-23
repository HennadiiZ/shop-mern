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
        <main className="py-3">
          <Container>
            <Routes>
              <Route path='/' element={ <HomeScreen /> } exact/>
              <Route path='/product/:id' element={ <ProductScreen /> } />
            </Routes>
          </Container>
        </main>
      <Footer />
    </>
  );
}

export default App;

// rafce
// npm i react-router-dom react-router-bootstrap
// npm i nodemon concurrently
// npm i -D nodemon concurrently
// npm i dotenv
// node --version
// npm i mongoose