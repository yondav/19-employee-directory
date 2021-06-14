import React from 'react';
import './App.css';
import EmployeeCard from './components/EmployeeCard/EmployeeCard';

function App() {
  return (
    <>
      <main className='container p-4'>
        <div className='row'>
          <EmployeeCard />
        </div>
      </main>
    </>
  );
}

export default App;
