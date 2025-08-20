// ...existing code...
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import About from './pages/About';
import Contact from './pages/Contact';
import ScrollToTop from './components/ScrollToTop';
import { BlogProvider } from './contexts/BlogContext';
import Admin from './pages/Admin';
import { AuthProvider } from './contexts/AuthContext';
import RequireAdmin from './components/RequireAdmin';
import Login from './pages/Login';

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <BlogProvider>
          <Router>
            <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
              <ScrollToTop />
              <Navbar />
              <main>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/blog" element={<Blog />} />
                  <Route path="/blog/:slug" element={<BlogPost />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/admin" element={<RequireAdmin><Admin /></RequireAdmin>} />
                </Routes>
              </main>
              <Footer />
            </div>
          </Router>
        </BlogProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;