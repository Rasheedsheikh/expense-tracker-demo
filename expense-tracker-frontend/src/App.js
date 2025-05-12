import logo from './logo.svg';
import './App.css';
import Login from './auth/Login';
import { Routes,Route } from 'react-router-dom';
import Register from './auth/register';
import ExpensesTable from './expenseTracking/expenseTracking';

function App() {
  return (
    <div className="App">
     <Routes>
     <Route path="" element={<Login/>}/>
      <Route path="register" element={<Register/>}/>
      <Route path="/expenseTracking" element={<ExpensesTable/>}/>

     </Routes>
    </div>
  );
}

export default App;
