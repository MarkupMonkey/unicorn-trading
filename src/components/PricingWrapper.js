import React from "react";
import { Pricing } from "./Pricing";


export const PricesWrapper = (props) => {
    const pricing = [
        { id: 1, billingPeriod: 'month', price: 67 },
        { id: 2, billingPeriod: 'year', price: 670 }
    ]

    const pricingMenu = pricing.map(items => {
        return (
            <Pricing key={items.id} {...items} />
        )
    })

    return (
        <div className="flex flex-col md:flex-row gap-7">
            {pricingMenu}
        </div>
    )
}