import UserRow from "./UserRow";

const UserList = (props) => {



    return (
        <div className={"border"}>
            <div className={"col"}
                 style={{paddingTop: "10px", paddingBottom: "10px", paddingLeft: "35px"}}>
                <h4>All users</h4>
            </div>

            <div className={"bg-white border-top"} style={{padding: "20px 35px"}}>
                <table className={"table table-striped table-borderless"}>
                    <thead>
                    <tr className={"border-top border-bottom"}>
                        <th scope={"col"}>ID</th>
                        <th scope={"col"}>First name</th>
                        <th scope={"col"}>Last Name</th>
                        <th scope={"col"}>Age</th>
                        <th scope={"col"}>Email</th>
                        <th scope={"col"}>Role</th>
                        <th scope={"col"}>Edit</th>
                        <th scope={"col"}>Delete</th>
                    </tr>
                    </thead>
                    <tbody>

                    {
                        props.users.map(user =>
                            <UserRow delete={props.delete} user={user} key={user.id} update={props.update}/>
                        )
                    }

                    </tbody>

                </table>
            </div>

        </div>

    )
        ;
};

export default UserList;