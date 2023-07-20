import { Component } from "react";
import UsersTable from "./components/UsersTable";
import UserForm from "./components/UserForm";
import { v4 as uuidv4 } from "uuid";
import "./App.css";

// const users = [
//     {
//         id: 1,
//         username: "qweqwew",
//         email: "qweqwe",
//     },
// ];

export default class App extends Component {
    state = {
        usersList: JSON.parse(localStorage.getItem("usersList")) || [],
    };

    handleSaveUser = (user) => {
        user.id = uuidv4();
        const newUsersList = [...this.state.usersList, user];
        this.setState({
            usersList: newUsersList,
        });

        localStorage.setItem("usersList", JSON.stringify(newUsersList));
    };

    // set lại usersList để Table render lại users
    handleUsersTable = () => {
        // c đang bí đoạn này, chưa biết nên setState kiểu gì.
        //Nếu lấy lại từ Local xuống thì sợ ko khớp dữ liệu
    };

    componentDidMount() {
        if (!JSON.parse(localStorage.getItem("usersList"))) {
            localStorage.setItem("usersList", "[]");
        }
    }
    componentDidUpdate() {
        localStorage.setItem("usersList", JSON.stringify(this.state.usersList));
    }

    render() {
        return (
            <>
                <h4 className="mb-3">CRUD App Class Component</h4>
                <div className="row">
                    <div className="col-3">
                        <UserForm saveUser={this.handleSaveUser} />
                    </div>
                    <div className="col-9">
                        <UsersTable users={this.state.usersList} />
                    </div>
                </div>
            </>
        );
    }
}
