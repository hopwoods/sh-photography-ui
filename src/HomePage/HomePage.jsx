import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'; 
import { PhotoGallery } from './../_components/PhotoGallery';

class HomePage extends React.Component {
  render() {
    return (
      <div className="col-md-12">
       <PhotoGallery />
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
