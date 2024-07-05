import React from 'react';

const menuData = {
  "Drinks": [
    "Lemonade",
    "Seasonal Lemonade",
    "Iced/Hot Coffee",
    "Iced Tea",
    "Apple Spice (Hot/Cold) Seasonal",
    "Hot Chocolate Seasonal",
    "Cocoa Bombs Seasonal",
    "Soda Floats",
    "Bottled Water",
    "Canned Drinks",
    "Bottled Sports Drinks"
  ],
  "Shaved Ice": [],
  "Frozen Treat Bowl": [
    "Eggless Cream Treats"
  ],
  "Treats": [
    "Cookies",
    "Cookie Sandwiches",
    "Cupcakes",
    "Cake Pops",
    "Brownies",
    "Krispie Treats",
    "Shaped Krispie Treats Seasonal",
    "Decorated/Dipped Pretzel Rod",
    "Decorated/Dipped Oreo or Peanut Butter Cookie Sandwiches",
    "Cheesecake",
    "Seasonal Cheesecake",
    "Popcorn",
    "Popcorn Goodness",
    "Sweet Pretzel Nachos",
    "Sliced Cake",
    "S'mores (Frozen, Walking, Traditional)",
    "Cookie/Brownie Sunday",
    "Dessert Dip Delish"
  ]
};

const DessertTruckPage = () => (
  <div>
    <h1>Dessert Truck Menu</h1>
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <div>
        <h2>Drinks</h2>
        {menuData.Drinks.map(item => (
          <p key={item}>{item}</p>
        ))}
      </div>
      <div>
        <h2>Shaved Ice</h2>
        {menuData["Shaved Ice"].map(item => (
          <p key={item}>{item}</p>
        ))}
        <h2>Frozen Treat Bowl</h2>
        {menuData["Frozen Treat Bowl"].map(item => (
          <p key={item}>{item}</p>
        ))}
      </div>
      <div>
        <h2>Treats</h2>
        {menuData.Treats.map(item => (
          <p key={item}>{item}</p>
        ))}
      </div>
    </div>
  </div>
);

export default DessertTruckPage;
