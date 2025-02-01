import React from 'react';
import { Routes, Route } from 'react-router-dom';
import {App, Admin,Team} from '../App';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
    </Routes>
  );
}

export function AdminRouter() {
  return (
    <Routes>
      <Route path="/" element={<Admin />} />
    </Routes>
  );
}

export function TeamRouter() {
    return (
      <Routes>
        <Route path="/" element={<Team />} />
      </Routes>
    );
  }
