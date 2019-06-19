/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { PhotoGallery } from "./../_components/PhotoGallery";
class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="col-md-12">
        <PhotoGallery
          margin={5}
          albumId={
            "AAG2u85M3p2Dny9K9WWUMtiVA-XauFLdb_6oaXbqdc7V0wST2DpiEzk9kgZYHQpduvOoXUbMFsl1"
          }
        />
      </div>
    );
  }
}

const connectedHomePage = connect()(HomePage);
export { connectedHomePage as HomePage };
