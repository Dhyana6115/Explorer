// PropsPage.js
import React from 'react';
import Props from './Props';
import PropsCardUI from './PropsCardUi';


const PropsPage = () => {
  return (
    <div className="container my-5">
      <h1 className="text-center p-5">Our Products</h1>
      <div className="row">
        {Props.map((item) => (
          <PropsCardUI
            
            title={item.Title}
            description={item.Description}
            price={item.Price}
            Image={item.Image}
          />
        ))}
      </div>
    </div>
  );
};

export default PropsPage;
