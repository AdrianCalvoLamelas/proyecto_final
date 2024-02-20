import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from './login/Login';
import { Search } from './search/search';
import { Motor } from './motor/Motor';
import { Layout } from './layout/Layout';
import { Frenos } from './frenos/Frenos';


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route path="login" element={<Login />} />
          <Route path="search" element={<Search />} />
        </Route>
        <Route path="/" element={<Layout/>}>
          <Route path="motor" element={<Motor />} />
          <Route path="frenos" element={<Frenos />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);



