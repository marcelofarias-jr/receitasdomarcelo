import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Header from '../src/components/header/index'
import Home from './pages/home';
import Contact from './pages/contact';
import Recipe from './pages/recipe';
import Footer from './components/footer';
import NotFound from './pages/notFound';
import { Category } from './pages/category';
import Recipes from './pages/recipes';

export default function App (){
  return(
    <React.StrictMode>
    <BrowserRouter>
      <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/Recipe' element={<Recipes />} />
          <Route path='/receitas/:id' element={<Recipe />} />
          <Route path='/category' element={<Category />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
  );
}



