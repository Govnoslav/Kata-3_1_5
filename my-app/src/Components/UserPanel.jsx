import React, {useState} from 'react';
import {useEffect} from "react";

const UserPanel = () => {
    const [currentUser, setCurrentUser] = useState({})

    useEffect(() => {
        fetch("http://localhost:8080/currentuser")
            .then(response => response.json())
            .then(data => {
                data.role = data.role.split("_")[1];
                setCurrentUser(data)})
    }, [])

    return (
        <div className="col vh-100" style={{paddingLeft: "40px", paddingRight: "40px"}}>
            <div className="row">
                <div className="col">
                    <h1>User information page</h1>
                </div>
            </div>
            <div className="row">
                <div className="col border">
                    <div className="row border-bottom">
                        <div className="col" style={{paddingTop: "10px", paddingBottom : "10px", paddingLeft: "20px"}}>
                            <h4>About user</h4>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col bg-white" style={{padding: "20px 20px"}}>
                            <table className="table table-striped table-borderless">
                                <thead>
                                <tr className="border-top border-bottom">
                                    <th scope="col">ID</th>
                                    <th scope="col">First Name</th>
                                    <th scope="col">Last Name</th>
                                    <th scope="col">Age</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Role</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>{currentUser.id}</td>
                                    <td>{currentUser.firstName}</td>
                                    <td>{currentUser.lastName}</td>
                                    <td>{currentUser.age}</td>
                                    <td>{currentUser.username}</td>
                                    <td>{currentUser.role}</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserPanel;