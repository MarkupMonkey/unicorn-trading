import React from "react";

export const Hero = () => {
    return (
        <section className="hero flex flex-col md:flex-row">
            <article className="hero-text align-center">
                <div>
                    <h1 className="font-josefin text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-b
                     from-[#f2b5d4] via-[#eff7f6] to-[#7bdff2] drop-shadow-[0px_0px_1px_rgba(0,0,0,0.8)] p-10">The option picker. <br /> Revisited. <br />Made for you.</h1>
                    <p className="text-3xl pl-10 font-light">Get trade alerts, cancel anytime.</p>
                </div>
                <form className="flex flex-col align-center p-10">
                    <p className="text-gray-700 pb-2">Enter your email to create or restart your membership</p>
                    <div className="flex flex-row justify-center">
                        <input className="bg-gray-100 rounded-md w-42 h-10 drop-shadow-[0px_2px_4px_rgba(0,0,0,0.8)] outline-none focus:outline-[#f2b5c4] px-2 m-2" type='email' placeholder="Your email here" />
                        <input className="hover:animate-bounce bg-[#f2b5d4] rounded-md p-2 m-2 drop-shadow-[0px_2px_2px_rgba(0,0,0,0.9)]" type='submit' value='Get started!' />
                    </div>
                </form>
            </article>
            <picture className="hero-pic p-7 max-w-xs items-center md:max-w-md sm:max-w-xs">
                <img src='../images/Hero-homepage/dubbing-unicorn-graphic-2.png' alt="graphic finance" />
            </picture>
        </section>
    )
}