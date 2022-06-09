import React from "react";

export const Hero = () => {

    return (

        <section className="hero">
            <article className="hero-one">
                <div>
                    <h1 className="hero-title">THE ONLY DONE FOR YOU OPTION PICKER</h1>
                    <p style={{color:'aliceblue'}}>Get trade alerts. Cancel anytime.</p>
                </div>
                <form>
                    <p style={{color:'aliceblue', padding:'1rem 0'}}>Enter your email to create or restart your membership</p>
                    <input className="hero-mail" type='email' placeholder="Email" />
                    <input className="hero-btn" type='submit' value='Get start' />
                </form>
            </article>
            <picture className="hero-pic">
                <img src='../images/Hero-homepage/landing_candle_img.png' alt="candlestick img"/>
            </picture>
        </section>

    )
}