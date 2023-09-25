import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React, {useState} from 'react';

function ModalDelete(props) {

    const [deleteUser, setDeleteUser] = useState({...props.user})

    const deleteThisUser = (e) => {
        e.preventDefault()
        props.delete(deleteUser)
        props.onHide()
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
                    Delete user
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className={"d-flex justify-content-center"}>
                    <div className={"w-25"}>

                        <form style={{paddingTop: "10px", paddingBottom: "10px"}}>
                            <div className="form-group">
                                <p className="text-center">
                                    <label htmlFor="id" className="form-label"><strong>ID</strong></label>
                                    <input type="text" className="form-control"
                                           id="id" disabled value={deleteUser.id}
                                    />
                                </p>
                            </div>
                            <div className="form-group">
                                <p className="text-center">
                                    <label htmlFor="firstName" className="form-label"><strong>First
                                        name</strong></label>
                                    <input type="text" className="form-control"
                                           id="firstName" value={deleteUser.firstName} disabled
                                    />
                                </p>
                            </div>
                            <div className="form-group">
                                <p className="text-center">
                                    <label htmlFor="lastName" className="form-label"><strong>Last name</strong></label>
                                    <input type="text" className="form-control"
                                           id="lastName" value={deleteUser.lastName} disabled/>
                                </p>
                            </div>
                            <div className="form-group">
                                <p className="text-center">
                                    <label htmlFor="age"
                                           className="form-label"><strong>Age</strong></label>
                                    <input type="number" className="form-control"
                                           id="age" value={deleteUser.age} disabled/>
                                </p>
                            </div>
                            <div className="form-group">
                                <p className="text-center">
                                    <label htmlFor="username"
                                           className="form-label"><strong>Email</strong></label>
                                    <input type="email" className="form-control"
                                           id="username" value={deleteUser.username} disabled/>
                                </p>
                            </div>
                            <div className="form-group">
                                <p className="text-center">
                                    <label htmlFor="password" className="form-label"><strong>Password</strong></label>
                                    <input type="password" className="form-control"

                                           id="password"
                                           minLength="1" required value={""} disabled/>
                                </p>
                            </div>
                            <div className="form-group">
                                <p className="text-center">
                                    <label htmlFor="role"><strong>Role</strong></label>
                                    <select className="form-select" size="2" id="role"
                                            name="userRole" required value={deleteUser.role} disabled>
                                        <option value="ROLE_ADMIN">ADMIN</option>
                                        <option value="ROLE_USER">USER</option>
                                    </select>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>

            </Modal.Body>
            <Modal.Footer>
                <Button variant="btn btn-secondary" onClick={props.onHide}>Close</Button>
                <div className="text-center ">
                    <button className="btn btn-danger" onClick={deleteThisUser} >Delete</button>
                </div>
            </Modal.Footer>
        </Modal>
    );
}

export default ModalDelete;