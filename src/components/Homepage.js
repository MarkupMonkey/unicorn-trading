import React from "react";
import { Hero } from "./Hero";

// Homepage lists portion
import Lists from './Lists';
import { ListData } from './ListData';

class Homepage extends React.Component {
    render() {
        // Iterating through homepage list array
        const homePageList = ListData.map((item) => {
            return (
                <Lists {...item} />
            )
        })
        return (
            <div className="homepage">
                <Hero />
                {homePageList}
            </div>
        )
    }
}

export default Homepage;