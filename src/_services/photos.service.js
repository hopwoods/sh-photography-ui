import config from "config";

export const GetPhotoAlbum = function(goolgeAlbumId) {
  const requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json" }
  };

  return fetch(
    `${config.apiUrl}/photos/getalbumphotos?albumId=${goolgeAlbumId}`,
    requestOptions
  )
    .then(response => response.json())
    .then(data => {
      return data.photos;
    });
};
