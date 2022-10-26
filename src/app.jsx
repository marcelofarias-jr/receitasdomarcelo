import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Header from './components/header/index'
import Home from './pages/home';
import Recipe from './pages/recipe';
import Footer from './components/footer';
import NotFound from './pages/notFound';
import { Category } from './pages/category';
import About from './pages/about';
import PageRecipes from './pages/PageRecipes';

export default function App (){
  return(
    <React.StrictMode>
    <BrowserRouter>
      <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/Recipe' element={<PageRecipes />} />
          <Route path='/receitas/:id' element={<Recipe />} />
          <Route path='/category' element={<Category />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
  );
}



