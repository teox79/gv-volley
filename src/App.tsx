import './App.css'
import Preloader from './components/Preloader'
import Header from './components/layout/Header'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from './components/layout/Footer'
import { AppProvider } from './state/AppContext'
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './route/Routes';
import OffcanvasMenu from './components/OffcanvasMenu';


function App() {
  return (
    <BrowserRouter>
      <AppProvider>
        <Preloader />
        <OffcanvasMenu />
        <Header />
        <AppRoutes />
        <Footer />
      </AppProvider >
    </BrowserRouter >
  )
}

export default App
