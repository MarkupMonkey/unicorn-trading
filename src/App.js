import React, { useCallback } from 'react';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import particlesOptions from "./particles.json";

//hero section
import {Hero} from './components/Hero';

// Homepage lists portion
import Lists from './components/Lists';
import ListData from './components/ListData';

function App() {
    const particlesInit = useCallback(main => {
        loadFull(main);
    }, [])
    
    // Iterating through homepage list array
    const homePageList =ListData.map((item) => {
        return (
          <Lists  {...item}/>
      )
  })

    return (
        <div className="App">
            <Particles options={particlesOptions} init={particlesInit} />
            <header className="bg-cottoncandy">
                <h1 className=''>Hello world!</h1>
            </header>
           <Hero/> 
            {/* Rendering homepage List items */}
            {homePageList}
        </div>
    );
}

export default App;
