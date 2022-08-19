// 

import './App.css';

// hook
import { useState, useEffect } from 'react';

// components
import {
  Layout,
  Hero,
  Services,
  Menu,
} from './components'

// api
import { getAllPizzas } from './ConectToAPI/ContactToAPI'

function App() {

  const [allPizza, setAllPizza] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: pizzaData } = await getAllPizzas();
        setAllPizza(pizzaData)
      }
      catch (err) {
        console.log(err.message)
      }
    }

    fetchData()
  }, [])
  return (
    <div className="App">
      <Layout>
        <Hero />
        <Services />
        <Menu pizzas={allPizza} />
      </Layout>
    </div>
  );
}

export default App;