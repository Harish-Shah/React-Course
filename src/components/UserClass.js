import React from "react";
import UserContext from "../utills/userContext";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      count2: 2,
      userInfo: {
        name: "Dummy",
        location: "Default",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/Harish-Shah");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
    console.log(json);
  }

  render() {
    console.log(this.state.userInfo);

    const { login, location } = this.state.userInfo;

    return (
      <div className="user-card">
        <h2>Name : {login}</h2>
        <h2>Location: {location}</h2>
        <h2>Conatact: h@gmail.com</h2>
        {/* Fetching Context data in Class Based Components */}
        <h2>
          User:{" "}
          <UserContext.Consumer>
            {(data) => data.loggedInUser}
          </UserContext.Consumer>
        </h2>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Count Increase {this.state.count}
        </button>
      </div>
    );
  }
}

export default UserClass;
