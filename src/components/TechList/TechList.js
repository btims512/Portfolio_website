import React, { useState } from "react";
import { render } from "react-dom";
import Gallery from "react-photo-gallery";
import Photo from "./photo";
import arrayMove from "array-move";
import { SortableContainer, SortableElement } from "react-sortable-hoc";
import { photos } from "./photos";
import data from "./photos";
import { TechListStyles } from "./TechListStyles";

console.log(data);
const handleOnClick = (photo) =>
  alert(
    `You selected a photo with the title "${photo.header}"! This is where we would redirect the user to /review to modify the picture.`
  );

const pictures = data.sort((a, b) => new Date(a.footer) > new Date(b.footer));
const galleryStyle = {
  backgroundColor: "#333",
};

/* popout the browser and maximize to see more rows! -> */
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
