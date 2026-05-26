import './App.css'
import React from 'react';
import AppRouter from './router/AppRouter'
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

function App() {

  return (
    <>
      <div className="min-h-screen flex flex-col">

            <Navbar />

            <main className="flex-1">

                <AppRouter />

            </main>

            <Footer />

        </div>
    </>
  );
}

export default App