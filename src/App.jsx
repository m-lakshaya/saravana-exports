import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Process from './pages/Process';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutUs.html" element={<About />} />
          <Route path="/products.html" element={<Products />} />
          <Route path="/process.html" element={<Process />} />
          <Route path="/contact.html" element={<Contact />} />
          {/* Support for cleaner URLs too */}
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/process" element={<Process />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
