import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Auth from './pages/Auth';
import Dashboard from './pages/Dashboard';
import Admin from './pages/Admin';
import { AnimatePresence } from 'motion/react';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  const location = useLocation();

  return (
    <AppProvider>
      <div className="min-h-screen flex flex-col font-sans selection:bg-brand-gold selection:text-brand-forest">
        <ScrollToTop />
        
        {/* Only show Navbar/Footer on public/user pages, not purely clean pages like Auth/Checkout if we want a focused experience */}
        {/* But for this multi-page complex app, I'll keep them consistent */}
        {!['/auth', '/checkout'].includes(location.pathname) && <Navbar />}
        
        <main className="flex-1">
          <AnimatePresence mode="wait">
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/auth" element={<Auth />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/admin" element={<Admin />} />
              
              {/* Fallback for complex structure */}
              <Route path="/wellness" element={<Shop />} />
              <Route path="/about" element={<Home />} />
              <Route path="/terms" element={<Home />} />
              <Route path="/privacy" element={<Home />} />
              <Route path="/shipping" element={<Home />} />
              <Route path="/contact" element={<Home />} />
              <Route path="/loyalty" element={<Dashboard />} />
            </Routes>
          </AnimatePresence>
        </main>

        {!['/auth', '/checkout'].includes(location.pathname) && <Footer />}
      </div>
    </AppProvider>
  );
}
