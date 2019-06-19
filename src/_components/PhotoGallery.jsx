import React, { useState, useEffect } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import { GetPhotoAlbum } from "./../_services/photos.service";
import loader from "./../images/Infinity-1s-200px.svg";

export function PhotoGallery(props) {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);
  const [photos, setPhotos] = useState([
    {
      src: loader,
      width: 1,
      height: 1
    }
  ]);

  const photosArray = () => {
    GetPhotoAlbum(props.albumId).then(function(data) {
      setPhotos(data);
    });
  };

  useEffect(() => {
    photosArray();
    console.log("Getting Photos Gallery - On Component Load - Runs Once Only");
  }, []); //Use Empty arrray knowing that an empty set does never change, the effect will run only once.

  const openLightbox = (event, obj) => {
    setCurrentImage(obj.index);
    setViewerIsOpen(true);
  };
  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <div>
      <Gallery photos={photos} margin={props.margin} onClick={openLightbox} />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={photos.map(x => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </div>
  );
}
