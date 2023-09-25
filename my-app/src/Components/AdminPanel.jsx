import React from 'react';
import NavTabs from "./NavTabs";
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import UserPanel from "./UserPanel";


const AdminPanel = () => {



    return (
        <div className={"row"}>

            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row>
                    <Col sm={2} className={"px-0"}>
                        <Nav variant="pills" className="flex-column">
                            <Nav.Item>
                                <Nav.Link eventKey="first">Admin</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">User</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col sm={9}>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <div className={"col vh-100"}>
                                    <div className="row">
                                        <div className="col">
                                            <h1>Admin panel</h1>
                                        </div>

                                        <div className={"row"}>
                                            <div className={"col"}>

                                                <NavTabs/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                <UserPanel/>
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>


        </div>
    );
};

export default AdminPanel;