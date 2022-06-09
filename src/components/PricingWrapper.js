import React from "react";
import { Pricing } from "./Pricing";


export const PricesWrapper = (props) => {
    const pricing = [
        { id: 1, name: 'month', price: 67 },
        { id: 2, name: 'year', price: 670 }
    ]

    const pricingMenu = pricing.map(items => {
        return (
            <Pricing key={items.id} {...items} />
        )
    })

    return (
        <div className="prices-wrapper">
            {pricingMenu}
        </div>
    )
}