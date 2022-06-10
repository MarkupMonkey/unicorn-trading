import React from "react";
import { Hero } from "./Hero";

// Homepage lists portion
import Lists from './Lists';
import { ListData } from './ListData';
import { PricesWrapper } from "./PricingWrapper";
import {Footer} from "./Footer"

class Homepage extends React.Component {
    render() {
        // Iterating through homepage list array
        const homePageList = ListData.map((item, index) => {
            return (
                <Lists key={index} {...item} />
            )
        })
        return (
            <div className="homepage">
                <Hero />
                {homePageList}
                <PricesWrapper />
                <Footer />
            </div>
        )
    }
}

export default Homepage;