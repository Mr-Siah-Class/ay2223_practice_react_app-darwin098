import React, { useEffect } from 'react';

function HomeScreen() {
  useEffect(() => {
    document.title = 'Home';
  });

  return (
    <div className="Main">
      <h1>HomeScreen</h1>
    </div>
  );
}

export default HomeScreen;
