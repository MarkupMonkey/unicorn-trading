import React from "react";


function Sidebar() {
    return (
        <aside className="sidebar border gradient">
            <h1 className="font-josefin txt-size-title font_title">Unicorn Trading</h1>
            <div className="logo border"></div>
            <div className="conteiner  flex column justify-between p-l-m p-r-m">
                <div className=" border_b w-100">
                    <a href="" className="font-josefin txt-size-m p-s p-b-m ">Why us?</a>
                </div>
                <div className="p-b-s border_b w-100">
                    <a href="" className="font-josefin txt-size-m p-s p-b-m">Competitive Advantage of Artificial Intelligence</a>
                </div>
                <div className="p-b-s border_b w-100">
                    <a href="" className="font-josefin txt-size-m p-s p-b-m">Speed and time are at our core</a>
                </div>
                <div className="p-b-s  border_b w-100">
                    <a href="" className="font-josefin txt-size-m p-s p-b-m">Built in options chain scanning</a>
                </div>
                <div className="p-b-s  border_b w-100">
                    <a href="" className="font-josefin txt-size-m p-s p-b-m">Powerful for beginners and seasoned professionals alike</a>
                </div>
                <div className="flex">
                    <button className="btn ">
                        Login
                    </button>

                    <button className="btn ">
                        Sign Up
                    </button>
                </div>
            </div>
        </aside>





    )
}

export default Sidebar;