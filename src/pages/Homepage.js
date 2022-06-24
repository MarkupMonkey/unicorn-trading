import React from "react";
import { Hero } from "../components/Hero";

// Homepage lists portion
import Lists from '../components/Lists';
import { ListData } from '../components/ListData';
import { PricesWrapper } from "../components/PricingWrapper";
import {Footer} from "../components/Footer"

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