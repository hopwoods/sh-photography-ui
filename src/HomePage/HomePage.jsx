import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class HomePage extends React.Component {
  render() {
    return (
      <div className="col-md-12">
        <h2>Welcome</h2>
        <Link to="/login">Login</Link>
      </div>
    );
  }
}

function mapStateToProps(state) {
    return {
       
    };
}

const connectedHomePage = connect(mapStateToProps)(HomePage);
export { connectedHomePage as HomePage }; 
