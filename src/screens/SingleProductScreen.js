import React, { useEffect } from 'react';

function SingleProductScreen(props) {
  useEffect(() => {
    document.title = 'Product ' + props.productId;
  });

  return (
    <div className="Main">
      <h1>Product {props.productId}</h1>
    </div>
  );
}

export default SingleProductScreen;
