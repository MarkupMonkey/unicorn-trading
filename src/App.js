import React, { useCallback } from 'react';
import { Routes, Route } from 'react-router-dom';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import particlesOptions from "./particles.json";
import Sidebar from './components/Sidebar';
import Homepage from './components/Homepage';
import { Dashboard } from './components/Dashboard';

function App() {
    const particlesInit = useCallback(main => {
        loadFull(main);
    }, [])


    return (
        <div className="App">

            <Particles options={particlesOptions} init={particlesInit} />
            <Sidebar />
            <Routes>
                <Route path='/' element={<Homepage />} />
                <Route path='/dashboard' element={<Dashboard />} />
            </Routes>
        </div>
    );
}

export default App;
