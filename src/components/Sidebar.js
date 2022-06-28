import React from "react";
import { LoginModal } from "./LoginModal";
import { useState } from 'react'
import { SignUpModal } from './SignUpModal'
import { Link } from "react-router-dom";

export function Sidebar({ user, setLogin, setLogout }) {
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)
    const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false)

    // const Logo = {
    //     backgroundImage: `url('/unicorno_logo.png')`
    // }

    function openLoginModalHandler() {
        setIsLoginModalOpen(isLoginModalOpen => isLoginModalOpen = true)
    }
    function closeLoginModalHandler() {
        setIsLoginModalOpen(isLoginModalOpen => isLoginModalOpen = false)
    }

    function openSignUpModalHandler() {
        setIsSignUpModalOpen(isSignUpModalOpen => isSignUpModalOpen = true)
    }
    function closeSignUpModalHandler() {
        setIsSignUpModalOpen(isSignUpModalOpen => isSignUpModalOpen = false)
    }

    return (
        <nav className="sidebar gradient flex flex-row md:w-3/5 md:min-w-32 md:h-full md:flex-col justify-between w-full h-24 px-4">
            <div className="row-wrap align-center flex flex-row justify-around md:p-6 p-2">
                <img className="logo animate-pulse w-20 h-30 " src='../images/Sidebar/unicorno_logo.png'></img>
                <h2 className="font-josefin text-2xl my-1">Unicorn <br /> Trading</h2>
            </div>

            <div className="px-4 sidebar-links justify-between hidden md:flex md:flex-col ">
                <div className=" pb-16 w-100 sidebar-link">
                    <a href="" className="font-josefin text-sm">Why us?</a>
                    <div className="border-b-[blue]"></div>
                </div>
                <div className=" pb-16 w-100  sidebar-link">
                    <a href="" className="font-josefin text-sm">Competitive Advantage of Artificial Intelligence</a>
                    <div className="border_b"></div>
                </div>
                <div className=" pb-16 w-100  sidebar-link">
                    <a href="" className="font-josefin text-sm">Speed and time are at our core</a>
                    <div className="border_b"></div>
                </div>
                <div className=" pb-16 w-100  sidebar-link">
                    <a href="" className="font-josefin text-sm">Built in options chain scanning</a>
                    <div className="border_b"></div>
                </div>
                <div className="pb-16 w-100  sidebar-link">
                    <a href="" className="font-josefin text-sm">Powerful for beginners and seasoned professionals alike</a>
                    <div className="border_b"></div>
                </div>
            </div>

            <div className="nav-btn-container align-center flex flex-row md:flex-col gap-16 justify-between md:mr-0 mr-20 sm:mr-0">
                {user.logged && <button className="navbtn font-josefin text-base font-semibold">
                    <Link to={'/dashboard'}>
                        <span>Dashboard</span>
                        <div className="border_b w-100"></div>
                    </Link>
                </button>}
                {user.logged && <button className="navbtn font-josefin text-base font-semibold">
                    <Link to={'/'}>
                        <span>Home</span>
                        <div className="border_b w-100"></div>
                    </Link>
                </button>}
                {!user.logged && <button className="navbtn font-josefin text-base font-semibold" onClick={openLoginModalHandler}>
                    <span>Login</span>
                    <div className="border_b w-100"></div>
                </button>}
                {user.logged && <button className="navbtn font-josefin text-base font-semibold" onClick={setLogout}>
                    <span>Logout</span>
                    <div className="border_b w-100"></div>
                </button>}
                {!user.logged && <button className="navbtn font-josefin text-base font-semibold" onClick={openSignUpModalHandler}>
                    <span>Sign Up</span>
                    <div className="border_b w-100"></div>
                </button>}
            </div>
            {isLoginModalOpen && <LoginModal user={user} modalSetLogin={setLogin} closeModal={closeLoginModalHandler} />}
            {isSignUpModalOpen && <SignUpModal closeModal={closeSignUpModalHandler} />}
        </nav >
    )
}