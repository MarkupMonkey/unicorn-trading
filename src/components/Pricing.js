import React from "react";

export const Pricing = (props) => {
    return (
        <section className="card flex flex-col md:flex-row justify-between " >
            <div className="flex flex-col p-2 md:p-10  items-center" >
                <h2 className="text-gray-800 text-xl"> Only ${props.price} /{props.billingPeriod}</h2>
                <div className="savings-info font-semibold text-4xl animate-pulse place-self-center">
                    {props.billingPeriod === 'year' ? <p style={{ color: 'coral', fontSize: '1.7rem' }}>SAVE $134 ANNUALLY</p> : ''}
                </div>
                <ul className="column items-center">
                    <li className="font-quicksand text-gray-800 text-md py-1 md:py-2">- Daily options recommendation</li>
                    <li className="font-quicksand text-gray-800 text-md py-1 md:py-2">- Suggested strike prices for each symbol</li>
                    <li className="font-quicksand text-gray-800 text-md py-1 md:py-2">- 8 recommended options strategies</li>
                    <li className="font-quicksand text-gray-800 text-md py-1 md:py-2">- Grading system for better options trading</li>
                    <li className="font-quicksand text-gray-800 text-md py-1 md:py-2">- Proprietary indicators</li>
                    {props.billingPeriod === 'year' &&
                        <>
                            <li className="font-quicksand text-gray-800 text-md py-2 md:py-1">- Exclusive newsletter</li>
                            <li className="font-quicksand text-gray-800 text-md py-2 md:py-1">- More Unicorns!</li>
                        </>}
                </ul>
                <button className="hover:animate-bounce bg-[#f2b5d4] rounded-md p-2 m-2 drop-shadow-[0px_2px_2px_rgba(0,0,0,0.9)]" type='submit'>Subscribe Now</button>
            </div>
        </section>
    )
}
