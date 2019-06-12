import React, { useState } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import { GetPhotoAlbum } from "./../_services/photos.service";
export function PhotoGallery(props) {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);
  const [photos, setPhotos] = useState([]);
  const [requestCount, setRequestCount] = useState(0);

  const photosArray = () => {
    if(requestCount < 1){
      
      GetPhotoAlbum(props.albumId).then(function(data) {
        //console.log(data)
        setRequestCount(1)
        setPhotos(data)
        
      });
    }
  };

  photosArray();

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
