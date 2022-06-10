import React from "react";

export const Pricing = (props) => {
    return (
        <section className="card pricing-card" >
            <div className="column align-center" >
                <h2> Only ${props.price} /{props.billingPeriod}</h2>
                <div className="savings-info m-t-m m-b-m">
                    {props.billingPeriod === 'year' ? <p style={{ color: 'coral', fontSize: '1.7rem' }}>SAVE $134 ANNUALLY</p> : ''}
                </div>
                <ul className="column align-start">
                    <li className="font-quicksand txt-color-gray txt-size-m p-s">Daily options recommendation</li>
                    <li className="font-quicksand txt-color-gray txt-size-m p-s">Suggested strike prices for each symbol</li>
                    <li className="font-quicksand txt-color-gray txt-size-m p-s">8 recommended options strategies</li>
                    <li className="font-quicksand txt-color-gray txt-size-m p-s">Grading system for better options trading</li>
                    <li className="font-quicksand txt-color-gray txt-size-m p-s">Proprietary indicators</li>
                    {props.billingPeriod === 'year' &&
                        <>
                            <li className="font-quicksand txt-color-gray txt-size-m p-s">Exclusive newsletter</li>
                            <li className="font-quicksand txt-color-gray txt-size-m p-s">More Unicorns!</li>
                        </>}
                </ul>
                <button className="pricing-btn btn font-josefin txt-size-l p-b-xs m-t-l" type='submit'>Subscribe Now</button>
            </div>
        </section>
    )
}
