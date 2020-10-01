import React from 'react';

const styles: { [index: string]: any } = {
  textAlign: 'center',
  width: '30%',
  border: '1px solid black',
};

function App() {
  return (
    <div className="App">
      <br />
      <div style={styles} className="container">
        <div className="table-container">
          <table className="table is-bordered is-fullwidth">
            <tbody>
              <tr>
                {[1, 2, 3].map((row) => (
                  <td>
                    <img src={'hole.png'} alt={'hole' + row} />
                  </td>
                ))}
              </tr>
              <tr>
                {[4, 5, 6].map((row) => (
                  <td>
                    <img src={'hole.png'} alt={'hole' + row} />
                  </td>
                ))}
              </tr>
              <tr>
                {[7, 8, 9].map((row) => (
                  <td>
                    <img src={'hole.png'} alt={'hole' + row} />
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
