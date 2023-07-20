import { Component } from "react";
import PropTypes from "prop-types";
export default class UsersTable extends Component {
    static propTypes = {
        users: PropTypes.any,
    };
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <h5>View users</h5>
                <table className="table table-striped table-hover">
                    <thead className="bg-info">
                        <tr>
                            <th>No</th>
                            <th>Username</th>
                            <th>Email</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.users.length > 0 ? (
                            this.props.users.map((user, index) => (
                                <tr key={user.id}>
                                    <td>{index + 1}</td>
                                    <td>{user.username}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        <button className="btn btn-sm btn-primary">
                                            Edit
                                        </button>
                                        <button className="btn btn-sm btn-danger">
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan={4}>empty</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </>
        );
    }
}
