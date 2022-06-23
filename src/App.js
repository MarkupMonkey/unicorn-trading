import { useCallback, useEffect, useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import particlesOptions from "./particles.json";
import { Sidebar } from './components/Sidebar';
import Homepage from './components/Homepage';
import { Dashboard } from './components/Dashboard';
import Protected from './components/Protected';

function App() {
    const particlesInit = useCallback(main => {
        loadFull(main);
    }, [])


    const [user, setUser] = useState([])

    /* Checks the localstorage. if the 'user' field is not empty,
       the 'user' from the state will be filled with the user's data.
       otherwise, the user will simply be 'false' */
    function userChecker() {

        if (localStorage.getItem('user')) {
            console.log('user found in localStorage')
            const localData = JSON.parse(localStorage.getItem('user'))
            setUser({ ...localData })
            setTimeout(() => {
                console.log(user)
            }, 200);

        } else {
            console.log('setting user to false')
            setUser(false)
        }
    }

    /* On render, check the localstorage for an existing user */
    useEffect(() => {
        userChecker()
    }, [])


    return (
        <div className="App">
            <Particles options={particlesOptions} init={particlesInit} />
            <Sidebar user={user} />
            <Routes>
                <Route path='/' element={<Homepage />} />
                <Route element={<Protected user={user} />} >
                    <Route path='/dashboard' element={<Dashboard />} />
                </Route>
                <Route path='*' element={
                    <div>
                        <h1>Not found!</h1>
                        <Link to='/'>Back to home</Link>
                    </div>
                } />
            </Routes>
        </div>
    );
}

export default App;
