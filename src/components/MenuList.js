import React from "react";
import MenuItem from "./MenuItem";

function MenuList({ foodItems, handle }) {
  

  return (
    <div>
      {foodItems.map((dish, index) => {
          return (
              <MenuItem dish={dish} index={index} key={index} handle={handle}  />
          )
      })}
    </div>
  );
}

export default MenuList;
