import React, { useCallback } from 'react';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import particlesOptions from "./particles.json";

//hero section
import { Hero } from './components/Hero';

// Homepage lists portion
import Lists from './components/Lists';
import ListData from './components/ListData';

// Homepage pricing section
import { Pricing } from './components/Pricing';
import { PricesWrapper } from './components/PricingWrapper';

function App() {
    const particlesInit = useCallback(main => {
        loadFull(main);
    }, [])

    // Iterating through homepage list array
    const homePageList = ListData.map((item) => {
        return (
            <Lists  {...item} />
        )
    })

    // const pricing = [
    //     { id: 1, name: 'month', price: 67 },
    //     { id: 2, name: 'year', price: 670 }
    // ]

    // const pricingMenu = pricing.map(items => {
    //     return (
    //         <Pricing key={items.id} {...items} />
    //     )
    // })

    return (
        <div className="App">
            <Particles options={particlesOptions} init={particlesInit} />
            <header className="bg-cottoncandy">
                <h1 className=''>Hello world!</h1>
            </header>
            <Hero />
            {/* Rendering homepage List items */}
            {homePageList}
            <PricesWrapper>
                 {/* {pricingMenu} */}
            </PricesWrapper>
           
        </div>
    );
}

export default App;
