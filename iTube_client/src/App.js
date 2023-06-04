import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Feed from './pages/Feed';
import Register from './pages/Register';
import Login from './pages/Login';

const App = () => {
  return (
    <main className="flex flex-col h-screen bg-slate-950 text-white pb-6 overflow-hidden">
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </main>
  );
};

export default App;
