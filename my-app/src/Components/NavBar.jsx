import React from 'react';
import {useEffect, useState} from "react";

const NavBar = () => {
    const [someUser, setSomeUser] = useState({role:"",username:""})




    useEffect(() => {
        fetch("http://localhost:8080/currentuser")
            .then(response => response.json())
            .then(data => {
                let user = {
                    role: data.role.split("_")[1],
                    username: data.username
                }
                setSomeUser(user)
            })
    }, [])


    return (
        <div>
            <div className="row  bg-dark text-white">
                <div className="col mt-3">
                    <p><b> {someUser.username}</b> with roles:
                        <span>{someUser.role}</span>
                    </p>
                </div>
                <div className="col-auto mt-3">
                    <div>
                        <a href={"/logout"} className="text-muted">Logout</a>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col">
                    <br/>
                </div>
            </div>
        </div>
    );
};

export default NavBar;