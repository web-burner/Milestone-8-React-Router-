import axios from 'axios';
import './App.css'
import Navbar from './components/navbar/Navbar'
import ResultCart from './components/Resultcart/ResultCart'
import { Suspense } from 'react';

function App() {
  const usersPromise = axios.get('https://jsonplaceholder.typicode.com/users')

  return (
    <>
    <header>
      <Navbar></Navbar>
      <Suspense fallback={<p>Loading...</p>}>
        <ResultCart usersPromise={usersPromise}></ResultCart>
      </Suspense>
    </header>
    </>
  )
}

export default App
