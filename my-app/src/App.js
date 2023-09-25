import React from 'react';
window.React = React
import './App.css';
import NavBar from "./Components/NavBar";
import AdminPanel from "./Components/AdminPanel";

function App() {
    return (
        <div className="App">
            <div className="container-fluid bg-light">

                <NavBar/>
                <AdminPanel/>
            </div>
        </div>
    );
}

export default App;
