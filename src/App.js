import React from 'react';

function App() {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        fontSize: '2rem',
      }}
    >
      <p style={{ maxWidth: '70%' }}>
        Please use <a href="https://storybook.js.org/">Storybook</a> to create your components. It
        has already been set up for you with an example in the `src/components` folder.
      </p>
    </div>
  );
}

export default App;
