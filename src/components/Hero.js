import React from "react";

export const Hero = () => {
    return (
        <section className="hero">
            <article className="hero-text">
                <div>
                    <h1 className="font-josefin txt-weight-bold hero-title hero-text-gradient">The option picker. <br /> Revisited. <br />Made for you.</h1>
                    <p className="txt-size-xl">Get trade alerts, cancel anytime.</p>
                </div>
                <form className="column align-center">
                    <p className="txt-darkgray p-b-m">Enter your email to create or restart your membership</p>
                    <div className="row-nowrap">
                        <input className="hero-mail" type='email' placeholder="Your email here" />
                        <input className="btn font-josefin p-t-s p-b-xs" type='submit' value='Get started!' />
                    </div>
                </form>
            </article>
            <picture className="hero-pic">
                <img src='../images/Hero-homepage/dubbing-unicorn-graphic-2.png' alt="graphic finance" />
            </picture>
        </section>

    )
}