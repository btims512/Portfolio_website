import React from "react";
import Gallery from "react-photo-gallery";

import data from "./photos";
import { TechListStyles } from "./TechListStyles";

console.log(data);
const handleOnClick = (photo) => alert(` "${photo.header}"`);

const pictures = data.sort((a, b) => new Date(a.footer) > new Date(b.footer));
const galleryStyle = {
  backgroundColor: "#333",
};

const TechList = () => (
  <TechListStyles>
    <Gallery
      thumbnailHeight="150px"
      thumbnailWidth="150px"
      margin="10px"
      pictures={pictures}
      onClick={handleOnClick}
      galleryStyle={galleryStyle}
    />
  </TechListStyles>
);

export default TechList;
