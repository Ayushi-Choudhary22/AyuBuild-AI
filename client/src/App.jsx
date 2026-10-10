import React from 'react' //Bring the React library into this file so I can use React features
//write rfce to generate boiler plate from es7 extension
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom"
import Home from './pages/Home'
import useGetCurrentUser from './hooks/useGetCurrentUser' //Hook means A reusable function for React.
import { useSelector } from 'react-redux' //Go to Redux central cupboard storing data and bring me the data.
import Dashboard from './pages/Dashboard'
import Generate from './pages/Generate'
//motion.dev se animation k lie install
import WebsiteEditor from './pages/Editor'
import LiveSite from './pages/LiveSite'
import Pricing from './pages/Pricing'
//backend- export means Other files can also use this variable.
export const serverUrl = import.meta.env.VITE_SERVER_URL || "http://localhost:8000"
//Creates the main React component. This is the manager of the whole website.
function App() {
  //Is someone already logged in?
  useGetCurrentUser()
  //Cupboard(redux)↓User drawer(stae k ander user k ander)↓userData file↓Bring it(in variable named userdata).
  const {userData}=useSelector(state=>state.user)
  return ( //React display on screen
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/dashboard' element={userData?<Dashboard/>:<Home/>}/>
     <Route path='/generate' element={userData?<Generate/>:<Home/>}/>
     <Route path='/editor/:id' element={userData?<WebsiteEditor/>:<Home/>}/>
      <Route path='/site/:id' element={<LiveSite/>}/>
       <Route path='/pricing' element={<Pricing/>}/>
   </Routes>
   </BrowserRouter>
  )
}

export default App
//App.jsx is the main controller of frontend. It loads the current user, reads data from Redux, and decides which page to show based on the URL and whether the user is logged in.