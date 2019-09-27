import React from "react";

class logout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <button
          className="btn btn-success add-button"
          onClick={this.props.logoutHandler()}
        >
          Logout
        </button>
      </div>
    );
  }
}

export default logout;
