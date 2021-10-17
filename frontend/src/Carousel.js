import React, { useState } from 'react'
import { Button } from "@material-ui/core";
import Search from './Search';
import { useHistory } from "react-router-dom";
import "./Carousel.css";
import { images } from "./CarouselData";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

function Carousel() {
  const [currImg, setCurrImg] = useState(0);
  const history = useHistory();
  const [showSearch, setShowSearch] = useState(false);

  return (
    <div className="carousel">
      <div className="carouselInner" style={{ backgroundImage: `url(${images[currImg].img})` }}>
      <div className="left"onClick={() => {currImg > 0 && setCurrImg(currImg - 1);}}>
          <ArrowBackIosIcon style={{ fontSize: 30 }} />
        </div>
        <div className="center">
          <p>Hotel Santos</p>
        </div>
        <div className="right" onClick={() => {currImg < images.length - 1 && setCurrImg(currImg + 1);}}>
          <ArrowForwardIosIcon style={{ fontSize: 30 }} />
        </div>
      </div>
    </div>
  )
}

export default Carousel;