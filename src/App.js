import React from 'react'
import Home from './routes/Home'
import { Routes, Route } from 'react-router-dom'
import NavBar from './routes/NavBar'
import Auth from './routes/Auth'
import Shop from './routes/Shop'
import CheckOut from './routes/CheckOut'

const App = () => {
  return (
    <div className='bg-slate-50'>
      <Routes>
        <Route path='/' element={<NavBar />} >
          <Route index element={<Home />} />
          <Route path='shop/*' element={<Shop />} />
          <Route path='auth' element={<Auth />} />
          <Route path='checkout' element={<CheckOut />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App