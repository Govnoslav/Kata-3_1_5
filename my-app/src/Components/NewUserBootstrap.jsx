import {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import React from "react";

function NewUserBootstrap({create}) {
    const [validated, setValidated] = useState(false);
    const [user, setUser] = useState({
        firstName: "", lastName: "", age: "0", username: "", password: "", role: "ROLE_USER"
    })

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
            setValidated(true);

        } else {
            event.preventDefault()
            const newUser = {
                ...user,
            }
            setUser({firstName: "", lastName: "", age: "0", username: "", password: "", role: "ROLE_USER"})
            create(newUser)
            setValidated(false);

        }


    };

    return (<div>
            <div className={"col"}
                 style={{paddingTop: "10px", paddingBottom: "10px", paddingLeft: "35px"}}>
                <h4>Add new user</h4>
            </div>
            <div className="d-flex justify-content-center bg-white border">
                <div className="w-25">
                    <Form noValidate validated={validated} onSubmit={handleSubmit}
                          style={{paddingTop: "10px", paddingBottom: "10px"}}>
                        <Form.Group className={"text-center"} controlId="validationCustom01">
                            <Form.Label><strong>First name</strong></Form.Label>
                            <InputGroup hasValidation>
                                <Form.Control
                                    type="text"
                                    placeholder="First name"
                                    required
                                    value={user.firstName}
                                    onChange={e => setUser({...user, firstName: e.target.value})}
                                />
                                <Form.Control.Feedback type="invalid">
                                    Please enter you first name
                                </Form.Control.Feedback>
                            </InputGroup>
                        </Form.Group>
                        <Form.Group className={"text-center"} controlId="validationCustom02">
                            <Form.Label><strong>Last name</strong></Form.Label>
                            <InputGroup hasValidation>
                                <Form.Control
                                    type="text"
                                    placeholder="Last name"
                                    required
                                    value={user.lastName}
                                    onChange={e => setUser({...user, lastName: e.target.value})}
                                />
                                <Form.Control.Feedback type="invalid">
                                    Please enter you last name
                                </Form.Control.Feedback>
                            </InputGroup>
                        </Form.Group>
                        <Form.Group className={"text-center"} controlId="validationCustom03">
                            <Form.Label><strong>Age</strong></Form.Label>
                            <InputGroup hasValidation>
                                <Form.Control
                                    type="number"
                                    placeholder="Age"
                                    min={1}
                                    max={120}
                                    required
                                    value={user.age}
                                    onChange={e => setUser({...user, age: e.target.value})}
                                />
                                <Form.Control.Feedback type="invalid">
                                    Please enter your age.
                                    <p>You age must be between 1 and 120.</p>
                                </Form.Control.Feedback>
                            </InputGroup>
                        </Form.Group>
                        <Form.Group className={"text-center"} controlId="validationCustom04">
                            <Form.Label><strong>Email</strong></Form.Label>
                            <InputGroup hasValidation>
                                <Form.Control
                                    type="email"
                                    placeholder="Email"
                                    required
                                    value={user.username}
                                    onChange={e => setUser({...user, username: e.target.value})}
                                />
                                <Form.Control.Feedback type="invalid">
                                    Please enter valid email address
                                </Form.Control.Feedback>
                            </InputGroup>
                        </Form.Group>
                        <Form.Group className={"text-center"} controlId="validationCustom05">
                            <Form.Label><strong>Password</strong></Form.Label>
                            <InputGroup hasValidation>
                                <Form.Control
                                    type="password"
                                    placeholder="Password"
                                    required
                                    value={user.password}
                                    onChange={e => setUser({...user, password: e.target.value})}
                                />
                                <Form.Control.Feedback type="invalid">
                                    Please enter password
                                </Form.Control.Feedback>
                            </InputGroup>
                        </Form.Group>
                        <Form.Group className={"text-center"} controlId="validationCustom06">
                            <Form.Label><strong>Role</strong></Form.Label>
                            <InputGroup hasValidation>
                                <Form.Select aria-label="Default select example" required htmlSize={2}
                                             value={user.role}
                                             onChange={e => setUser({...user, role: e.target.value})}>
                                    <option value="ROLE_ADMIN">ADMIN</option>
                                    <option value="ROLE_USER">USER</option>
                                </Form.Select>
                                <Form.Control.Feedback type="invalid">
                                    Please select role
                                </Form.Control.Feedback>
                            </InputGroup>
                        </Form.Group>
                        <div className={"text-center mt-3"}>
                            <Button type="submit" className="btn btn-success">Add new user</Button>
                        </div>
                    </Form>
                </div>
            </div>
        </div>

    );
}

export default NewUserBootstrap;