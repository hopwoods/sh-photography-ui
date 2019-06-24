/* eslint-disable no-unused-vars */
import Api from "./../_helpers/api";

export const GetPhotoAlbum = function(goolgeAlbumId) {
  return Api.get(`/photos/getalbumphotos?albumId=${goolgeAlbumId}`).then(
    Response => {
      return Response.data.photos;
    }
  );
};
