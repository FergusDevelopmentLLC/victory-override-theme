import React from 'react';
import { VictoryBar, VictoryTheme, VictoryTooltip } from "victory";

export const App = () => {

  //get a deep copy of default theme. Is there better way to do this?
  const customTheme = JSON.parse(JSON.stringify(VictoryTheme.grayscale)); 
  
  //set the padding property on bar labels to 0
  customTheme.bar.style.labels.padding = 0;
  
  return (
    <div className="App">
      <div style={{width:"350px", margin: '100px', border:"1px solid #ccc"}}>
        <VictoryBar
          data={[{ x: 1, y: 1}, { x: 2, y: 2}, {x: 3, y: 3 } ]}
          style={{ labels: { fill: "black", fontSize: 12} }}
          labels={({ datum }) => `(${datum.x}, ${datum.y})`}
          labelComponent={<VictoryTooltip />}
          theme={customTheme} //use the customTheme from above
        />
      </div>
    </div>
  );
}