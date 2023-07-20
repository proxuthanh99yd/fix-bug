import React, { Component } from 'react'

export default class UserForm extends Component {
    constructor() {
        super();
        this.state = {
            id: null,
            username: "",
            email: "",
        };
    };

    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value,
        });
    };
    
    handleSubmit = (event) => {
        event.preventDefault();
        
        const {id, username, email} = this.state;
        if (!username || !email) return;
        this.props.saveUser(this.state);
        
        this.setState({
            id: null,
            username: "",
            email: "",
        });
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className='mb-3'>
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        className='form-control'
                        placeholder='enter your username...'
                        name="username"
                        id="username"
                        value={this.state.username}
                        onChange={this.handleInputChange} />
                </div>
                <div className='mb-3'>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="text"
                        className='form-control'
                        placeholder='enter your email address...'
                        name="email"
                        id="email" 
                        value={this.state.email}
                        onChange={this.handleInputChange}/>
                </div>
                <button type="submit"
                    className='btn btn-primary'
                >Save</button>
            </form>
        )
    }
}
