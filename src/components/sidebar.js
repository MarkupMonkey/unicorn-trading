import React from "react";
import { ListData } from "./ListData";

function Sidebar() {
    return (
        <nav className="sidebar border gradient">
            <div className="row-wrap align-center">
                <div className="logo"></div>
                <h2 className="font-josefin txt-size-l">Unicorn <br /> Trading</h2>
            </div>

            <div className="sidebar-links column justify-between">
                <div className="p-b-s w-100 sidebar-link">
                    <a href="" className="font-josefin txt-size-m">Why us?</a>
                    <div className="border_b"></div>
                </div>
                <div className="p-b-s w-100  sidebar-link">
                    <a href="" className="font-josefin txt-size-m">Competitive Advantage of Artificial Intelligence</a>
                    <div className="border_b"></div>
                </div>
                <div className="p-b-s w-100  sidebar-link">
                    <a href="" className="font-josefin txt-size-m">Speed and time are at our core</a>
                    <div className="border_b"></div>
                </div>
                <div className="p-b-s w-100  sidebar-link">
                    <a href="" className="font-josefin txt-size-m">Built in options chain scanning</a>
                    <div className="border_b"></div>
                </div>
                <div className="p-b-s w-100  sidebar-link">
                    <a href="" className="font-josefin txt-size-m">Powerful for beginners and seasoned professionals alike</a>
                    <div className="border_b"></div>
                </div>

            </div>
            <div className="nav-btn-container justify-between">
                <button className="navbtn font-josefin txt-size-l txt-weight-semibold">
                    <a>Login</a>
                    <div className="border_b w-100"></div>
                </button>
                <button className="navbtn font-josefin txt-size-l txt-weight-semibold">
                    <a>Sign Up</a>
                    <div className="border_b w-100"></div>
                </button>
            </div>
        </nav>
    )
}

export default Sidebar;