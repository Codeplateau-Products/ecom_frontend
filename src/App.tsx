<<<<<<< HEAD
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'font-awesome/css/font-awesome.min.css';
import './assets/css/style.css';
import './App.css';
import $ from 'jquery';

import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
// import Layout from './components/Layout';
// import AuthSidebar from './components/AuthSidebar';

const App = () => {
  return (
    <Router>
      <div>
        <Header />

        <section className="main-body container-fluid px-5 py-4">
          <Routes>
            <Route path="/" exact element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
=======
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import ProtectedRoute from "./utils/auth/ProtectedRoutes";
import { AuthProvider } from "./utils/auth/auth";
function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  {" "}
                  <Outlet />{" "}
                </>
              }
            >
              <Route index element={<h1>Home</h1>} />
              <Route path="about" element={<h1>About</h1>} />
              <Route path="register" element={<h1>Register</h1>} />
              <Route path="login" element={<h1>Login</h1>} />

              <Route
                path="cart"
                element={
                  <ProtectedRoute>
                    <h1>Cart</h1>
                  </ProtectedRoute>
                }
              />
                <Route path="*" element={<h1>404</h1>} />
            </Route>
>>>>>>> 460d57ac525c320fa7279160dc988584f4a3c8eb
          </Routes>
        </section>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
