import React from 'react';

const api = {
  key: '90584c6a3c4ed8e8c626b0b2d67dbf62',
  base: 'api.openweathermap.org/data/2.5/'
}



function App() {
  return (
    <div className="app ">
      <main>
        <div className='search-box'>
          <input 
            type="text"
            className='search-bar'
            placeholder='Search...'
          />
        </div>
      </main>
    </div>
  );
}

export default App;
