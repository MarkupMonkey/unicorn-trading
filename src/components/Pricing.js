import React from "react";

export const Pricing = (props) => {
    return (
        <section className="card" >
            <div className="price" >
                <h2> Only ${props.price} /{props.name}</h2>
                <div className="ghost">
                    {props.name === 'year' ? <p style={{ color: 'coral', fontSize: '16px' }}>SAVE $134 ANNUALLY</p> : ''}
                </div>
                <ul>
                    <li> Daily options recommendation</li>
                    <li>Suggested strike prices for each symbol</li>
                    <li>8 recommended options strategies</li>
                    <li> Grading system for better options trading</li>
                    <li>Proprietary indicators</li>
                    <input className="pricing-btn1" type='submit' value='Subscribe Now' />
                </ul>
            </div>
        </section>
    )
}
