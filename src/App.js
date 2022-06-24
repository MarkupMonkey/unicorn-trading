import { useCallback, useEffect, useState } from 'react';
import { Routes, Route, Link, Navigate } from 'react-router-dom';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import particlesOptions from "./particles.json";
import { Sidebar } from './components/Sidebar';
import Homepage from './pages/Homepage';
import { Dashboard } from './pages/Dashboard';
import Protected from './components/Protected';

function App() {
    const particlesInit = useCallback(main => {
        loadFull(main);
    }, [])

    /* Initialize the state with the contents of localstorage */
    const [user, setUser] = useState(localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : { username: null, password: null, logged: false })

    useEffect(() => {
        const data = JSON.stringify(user)
        localStorage.setItem('user', data)
    }, [user])

    const setLogin = () => {
        setUser({ ...user, logged: true })
    }

    const setLogout = () => {
        setUser({ ...user, logged: false })
    }

    return (
        <div className="App">
            <Particles options={particlesOptions} init={particlesInit} />
            <Sidebar user={user} setLogin={setLogin} setLogout={setLogout} />
            <Routes>
                <Route path='/' element={<Homepage />} />
                <Route element={<Protected user={user} />} >
                    <Route path='/dashboard' element={<Dashboard />} />
                </Route>
                <Route path='*' element={
                    <div>
                        <h1>Not found!</h1>
                        <Link to='/'>Back to home</Link>
                    </div>
                } />
            </Routes>
        </div >
    );
}

export default App;
