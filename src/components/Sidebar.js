import React from "react";
import { LoginModal } from "./LoginModal";
import { useState } from 'react'
import { SignUpModal } from './SignUpModal'
import { Link } from "react-router-dom";

export function Sidebar({ user, setLogin, setLogout }) {
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)
    const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false)

    const backgroundLogo = {
        backgroundImage: `url('/unicorno_logo.png')`
    }

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
        <nav className="sidebar gradient">
            <div className="row-wrap align-center">
                <div className="logo" style={backgroundLogo}></div>
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
                {user.logged && <button className="navbtn font-josefin txt-size-l txt-weight-semibold">
                    <Link to={'/dashboard'}>
                        <span>Dashboard</span>
                        <div className="border_b w-100"></div>
                    </Link>
                </button>}
                {user.logged && <button className="navbtn font-josefin txt-size-l txt-weight-semibold">
                    <Link to={'/'}>
                        <span>Home</span>
                        <div className="border_b w-100"></div>
                    </Link>
                </button>}
                {!user.logged && <button className="navbtn font-josefin txt-size-l txt-weight-semibold" onClick={openLoginModalHandler}>
                    <span>Login</span>
                    <div className="border_b w-100"></div>
                </button>}
                {user.logged && < button className="navbtn font-josefin txt-size-l txt-weight-semibold" onClick={setLogout}>
                    <span>Logout</span>
                    <div className="border_b w-100"></div>
                </button>}
                {!user.logged && <button className="navbtn font-josefin txt-size-l txt-weight-semibold" onClick={openSignUpModalHandler}>
                    <span>Sign Up</span>
                    <div className="border_b w-100"></div>
                </button>}
            </div>
            {isLoginModalOpen && <LoginModal user={user} modalSetLogin={setLogin} closeModal={closeLoginModalHandler} />}
            {isSignUpModalOpen && <SignUpModal closeModal={closeSignUpModalHandler} />}
        </nav >
    )
}