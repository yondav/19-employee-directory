import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import EmployeeCard from './components/EmployeeCard/EmployeeCard';

function App() {
  return (
    <>
      <Header />
      <main className='container p-4'>
        <EmployeeCard />
      </main>
    </>
  );
}

export default App;
