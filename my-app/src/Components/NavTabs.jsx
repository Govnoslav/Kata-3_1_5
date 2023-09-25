import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import UserList from "./UserList";
import React from 'react';
import {useEffect, useState} from "react";
import ErrorModal from "./ErrorModal";
import NewUserBootstrap from "./NewUserBootstrap";

function NavTabs() {
    const [users, setUser] = useState([])
    const [key, setKey] = useState('UsersTable')
    const [modalShow, setModalShow] = React.useState(false);


    useEffect(() => {
        fetch("http://localhost:8080/users")
            .then(response => response.json())
            .then(data => setUser(data))
    }, [])


    const createUser = async (newUser) => {
        let response
        try {
            response = await fetch("http://localhost:8080/users/new", {
                method: 'POST',
                body: JSON.stringify(newUser),
                headers: {"Content-Type": "application/json"}
            })
        } catch (e) {
            console.log(e)
        }

        if (response?.ok) {
            fetch("http://localhost:8080/users")
                .then(response => response.json())
                .then(data => setUser(data))
            setKey('UsersTable')

        } else {
            setKey('UsersTable')
            setModalShow(true)
        }

    }

    const updateUser = async (updatedUser) => {

        let response
        try {
            response = await fetch("http://localhost:8080/users/" + updatedUser.id, {method: 'PUT',
                body: JSON.stringify(updatedUser),
                headers: {"Content-Type": "application/json"}})
        } catch (error) {
            console.log(error)
        }

        if (response?.ok) {
            fetch("http://localhost:8080/users")
                .then(response => response.json())
                .then(data => setUser(data))
        } else {
            console.log(response?.status)
        }

    }

    const deleteUser = async (deletedUser) => {
        let response
        try {
            response = await fetch("http://localhost:8080/users/" + deletedUser.id, {method: 'DELETE'})
        } catch (error) {
            console.log(error)
        }
        if (response?.ok) {
            setUser(users.filter(e => e.id !== deletedUser.id))
        } else {
            console.log(response?.status)
        }
    }

    return (

        <div>
            <Tabs
                id="controlled-tab-example"
                activeKey={key}
                onSelect={(k) => setKey(k)}

            >
                <Tab eventKey="UsersTable" title="Users table">
                    <UserList delete={deleteUser} users={users} update={updateUser}/>
                </Tab>
                <Tab eventKey="NewUser" title="New User">
                    {/*<NewUser create={createUser}/>*/}
                    <NewUserBootstrap create={createUser}/>
                </Tab>

            </Tabs>
            <ErrorModal show={modalShow}
                        onHide={() => setModalShow(false)} />
        </div>

    );
}



export default NavTabs;