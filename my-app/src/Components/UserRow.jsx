import React from 'react';
import Button from 'react-bootstrap/Button';
import ModalDelete from "./ModalDelete";
import ModalEdit2 from "./ModalEdit2";


const UserRow = (props) => {
    const [modalShow, setModalShow] = React.useState(false);
    const [modalDeleteShow, setModalDeleteShow] = React.useState(false);

    return (
            <tr>
                <td>{props.user.id}</td>
                <td>{props.user.firstName}</td>
                <td>{props.user.lastName}</td>
                <td>{props.user.age}</td>
                <td>{props.user.username}</td>
                <td>{props.user.role.split("_")[1]}</td>
                <td>
                    <Button variant="btn btn-info" onClick={() => setModalShow(true)}>
                        Edit
                    </Button>
                    <ModalEdit2
                        update={props.update}
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                        user={props.user}
                    />
                </td>
                <td>
                    <Button variant="btn btn-danger" onClick={() => setModalDeleteShow(true)}>
                        Delete
                    </Button>
                    <ModalDelete
                        delete={props.delete}
                        show={modalDeleteShow}
                        onHide={() => setModalDeleteShow(false)}
                        user={props.user}

                    />
                </td>
            </tr>
    );
};

export default UserRow;