import React from "react";

const Menu = ({ items }) => {
  return (
    <>
      {items.map((item) => {
        const { id, title, category, price, img, desc } = item;
        return (
          <div className="menu">
            <img src={img} alt={title} />
            <header>
              <h3>{title}</h3>
              <p>${price}</p>
            </header>
            <p className="desc"> {desc}</p>
          </div>
        );
      })}
    </>
  );
};

export default Menu;
