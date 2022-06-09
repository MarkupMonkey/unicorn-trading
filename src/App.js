import React, { useCallback } from 'react';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import particlesOptions from "./particles.json";
import Sidebar from './components/Sidebar';
import Homepage from './components/Homepage';


function App() {
    const particlesInit = useCallback(main => {
        loadFull(main);
    }, [])


    return (
        <div className="App">
            <Particles options={particlesOptions} init={particlesInit} />
            <Sidebar />
            <Homepage />
        </div>
    );
}

export default App;
