import './App.css';
import Employee from './components/Employee/Employee';

// test employee object
import { employees } from './employees';

function App() {
  return (
    <>
      <main className='container p-4'>
        <div className='row'>
          {employees.map((employee) => {
            return (
              <Employee
                key={employee.id.value}
                {...employee}
              ></Employee>
            );
          })}
        </div>
      </main>
    </>
  );
}

export default App;
