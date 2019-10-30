import React from 'react';
import { VictoryScatter, VictoryTheme, VictoryTooltip } from "victory";

export const App = () => {

  //get a deep copy of default theme. Is there better way to do this?
  const customTheme = JSON.parse(JSON.stringify(VictoryTheme.grayscale)); 
  
  //set the padding property on scatter labels to 0
  customTheme.scatter.style.labels.padding = 0;
  
  return (
    <div className="App">
      <div style={{width:"350px", margin: '100px', border:"1px solid #ccc"}}>
        <VictoryScatter
          data={[{ x: 1, y: 1}, { x: 2, y: 2}, {x: 3, y: 3 } ]}
          size={5}
          style={{ labels: { fill: "black", fontSize: 12} }}
          labels={({ datum }) => `(${datum.x}, ${datum.y})`}
          labelComponent={<VictoryTooltip />}
          theme={customTheme} //use the customTheme from above
        />
      </div>
    </div>
  );
}