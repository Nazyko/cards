import React from 'react'
import {Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/AboutPage"
import Contact from './pages/Contact'
import NotFoundPage from './pages/NotFoundPage'
import  Layout from './components/Layout'
import Singlepage from './pages/Singlepage'



const App = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route exact index element={<Home />}/>
                    <Route path='/:id' element={<Singlepage />}/>
                    <Route path='about' element={<About/>} />
                    <Route path='contact' element={<Contact />} />
                    <Route path='*' element={<NotFoundPage/>} />
                </Route>
            </Routes>
        </>
    )
}

export default App