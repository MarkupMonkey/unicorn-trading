import React from "react";


function Sidebar() {
    return (
        <aside className="sidebar border gradient">
            <div className="row-wrap align-center">
                <div className="logo"></div>
                <h2 className="font-josefin txt-size-l">Unicorn <br /> Trading</h2>
            </div>



            <div className="link-sidebar column justify-between p-l-m p-r-m">
                <div className="p-b-s border_b w-100">
                    <a href="" className="font-josefin txt-size-m">Why us?</a>
                </div>
                <div className="p-b-s border_b w-100">
                    <a href="" className="font-josefin txt-size-m">Competitive Advantage of Artificial Intelligence</a>
                </div>
                <div className="p-b-s border_b w-100">
                    <a href="" className="font-josefin txt-size-m">Speed and time are at our core</a>
                </div>
                <div className="p-b-s  border_b w-100">
                    <a href="" className="font-josefin txt-size-m">Built in options chain scanning</a>
                </div>
                <div className="p-b-s  border_b w-100">
                    <a href="" className="font-josefin txt-size-m">Powerful for beginners and seasoned professionals alike</a>
                </div>

            </div>
            <div className="row-nowrap justify-between">
                <button className="btn font-quicksand">
                    Login
                </button>

                <button className="btn font-quicksand">
                    Sign Up
                </button>
            </div>

        </aside>





    )
}

export default Sidebar;