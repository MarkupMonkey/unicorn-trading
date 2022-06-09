import React from "react";

// Homepage hero section
import { Hero } from "./Hero";

// Homepage lists portion
import Lists from './Lists';
import { ListData } from './ListData';

// Homepage pricing section
import { PricesWrapper } from "./PricingWrapper";

class Homepage extends React.Component {
    render() {
        // Iterating through homepage list array
        const homePageList = ListData.map((item, index) => {
            return (
                <Lists key={item.id} {...item} />

            )
        })
        return (
            <div className="homepage">
                <Hero />
                {homePageList}
                <PricesWrapper />
            </div>
        )
    }
}

export default Homepage;