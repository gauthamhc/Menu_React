import React, { useState } from "react";
import datas from "./data";
import Menu from "./Menu";
import Categories from "./Categories";

const allCategories = ["all", ...new Set(datas.map((data) => data.category))];

const App = () => {
  const [menuItems, setMenuItems] = useState(datas);
  const [categories, setCategories] = useState(allCategories);

  const filterItem = (category) => {
    if (category === "all") {
      setMenuItems(datas);
      return;
    }
    const newItem = datas.filter((data) => data.category === category);
    setMenuItems(newItem);
  };

  return (
    <section className="container">
      <h1>Our Menu</h1>
      <Categories filterItem={filterItem} categories={categories} />
      <div className="main-menu">
        <Menu items={menuItems} />
      </div>
    </section>
  );
};

export default App;
