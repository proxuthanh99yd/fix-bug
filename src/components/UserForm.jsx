import { Component } from "react";
import PropTypes from "prop-types";
export default class UserForm extends Component {
    static propTypes = {
        users: PropTypes.any,
        saveUser: PropTypes.func,
    };
    constructor() {
        super();
        this.state = {
            id: null,
            username: "",
            email: "",
        };
    }

    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            id: Math.random(),
            [name]: value,
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();

        const { username, email } = this.state;
        if (!username || !email) return;
        this.props.saveUser(this.state);

        this.setState({
            id: "",
            username: "",
            email: "",
        });
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="enter your username..."
                        name="username"
                        id="username"
                        value={this.state.username}
                        onChange={this.handleInputChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="enter your email address..."
                        name="email"
                        id="email"
                        value={this.state.email}
                        onChange={this.handleInputChange}
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Save
                </button>
            </form>
        );
    }
}
