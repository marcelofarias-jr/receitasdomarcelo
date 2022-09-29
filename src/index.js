import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Header from '../src/components/header/index'
import Home from './pages/home';
import Contact from './pages/contact';
import Recipe from './pages/recipe';
import PostRecipe from './components/recipe';
import Footer from './components/footer';
import NotFound from './pages/notFound';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/Recipe' element={<Recipe />} />
          <Route path='/receitas/:id' element={<PostRecipe />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);


