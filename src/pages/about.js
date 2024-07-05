import React from 'react';

const AboutPage = () => (
  <div>
    <h1 style={{ textAlign: 'center' }}>About Us</h1>
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <div style={{ flex: 1, padding: '20px' }}>
        <p style={{ textAlign: 'left', fontSize: '16px', color: 'brown' }}>
          Hello, my name is Dawn Cooke. I have lived in Mooresville for over 15 years. Originally, I am from the Tampa, Florida area. My husband and I relocated here for the weather and NASCAR. Since our move, the majority of the time I have been a stay at home mom for two wonderful boys. I have always enjoyed doing crafts and artwork. Over the last few years I have been looking for a creative outlet and I have finally found it in cakes!!!
        </p>
        <p style={{ textAlign: 'left', fontSize: '16px', color: 'brown' }}>
          I began by making cakes for family and friends over several years and mostly self taught. All of my work is hand-crafted and customized to your specific need and event. I am proud to continue this creativity as a business. I have also attended decorating classes, conventions, and trade-shows and continue to learn new techniques.
        </p>
      </div>
      <div style={{ flex: 1, textAlign: 'center', padding: '20px' }}>
        <img src="https://via.placeholder.com/300" alt="Placeholder Image 1" style={{ marginBottom: '20px' }} />
        <img src="https://via.placeholder.com/300" alt="Placeholder Image 2" />
      </div>
    </div>
  </div>
);

export default AboutPage;
