import React from "react";
import {useState} from 'react'


function MenuItem({dish, index, handle}) {
   

  return (
    <div className="itemContainer">
      <div className="leftContainer">
        <div className="imgContainer">
          {/* the image will receive the url src from the props */}
          <img src={dish.foodImage} alt={dish.itemName} />
        </div>
        <div className="itemDescription">
          {/* the h3 will receive the item name from the props */}
          
          <h3>{dish.itemName}</h3>
          {/* the p will receive the item description from the props */}
          <p>{dish.description}</p>
        </div>
      </div>
      <div className="rightContainer">
        {/* the div will receive the item price from the props */}
        <div>{dish.price} EUR</div>

        {/* the div with id favorite will have 2 attributes:
                - onClick, will call the method handleClickFavorite,
                - classname, that will be conditionally rendered, depending on the value of isFavorite from the component's state
            */}
        <div id="favorite"  onClick={() => {handle(index)}}  className={dish.isFavorite ? "isFavorite" : "notFavorite"}></div>
      </div>
    </div>
  );
}

export default MenuItem;
