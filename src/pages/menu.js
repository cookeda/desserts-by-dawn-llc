import React from 'react';

const menuData = {
  "Cake Flavors": [
    "Almond", "Banana", "Banana", "Chocolate Chip", "Coconut", "Dark Chocolate", 
    "Lemon", "Mocha", "Orange", "Oreo", "Pumpkin", "Red Velvet", 
    "Strawberry", "Spirits (Amaretto)", "Vanilla", "Yellow/Vanilla"
  ],
  "Fondant Decorated Cake": [
    "$4.00 - $6.00 per serving / Minimum order: $85.00"
  ],
  "Shaped/Carved Cake": [
    "Starting at $100.00 / Minimum servings: 15"
  ],
  "Buttercream Decorated Cake": [
    "$3.50 - $6.00 per serving / Minimum servings: 12"
  ],
  "Cupcake Flavors": [
    "Almond", "Banana", "Banana", "Chocolate Chip", "Coconut", "Dark Chocolate", 
    "Lemon", "Mocha", "Orange", "Oreo", "Pumpkin", "Red Velvet", 
    "Strawberry", "Spirits (Amaretto)", "Vanilla", "Yellow/Vanilla"
  ],
  "Fondant Decorated Cupcakes": [
    "$36.00 per dozen / One dozen minimum"
  ],
  "Buttercream Only": [
    "$25.00 per dozen / One dozen minimum"
  ],
  "Mini Cupcakes": [
    "$25.00 per two dozen / Two dozen minimum"
  ],
  "Fillings/Icings": [
    "Cream Cheese Icing", "Fresh Fruit", "Preserves", "Pudding", "Almond Buttercream", 
    "Chocolate Buttercream", "Chocolate Chip Buttercream", "Dark Chocolate Buttercream", 
    "Oreo Buttercream", "Peanut Butter Buttercream", "Salted Caramel Buttercream", 
    "Vanilla Buttercream"
  ],
  "Cake Pop Flavors": [
    "Almond", "Banana", "Banana", "Chocolate Chip", "Coconut", "Dark Chocolate", 
    "Lemon", "Mocha", "Oreo", "Pumpkin", "Red Velvet", "Strawberry", 
    "Spirits (Amaretto)", "Vanilla", "Yellow/Vanilla"
  ],
  "Cake Pops (Lollipop Style)": [
    "$24.00 per dozen / One dozen minimum"
  ],
  "Cake Pops (Upside Style)": [
    "$30.00 per dozen / One dozen minimum"
  ],
  "Cake Pops (Chocolate Lollipop Arrangements)": [
    "$36.00 per dozen / One dozen minimum"
  ]
};

const MenuPage = () => (
  <div>
    <div style={styles.pageContainer}>
      <div style={styles.imageContainer}>
        <img src="placeholder.jpg" alt="Left Side Image" style={styles.sideImage} />
      </div>
      <div style={styles.contentContainer}>
        <h1>Menu / Price List</h1>
        <p>Specialty Orders Welcome. Prices vary with each specialty order. Deposit and/or signed contract may be required for certain custom orders.</p>
        
        <div style={styles.categoryContainer}>
          <h2>Cake Flavors</h2>
          <p>{menuData["Cake Flavors"].join(', ')}</p>
        </div>
        
        {["Fondant Decorated Cake", "Shaped/Carved Cake", "Buttercream Decorated Cake"].map(category => (
          <div key={category} style={styles.categoryContainer}>
            <h2>{category}</h2>
            {menuData[category].map(item => (
              <p key={item}>{item}</p>
            ))}
          </div>
        ))}
        
        <div style={styles.categoryContainer}>
          <h2>Cupcake Flavors</h2>
          <p>{menuData["Cupcake Flavors"].join(', ')}</p>
        </div>

        {["Fondant Decorated Cupcakes", "Buttercream Only", "Mini Cupcakes"].map(category => (
          <div key={category} style={styles.categoryContainer}>
            <h2>{category}</h2>
            {menuData[category].map(item => (
              <p key={item}>{item}</p>
            ))}
          </div>
        ))}

        <div style={styles.categoryContainer}>
          <h2>Fillings/Icings</h2>
          <p>{menuData["Fillings/Icings"].join(', ')}</p>
        </div>
        
        <div style={styles.categoryContainer}>
          <h2>Cake Pop Flavors</h2>
          <p>{menuData["Cake Pop Flavors"].join(', ')}</p>
        </div>
        
        {["Cake Pops (Lollipop Style)", "Cake Pops (Upside Style)", "Cake Pops (Chocolate Lollipop Arrangements)"].map(category => (
          <div key={category} style={styles.categoryContainer}>
            <h2>{category}</h2>
            {menuData[category].map(item => (
              <p key={item}>{item}</p>
            ))}
          </div>
        ))}
      </div>
      <div style={styles.imageContainer}>
        <img src="placeholder.jpg" alt="Right Side Image" style={styles.sideImage} />
      </div>
    </div>
  </div>
);

const styles = {
  pageContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: '20px',
  },
  imageContainer: {
    flex: 1,
    textAlign: 'center',
  },
  contentContainer: {
    flex: 2,
    maxWidth: '800px',
    textAlign: 'center',
    padding: '0 20px',
  },
  categoryContainer: {
    margin: '20px 0',
  },
  sideImage: {
    width: '100%',
    height: 'auto',
    maxWidth: '200px',
  },
};

export default MenuPage;
