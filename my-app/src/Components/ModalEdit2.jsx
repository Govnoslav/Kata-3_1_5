import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React, {useState} from 'react';
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

function ModalEdit2(props) {

    const [user, setUser] = useState({...props.user})
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
            setValidated(true);

        } else {
            event.preventDefault()
            const updatedUser = {
                ...user
            }
            props.update(updatedUser)
            props.onHide()
            setValidated(false);

        }


    };

    const updateThisUser = (e) => {

    }
    return (


        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >

            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Edit user
                </Modal.Title>
            </Modal.Header>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>

            <Modal.Body>
                <div className="d-flex justify-content-center bg-white border">
                    <div className="w-25 pt-1 pb-1">

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
                                <Form.Control
                                    type="text"
                                    placeholder="Password"
                                    value={user.password}
                                    onChange={e => setUser({...user, password: e.target.value})}
                                />
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

                    </div>
                </div>

            </Modal.Body>
            <Modal.Footer>
                <Button variant="btn btn-secondary" onClick={props.onHide}>Close</Button>
                <div className="text-center ">
                    <button type="submit"  className="btn btn-primary">Edit</button>
                </div>
            </Modal.Footer>
            </Form>

        </Modal>


    )
        ;
}

export default ModalEdit2;