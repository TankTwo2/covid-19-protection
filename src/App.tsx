import React from 'react';

const styles: { [index: string]: any } = {
  textAlign: 'center',
};

function App() {
  return (
    <div className="App">
      <div className="container">
        <br />
        <div className="columns">
          <div style={styles} className={'column is-one-third'}>
            1
          </div>
          <div style={styles} className={'column is-one-third'}>
            2
          </div>
          <div style={styles} className={'column is-one-third'}>
            3
          </div>
        </div>
        <div className="columns">
          <div style={styles} className={'column is-one-third'}>
            4
          </div>
          <div style={styles} className={'column is-one-third'}>
            5
          </div>
          <div style={styles} className={'column is-one-third'}>
            6
          </div>
        </div>
        <div className="columns">
          <div style={styles} className={'column is-one-third'}>
            7
          </div>
          <div style={styles} className={'column is-one-third'}>
            8
          </div>
          <div style={styles} className={'column is-one-third'}>
            9
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
