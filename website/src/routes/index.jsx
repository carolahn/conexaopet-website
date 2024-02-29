import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import NotFound from '../pages/NotFound';
import Event from '../pages/Event';
import ProfileProtector from '../pages/ProfileProtector';
import DashboardProtector from '../pages/DashboardProtector';

const AppRoutes = () => {
  const isAuthenticated = true;
  const userType = 'protector'; //protetor, patrocinador, membro, visitante
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/event" element={<Event />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/protector/:id" element={<ProfileProtector/>} />
      <Route path="*" element={<Navigate to="/404" />} />
      {isAuthenticated && userType === 'protector' && (
        <Route path="/profile/:id" element={<DashboardProtector />} />
      )}
    </Routes>
  );
};

export default AppRoutes;