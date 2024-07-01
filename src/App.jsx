import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AppLayout from './layout/AppLayout'
import MainLayout from './layout/MainLayout'
import OutletPage from './components/OutletPage'
import SignUp from './components/Sign'
import AddCarts from './pages/AddCarts'
import Inbox from './pages/Inbox'
import Profile from './pages/Profile'
import Settings from './pages/Settings'
import Edit from './components/Edit'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<AppLayout />}>
          <Route path='/' element={<SignUp  />} />
          <Route path='/' element={<MainLayout />}>
            <Route path='/products' index element={<OutletPage />} />
            <Route path='/addproducts' element={<AddCarts />} />
            <Route path='/inbox' element={<Inbox />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/setting' element={<Settings />} />
            <Route  path='/edit' element={<Edit  />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  )
}
